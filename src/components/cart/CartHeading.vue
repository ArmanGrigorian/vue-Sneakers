<script setup>
import { inject } from 'vue'
const toggleCart = inject('toggle-cart')
const cartList = inject('cart-list')
</script>

<template>
  <div class="flex justify-between items-center gap-1">
    <h2 class="text-customBlack text-2xl font-bold">Cart</h2>
    <button
      v-if="cartList.length"
      @click="toggleCart"
      type="button"
      title="remove from cart"
      class="w-12 h-12 border border-neutral-300 rounded-md shadow font-extrabold text-neutral-400 hover:text-customWhite hover:bg-red-700 active:scale-95"
    >
      X
    </button>
  </div>
</template>
