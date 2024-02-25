<script setup>
import { inject } from 'vue'
import SneakerCard from './SneakerCard.vue'

const sneakers = inject('sneakers')
const loadingSneakers = inject('loading-sneakers')
</script>

<template>
  <div class="p-5 flex flex-wrap justify-around items-start gap-7 max-md:p-4 max-md:gap-5">
    <p v-if="loadingSneakers" class="text-center text-lg font-medium">Loading...</p>
    <SneakerCard v-else v-for="sneaker in sneakers" :key="sneaker.id" :sneaker="sneaker" />
  </div>
</template>
