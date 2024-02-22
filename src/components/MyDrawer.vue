<script setup>
import DrawerContent from './DrawerContent.vue'
import DrawerHeading from './DrawerHeading.vue'
</script>

<template>
  <div class="fixed top-0 left-0 z-10 w-full h-full bg-customDrawerBg">

    <div class="fixed top-0 right-0 z-20 bg-customWhite w-[min(100%,384px)] h-full p-5 max-md:p-4">

      <DrawerHeading />
      <DrawerContent />

    </div>

  </div>
</template>
