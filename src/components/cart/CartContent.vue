<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const cartList = inject('cart-list')
</script>

<template>
  <div
    v-auto-animate
    class="CartContentMask flex flex-col justify-start items-center my-5 gap-5 h-[calc(100dvh-252px)] overflow-y-auto max-md:gap-4 max-md:my-4"
  >
    <CartItem v-for="sneaker in cartList" :key="sneaker.id" :sneaker="sneaker" />
  </div>
  
</template>
