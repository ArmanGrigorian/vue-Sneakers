<script setup>
import SneakerCard from './SneakerCard.vue'
</script>

<template>
  <section class="p-5 max-md:p-4">
    <h2 class="text-customBlack text-2xl font-medium">Все кроссовки</h2>

    <div class="p-5 flex flex-wrap justify-around items-start gap-5 max-md:p-4 max-md:gap-4">
      <SneakerCard />
      <SneakerCard />
      <SneakerCard />
      <SneakerCard />
    </div>
  </section>
</template>
