<script setup>
import { inject } from 'vue'
import CartContent from './CartContent.vue'
import CartHeading from './CartHeading.vue'
import CartInfo from './CartInfo.vue'
import EmptyCart from './EmptyCart.vue'

const { cartList } = inject('state')
</script>

<template>
  <div class="fixed top-0 left-0 z-10 w-full h-full bg-customCartBg">
    <div class="fixed top-0 right-0 z-20 bg-customWhite w-[min(100%,384px)] h-full p-5 max-md:p-4">
      <CartHeading />
      <div v-if="cartList.length">
        <CartContent />
        <CartInfo />
      </div>
      <div
        class="flex flex-col justify-center items-center gap-5 h-[calc(100dvh-48px)] max-md:gap-4"
        v-else
      >
        <EmptyCart />
      </div>
    </div>
  </div>
</template>
