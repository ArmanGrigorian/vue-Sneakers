<script setup>
import { computed, onBeforeMount, provide, reactive, ref } from 'vue'
import { DATA } from '../DATA.js'
import { sneakersAPI } from './api/api.js'
import MyCart from './components/cart/MyCart.vue'
import MyHeader from './components/header/MyHeader.vue'
import SneakersSection from './components/sneakers/SneakersSection.vue'

const sneakers = ref([])
const cartList = computed(() => sneakers.value.filter((sneaker) => sneaker.isAdded))
const totalPrice = computed(() =>
  cartList.value.reduce((total, sneaker) => total + +sneaker.price, 0)
)
const tax = computed(() => ((totalPrice.value * percentage.value) / 100).toFixed(2))
const percentage = ref(5)
const cartIsOpen = ref(false)
const loadingSneakers = ref(false)
const filters = reactive({
  searchQuery: '',
  sortBy: ''
})

// orders
async function addOrders() {
  try {
    await sneakersAPI.addOrders(cartList.value)
    await sneakersAPI.clearCart()
    sneakers.value = sneakers.value.map((sneaker) => {
      if (sneaker.isAdded) sneaker.isAdded = false
      return sneaker
    })
    localStorage.setItem('sneakers', JSON.stringify(sneakers.value))
    localStorage.setItem('cartList', JSON.stringify([]))
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
      const cartList = data.find((val) => val.item_id === sneaker.id)

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
  sneaker.isAdded = false
  await sneakersAPI.deleteCartList(sneaker)
  sneaker.cartListId = null
  sneakers.value = sneakers.value.map((val) => {
    if (val.id === sneaker.item_id) val.isAdded = false
    return val
  })
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
      const favorite = data.find((val) => val.item_id === sneaker.id)

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
  sneaker.isFavorite = true
  const { data } = await sneakersAPI.addFavorite(sneaker)
  sneaker.favoriteId = data.id
}

async function deleteFromFavorites(sneaker) {
  sneaker.isFavorite = false
  await sneakersAPI.deleteFavorite(sneaker)
  sneaker.favoriteId = null
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
      favoriteId: null,
      cartListId: null
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
})

provide('tax', tax)
provide('filters', filters)
provide('sneakers', sneakers)
provide('cart-list', cartList)
provide('add-orders', addOrders)
provide('percentage', percentage)
provide('total-price', totalPrice)
provide('toggle-cart', toggleCart)
provide('get-sneakers', getSneakers)
provide('get-cart-list', getCartList)
provide('get-favorites', getFavorites)
provide('manage-favorite', manageFavorite)
provide('manage-cart-list', manageCartList)
provide('loading-sneakers', loadingSneakers)
</script>

<template>
  <MyCart v-if="cartIsOpen" />
  <main class="max-w-7xl mx-auto bg-customWhite rounded-xl shadow-xl">
    <MyHeader />
    <SneakersSection />
  </main>
</template>
