<script setup>
defineProps({
  title: String,
  text: String,
  iconUrl: String
})
</script>

<template>
  <img :src="iconUrl" :alt="title + 'image'" class="w-12" />

  <div class="text-center">
    <h2 class="text-2xl font-semibold">{{ title }}</h2>
    <p class="text-center text-lg text-neutral-500 font-normal">
      {{ text }}
    </p>
  </div>

  <router-link
    to="/"
    title="Back to homepage"
    class="mt-2 flex justify-center items-center gap-2 bg-customGreen w-40 h-12 rounded-lg shadow-xl text-customWhite text-lg font-medium transition opacity-85 hover:opacity-100 active:scale-95"
  >
    <img src="/icons/arrow-next.svg" alt="arrow next svg" />
    Back
  </router-link>
</template>
