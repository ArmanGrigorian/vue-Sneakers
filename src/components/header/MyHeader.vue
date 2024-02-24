<script setup>
import HeaderTop from './HeaderTop.vue'
</script>

<template>
  <header>
    <HeaderTop />

    <div
      class="flex flex-col justify-center items-start gap-5 relative pl-14 h-96 rounded-xl shadow-md bg-headerBg bg-no-repeat bg-contain bg-right bg-customHeaderBg m-5 max-md:m-4 max-md:p-0 max-md:items-center"
    >
      <img src="/images/headerLogos.png" alt="header logos png" class="absolute top-4 left-4" />
      <h1 class="text-7xl text-customGreen font-bold max-md:text-5xl max-sm:text-4xl">
        Stan Smith, <br />
        <span class="text-customBlack">Forever!</span>
      </h1>
      <button
        type="button"
        title="Купить"
        class="bg-customGreen text-customWhite font-medium w-44 h-12 rounded-md shadow-lg hover:text-customGreen hover:bg-customMainBg active:scale-95"
      >
        Buy Now
      </button>
    </div>
  </header>
</template>
