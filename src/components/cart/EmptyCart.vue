<script setup>
import { inject } from 'vue'

const { toggleCart, cartInfoIdx } = inject('state')

const info = [
  {
    title: 'Cart is empty',
    text: 'Add at least one pair of sneakers to complete your order',
    iconUrl: '/icons/package-icon.png'
  },
  {
    title: 'Order is processed!',
    text: 'Your order will soon be transferred to courier delivery',
    iconUrl: '/icons/order-success-icon.png'
  }
]
</script>

<template>
  <img
    :src="info[cartInfoIdx].iconUrl"
    :alt="info[cartInfoIdx].title + 'image'"
    class="w-1/2 aspect-square object-contain"
  />
  <h2 class="text-xl font-semibold leading-6">{{ info[cartInfoIdx].title }}</h2>
  <p class="text-center text-base text-neutral-500 font-normal leading-6">
    {{ info[cartInfoIdx].text }}
  </p>

  <button
    @click="toggleCart"
    type="button"
    title="Back"
    class="flex justify-center items-center gap-2 bg-customGreen w-9/12 h-14 rounded-lg shadow-xl text-customWhite text-lg font-medium transition opacity-85 hover:opacity-100 active:scale-95"
  >
    <img src="/icons/arrow-next.svg" alt="arrow next svg" />
    Back
  </button>
</template>
