<script setup>
import { inject } from 'vue'

const toggleCart = inject('toggle-cart')
</script>

<template>
    <img 
      src="/icons/package-icon.png"
      alt="empty box image"
      class="w-1/2 object-contain"
      />
    <h2 class="text-xl font-semibold leading-6">Cart is empty</h2>
    <p class="text-center text-base text-neutral-500 font-normal leading-6">
      Add at least one pair of sneakers to complete your order
    </p>

    <button
    @click="toggleCart"
     type="button"
     title="Back"
     class="flex justify-center items-center gap-2 bg-customGreen w-9/12 h-14 rounded-lg shadow-xl text-customWhite text-lg font-medium transition opacity-85 hover:opacity-100 active:scale-95"
     >
     <img src="/icons/arrow-next.svg" alt="arrow next svg">
     Back
     </button>
</template>
