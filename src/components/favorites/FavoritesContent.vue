<script setup>
import { inject } from 'vue'
import FavoriteCard from './FavoriteCard.vue'

const { favorites } = inject('state')
</script>

<template>
  <div v-auto-animate class="p-5 flex flex-col items-center gap-7 max-md:p-4 max-md:gap-5">
    <FavoriteCard v-for="sneaker in favorites" :key="sneaker.id" :sneaker="sneaker" />
  </div>
</template>
