<script setup>
import { inject } from 'vue'
defineProps({
  iconUrl: String,
  title: String,
  text: String
})

const toggleCart = inject('toggle-cart')
</script>

<template>
    <img 
      :src="iconUrl"
      :alt="title + ' image'" 
      class="w-1/2 object-contain"
      />
    <h2 class="text-xl font-semibold leading-6">{{ title }}</h2>
    <p class="text-center text-base text-neutral-500 font-normal leading-6">
      {{ text }}
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
