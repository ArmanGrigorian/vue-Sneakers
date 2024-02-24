<script setup>
import { debounce } from '@/lib/debounce'
import axios from 'axios'
import { onMounted, provide, reactive, ref, watch } from 'vue'
import SectionContent from './SectionContent.vue'
import SectionTop from './SectionTop.vue'

const url = 'https://211d4e041ca93fee.mokky.dev'
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
  try {
    const { data: favorites } = await axios.get(url + '/favorites')

    sneakers.value = sneakers.value.map((sneaker) => {
      const favorite = favorites.find((fav) => fav.item_id === sneaker.id)
      console.log(favorite)

      if (!favorite) return sneaker

      return {
        ...sneaker,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.error(err)
  }
}

async function postDeleteFromFavorites(sneaker) {
  try {
    if (!sneaker.isFavorite) {
      const obj = {
        ...sneaker,
        item_id: sneaker.id
      }

      sneaker.isFavorite = true
      const { data } = await axios.post(url + '/favorites', obj)

      sneaker.favoriteId = data.id
    } else {
      sneaker.isFavorite = false
      await axios.delete(url + `/favorites/${sneaker.favoriteId}`)
      sneaker.favoriteId = null
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
      favoriteId: null
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

provide('postDeleteFromFavorites', postDeleteFromFavorites)
</script>

<template>
  <section class="p-5 max-md:p-4">
    <SectionTop :handle-search="handleSearch" :handle-sort="handleSort" />
    <SectionContent :sneakers="sneakers" :loading-sneakers="loadingSneakers" />
  </section>
</template>
