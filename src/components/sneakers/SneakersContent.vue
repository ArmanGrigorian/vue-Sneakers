<script setup>
import { inject } from 'vue'
import SneakerCard from './SneakerCard.vue'

const sneakers = inject('sneakers')
</script>

<template>
  <div
    v-auto-animate
    class="p-5 flex flex-wrap justify-around items-start gap-7 max-md:p-4 max-md:gap-5"
  >
    <SneakerCard v-for="sneaker in sneakers" :key="sneaker.id" :sneaker="sneaker" />
  </div>
</template>
