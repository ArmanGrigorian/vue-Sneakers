<script setup>
import axios from 'axios'
import { onMounted, reactive, ref, watch } from 'vue'
import { debounce } from '../../lib/debounce.js'
import SneakerCard from './SneakerCard.vue'

const sneakers = ref([])
const isLoading = ref(false)
const filters = reactive({
  searchQuery: '',
  sortBy: ''
})

function handleSort(e) {
  filters.sortBy = e.target.value
}

function handleSearch(e) {
  filters.searchQuery = e.target.value
}

const handleSearchDebounced = debounce(handleSearch)

async function getSneakers(searchQuery, sortBy) {
  const url = 'https://211d4e041ca93fee.mokky.dev/items'
  const params = new URLSearchParams()

  try {
    isLoading.value = true
    if (searchQuery) params.append('title', '*' + filters.searchQuery)
    if (sortBy) params.append('sortBy', filters.sortBy)
    const req = await axios.get(`${url}?${params.toString()}`)
    sneakers.value = req.data
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getSneakers()
})

watch(filters, () => {
  getSneakers(filters.searchQuery, filters.sortBy)
})
</script>

<template>
  <section class="p-5 max-md:p-4">
    <div class="flex justify-between items-center gap-2 max-md:flex-col">
      <h2 class="text-customBlack text-3xl font-bold">Все кроссовки</h2>

      <div class="px-2 py-1 border rounded max-md:w-full">
        <select @change="handleSort" name="sort" class="w-full outline-offset-4">
          <option value="title">По названию</option>
          <option value="price">По цене по возрастанию</option>
          <option value="-price">По цене по убыванию</option>
        </select>
      </div>

      <div class="relative max-md:w-full">
        <img
          src="/icons/search.svg"
          alt="search svg"
          class="absolute top-0 bottom-0 my-auto left-2"
        />
        <input
          @input="handleSearchDebounced"
          type="text"
          name="search"
          placeholder="Поиск..."
          class="w-full pl-7 pr-2 py-1 border rounded"
        />
      </div>
    </div>

    <div class="p-5 flex flex-wrap justify-around items-start gap-7 max-md:p-4 max-md:gap-5">
      <p class="text-center text-lg font-medium" v-if="isLoading">Loading...</p>
      <SneakerCard
        v-else
        v-for="sneaker in sneakers"
        :key="sneaker.id"
        :img-src="sneaker.imgSrc"
        :img-alt="sneaker.imgAlt"
        :title="sneaker.title"
        :price="sneaker.price"
        :is-favorite="sneaker.isFavorite"
        :is-added="sneaker.isAdded"
      />
    </div>
  </section>
</template>
