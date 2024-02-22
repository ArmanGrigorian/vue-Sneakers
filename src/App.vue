<script setup>
import MyDrawer from './components/MyDrawer.vue'
import MyHeader from './components/MyHeader.vue'
import SneakersSection from './components/SneakersSection.vue'
</script>

<template>
  <MyDrawer />
  <main class="max-w-[1440px] mx-auto bg-customWhite rounded-xl shadow-xl">
    <MyHeader />
    <SneakersSection />
  </main>
</template>
