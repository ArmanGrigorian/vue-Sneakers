<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import SneakerCard from './SneakerCard.vue'

const sneakers = ref([])
const isLoading = ref(false)
const url = 'https://211d4e041ca93fee.mokky.dev'

async function getSneakers() {
  try {
    isLoading.value = true
    const req = await axios.get(url + '/items')
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
</script>

<template>
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
</template>

