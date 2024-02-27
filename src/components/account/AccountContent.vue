<script setup>
import { inject } from 'vue'
import OrderCard from './OrderCard.vue'

const orders = inject('orders')
</script>

<template>
  <div
    v-auto-animate
    class="p-5 flex flex-wrap justify-around items-start gap-7 max-md:p-4"
  >
    <OrderCard v-for="sneaker in orders" :key="sneaker.id" :sneaker="sneaker" />
  </div>
</template>