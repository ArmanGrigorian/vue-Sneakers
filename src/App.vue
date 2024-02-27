<script setup>
import { computed, onBeforeMount, provide, reactive, ref } from 'vue'
import { DATA } from '../DATA.js'
import { sneakersAPI } from './api/api.js'
import MyCart from './components/cart/MyCart.vue'
import MyHeader from './components/header/MyHeader.vue'

const sneakers = ref([])
const orders = computed(() => sneakers.value.filter((sneaker) => sneaker.isOrdered))
const favorites = computed(() => sneakers.value.filter((sneaker) => sneaker.isFavorite))
const cartList = computed(() => sneakers.value.filter((sneaker) => sneaker.isAdded))
const totalPrice = computed(() =>
  cartList.value.reduce((total, sneaker) => {
    total = (+total + sneaker.price).toFixed(2)
    return total
  }, 0)
)
const tax = computed(() => ((totalPrice.value * percentage.value) / 100).toFixed(2))
const percentage = ref(5)
const cartIsOpen = ref(false)
const loadingSneakers = ref(false)
const orderStatus = ref(true)
const filters = reactive({
  searchQuery: '',
  sortBy: ''
})

// orders
async function getOrders() {
  try {
    const { data } = await sneakersAPI.getOrders()

    sneakers.value = sneakers.value.map((sneaker) => {
      const orders = data.find((val) => val.itemId === sneaker.id)

      if (!orders) return sneaker

      return {
        ...sneaker,
        isOrdered: true,
        orderId: orders.id,
        orderDate: orders.orderDate
      }
    })
    localStorage.setItem('sneakers', JSON.stringify(sneakers.value))
    localStorage.setItem('orders', JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}
async function addOrders() {
  try {
    orderStatus.value = false
    cartList.value.forEach((val) => {
      val.isOrdered = true
      val.orderId = val.id
      val.orderDate = new Date().toLocaleString()
    })
    await sneakersAPI.addOrders(cartList.value)
    await sneakersAPI.clearCart()
    sneakers.value = sneakers.value.map((sneaker) => {
      if (sneaker.isAdded) {
        sneaker.isAdded = false
        sneaker.cartListId = null
        sneaker.isOrdered = true
        sneaker.orderId = sneaker.id
        sneaker.orderDate = new Date().toLocaleString()
        return sneaker
      }
      return sneaker
    })
    localStorage.setItem('sneakers', JSON.stringify(sneakers.value))
    localStorage.setItem('cartList', JSON.stringify([]))
    orderStatus.value = true
  } catch (err) {
    console.error(err)
    alert('OOPS! Something went wrong')
  }
}

async function deleteOrders(sneaker) {
  try {
    await sneakersAPI.deleteOrder(sneaker)
    sneaker.isOrdered = false
    sneaker.orderId = null
    sneaker.orderDate = null
    localStorage.setItem('sneakers', JSON.stringify(sneakers.value))
  } catch (err) {
    console.error(err)
  }
}

async function clearPurchaseHistory() {
  try {
    await sneakersAPI.clearOrdersHistory()
    sneakers.value = sneakers.value.map((sneaker) => {
      if (sneaker.isOrdered) {
        sneaker.isOrdered = false
        sneaker.orderId = null
        sneaker.orderDate = null
        return sneaker
      }
      return sneaker
    })
    localStorage.setItem('sneakers', JSON.stringify(sneakers.value))
  } catch (err) {
    console.error(err)
  }
}

// cart
function toggleCart() {
  cartIsOpen.value = !cartIsOpen.value
}
async function getCartList() {
  try {
    const { data } = await sneakersAPI.getCart()

    sneakers.value = sneakers.value.map((sneaker) => {
      const cartList = data.find((val) => val.itemId === sneaker.id)

      if (!cartList) return sneaker

      return {
        ...sneaker,
        isAdded: true,
        cartListId: cartList.id
      }
    })
    localStorage.setItem('sneakers', JSON.stringify(sneakers.value))
    localStorage.setItem('cartList', JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

async function addToCartList(sneaker) {
  sneaker.isAdded = true
  const { data } = await sneakersAPI.addCartList(sneaker)
  sneaker.cartListId = data.id
}

async function deleteFromCartList(sneaker) {
  try {
    sneaker.isAdded = false
    await sneakersAPI.deleteCartList(sneaker)
    sneaker.cartListId = null
    sneakers.value = sneakers.value.map((val) => {
      if (val.id === sneaker.itemId) val.isAdded = false
      return val
    })
  } catch (err) {
    console.error(err)
  }
}

async function manageCartList(sneaker) {
  try {
    if (!sneaker.isAdded) addToCartList(sneaker)
    else deleteFromCartList(sneaker)
  } catch (err) {
    console.error(err)
  } finally {
    localStorage.setItem('sneakers', JSON.stringify(sneakers.value))
  }
}

// favorites
async function getFavorites() {
  try {
    const { data } = await sneakersAPI.getAllFavorites()

    sneakers.value = sneakers.value.map((sneaker) => {
      const favorite = data.find((val) => val.itemId === sneaker.id)

      if (!favorite) return sneaker

      return {
        ...sneaker,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
    localStorage.setItem('sneakers', JSON.stringify(sneakers.value))
    localStorage.setItem('favorites', JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

async function addToFavorites(sneaker) {
  try {
    sneaker.isFavorite = true
    const { data } = await sneakersAPI.addFavorite(sneaker)
    sneaker.favoriteId = data.id
  } catch (err) {
    console.error(err)
  }
}

async function deleteFromFavorites(sneaker) {
  try {
    sneaker.isFavorite = false
    await sneakersAPI.deleteFavorite(sneaker)
    sneaker.favoriteId = null
  } catch (err) {
    console.error(err)
  }
}

async function manageFavorite(sneaker) {
  try {
    if (!sneaker.isFavorite) addToFavorites(sneaker)
    else deleteFromFavorites(sneaker)
  } catch (err) {
    console.error(err)
  } finally {
    localStorage.setItem('sneakers', JSON.stringify(sneakers.value))
  }
}

// sneakers
async function getSneakers(searchQuery, sortBy) {
  try {
    loadingSneakers.value = true
    const req = await sneakersAPI.getAllSneakers(searchQuery, sortBy, filters)
    const sneakersData = req.data
    sneakers.value = sneakersData.map((obj) => ({
      ...obj,
      isFavorite: false,
      isAdded: false,
      isOrdered: false,
      favoriteId: null,
      cartListId: null,
      orderId: null
    }))
    localStorage.setItem('sneakers', JSON.stringify(sneakers.value))
  } catch (err) {
    console.error(err)
    if (localStorage.getItem('sneakers')) {
      sneakers.value = JSON.parse(localStorage.getItem('sneakers'))
    } else {
      sneakers.value = DATA
    }
  } finally {
    loadingSneakers.value = false
  }
}

onBeforeMount(async () => {
  await getSneakers()
  await getFavorites()
  await getCartList()
  await getOrders()
})

provide('tax', tax)
provide('orders', orders)
provide('filters', filters)
provide('sneakers', sneakers)
provide('cart-list', cartList)
provide('favorites', favorites)
provide('add-orders', addOrders)
provide('percentage', percentage)
provide('toggle-cart', toggleCart)
provide('total-price', totalPrice)
provide('order-status', orderStatus)
provide('get-sneakers', getSneakers)
provide('get-cart-list', getCartList)
provide('get-favorites', getFavorites)
provide('delete-orders', deleteOrders)
provide('manage-favorite', manageFavorite)
provide('manage-cart-list', manageCartList)
provide('loading-sneakers', loadingSneakers)
provide('clear-purchase-history', clearPurchaseHistory)
</script>

<template>
  <MyCart v-if="cartIsOpen" />
  <main class="max-w-7xl mx-auto bg-customWhite rounded-xl shadow-xl">
    <MyHeader />
    <router-view></router-view>
  </main>
</template>
