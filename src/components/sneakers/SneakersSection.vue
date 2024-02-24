<script setup>
import { debounce } from '@/lib/debounce'
import axios from 'axios'
import { onMounted, provide, reactive, ref, watch } from 'vue'
import SectionContent from './SectionContent.vue'
import SectionTop from './SectionTop.vue'

const sneakers = ref([])
const loadingSneakers = ref(false)
const filters = reactive({
  searchQuery: '',
  sortBy: ''
})

const handleSort = (e) => {
  filters.sortBy = e.target.value
}
const handleSearch = debounce((e) => {
  filters.searchQuery = e.target.value
})

async function getFavorites() {
  const url = 'https://211d4e041ca93fee.mokky.dev/favorites'
  try {
    const { data: favorites } = await axios.get(url)

    sneakers.value = sneakers.value.map((sneaker) => {
      const favorite = favorites.find((fav) => fav.favoriteId === sneaker.id)

      if (!favorite) return sneaker

      return {
        ...sneaker,
        isFavorite: !sneaker.isFavorite,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.error(err)
  }
}

async function addToFavorites(sneaker) {
  sneaker.isFavorite = !sneaker.isFavorite
}

async function getSneakers(searchQuery, sortBy) {
  const url = 'https://211d4e041ca93fee.mokky.dev/items'
  const params = new URLSearchParams()

  try {
    loadingSneakers.value = true
    if (searchQuery) params.append('title', '*' + filters.searchQuery)
    if (sortBy) params.append('sortBy', filters.sortBy)
    const { data } = await axios.get(`${url}?${params.toString()}`)
    sneakers.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      isAdded: false
    }))
  } catch (err) {
    console.error(err)
  } finally {
    loadingSneakers.value = false
  }
}

onMounted(async () => {
  await getSneakers()
  await getFavorites()
})

watch(filters, () => {
  getSneakers(filters.searchQuery, filters.sortBy)
})

provide('addToFavorites', addToFavorites)
</script>

<template>
  <section class="p-5 max-md:p-4">
    <SectionTop :handle-search="handleSearch" :handle-sort="handleSort" />
    <SectionContent :sneakers="sneakers" :loading-sneakers="loadingSneakers" />
  </section>
</template>
