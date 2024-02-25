<script setup>
import axios from 'axios'
import { onBeforeMount, provide, reactive, ref } from 'vue'
import MyCart from './components/cart/MyCart.vue'
import MyHeader from './components/header/MyHeader.vue'
import SneakersSection from './components/sneakers/SneakersSection.vue'

const orders = ref([])
const favorites = ref([])
const sneakers = ref([])
const totalPrice = ref(0)
const tax = ref(0)
const percentage = 5
const cartIsOpen = ref(false)
const loadingSneakers = ref(false)
const url = 'https://211d4e041ca93fee.mokky.dev'
const filters = reactive({
  searchQuery: '',
  sortBy: ''
})

function calcPriceAndTax(orders) {
  totalPrice.value = orders.value.reduce((total, sneaker) => {
    total = total + +sneaker.price.toFixed(2)
    return total
  }, 0)
  tax.value = ((totalPrice.value * percentage) / 100).toFixed(2)
}

function toggleCart() {
  cartIsOpen.value = !cartIsOpen.value
}

async function getOrders() {
  try {
    const { data: ordersData } = await axios.get(url + '/orders')

    sneakers.value = sneakers.value.map((sneaker) => {
      const order = ordersData.find((order) => order.item_id === sneaker.id)

      if (!order) return sneaker

      return {
        ...sneaker,
        isAdded: true,
        orderId: order.id
      }
    })
    orders.value = ordersData
    calcPriceAndTax(orders)
  } catch (err) {
    console.error(err)
  }
}

async function postDeleteOrder(sneaker) {
  try {
    if (!sneaker.isAdded) {
      sneaker.isAdded = true
      const obj = { ...sneaker, item_id: sneaker.id }
      const { data } = await axios.post(url + '/orders', obj)
      sneaker.orderId = data.id
      obj.orderId = data.id
      orders.value.push(obj)
      calcPriceAndTax(orders)
    } else {
      sneaker.isAdded = false
      orders.value = orders.value.filter((item) => item.id !== sneaker.id)
      await axios.delete(url + `/orders/${sneaker.orderId}`)
      sneaker.orderId = null
      sneakers.value = sneakers.value.map((val) => {
        if (val.id === sneaker.item_id) val.isAdded = false;
        return val
      })
      calcPriceAndTax(orders)
    }
  } catch (err) {
    console.error(err)
  }
}

async function getFavorites() {
  try {
    const { data: favoritesData } = await axios.get(url + '/favorites')

    sneakers.value = sneakers.value.map((sneaker) => {
      const favorite = favoritesData.find((favorite) => favorite.item_id === sneaker.id)

      if (!favorite) return sneaker

      return {
        ...sneaker,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
    favorites.value = favoritesData
  } catch (err) {
    console.error(err)
  }
}

async function postDeleteFavorite(sneaker) {
  try {
    if (!sneaker.isFavorite) {
      sneaker.isFavorite = true
      const obj = { ...sneaker, item_id: sneaker.id }
      const { data } = await axios.post(url + '/favorites', obj)
      sneaker.favoriteId = data.id
      obj.favoriteId = data.id
      favorites.value.push(obj)
    } else {
      sneaker.isFavorite = false
      await axios.delete(url + `/favorites/${sneaker.favoriteId}`)
      sneaker.favoriteId = null
      favorites.value = favorites.value.filter((item) => item.id !== sneaker.id)
    }
  } catch (err) {
    console.error(err)
  }
}

async function getSneakers(searchQuery, sortBy) {
  const params = new URLSearchParams()

  try {
    loadingSneakers.value = true
    if (searchQuery) params.append('title', '*' + filters.searchQuery)
    if (sortBy) params.append('sortBy', filters.sortBy)
    const { data } = await axios.get(`${url}/items?${params.toString()}`)
    sneakers.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      isAdded: false,
      favoriteId: null,
      orderId: null
    }))
  } catch (err) {
    console.error(err)
  } finally {
    loadingSneakers.value = false
  }
}

onBeforeMount(async () => {
  await getSneakers()
  await getFavorites()
  await getOrders()
})

provide('tax', tax)
provide('orders', orders)
provide('filters', filters)
provide('sneakers', sneakers)
provide('get-orders', getOrders)
provide('total-price', totalPrice)
provide('percentage', percentage)
provide('toggle-cart', toggleCart)
provide('get-sneakers', getSneakers)
provide('get-favorites', getFavorites)
provide('loading-sneakers', loadingSneakers)
provide('post-delete-order', postDeleteOrder)
provide('post-delete-favorite', postDeleteFavorite)
</script>

<template>
  <MyCart v-if="cartIsOpen" />
  <main class="max-w-7xl mx-auto bg-customWhite rounded-xl shadow-xl">
    <MyHeader />
    <SneakersSection />
  </main>
</template>
