<script setup>
import HeaderNav from './HeaderNav.vue'
</script>

<template>
  <div
    class="flex justify-between items-center border-b border-neutral-200 mx-5 py-5 max-md:mx-4 max-md:py-4 max-md:flex-col max-md:justify-center max-md:gap-4"
  >
    <router-link to="/" class="flex items-center gap-2">
      <img src="/icons/logo.png" alt="Logo png" class="w-10" />
      <div>
        <h2 class="text-customBlack text-2xl font-bold select-none max-md:text-xl">Vue Sneakers</h2>

        <p class="text-customGrey text-sm font-medium select-none">Shop the best sneakers</p>
      </div>
    </router-link>

    <HeaderNav />
  </div>
</template>
