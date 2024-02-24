<script setup>
import CartContent from './CartContent.vue'
import CartHeading from './CartHeading.vue'
import CartInfo from './CartInfo.vue'
</script>

<template>
  <div class="fixed top-0 left-0 z-10 w-full h-full bg-customCartBg">
    <div class="fixed top-0 right-0 z-20 bg-customWhite w-[min(100%,384px)] h-full p-5 max-md:p-4">
      <CartHeading />
      <CartContent />
      <CartInfo />
    </div>
  </div>
</template>
