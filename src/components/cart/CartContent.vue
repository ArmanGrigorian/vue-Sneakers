<script setup>
import CartItem from './CartItem.vue'
</script>

<template>
  <div
    class="CArtContentMask flex flex-col justify-start items-center my-5 gap-5 h-[calc(100dvh-252px)] overflow-y-auto max-md:gap-4 max-md:my-4"
  >
    <CartItem
      image-url="/images/sneakers-1.jpg"
      title="Nike Blazer Mid Suede"
      :price="12.999"
      :is-favorite="false"
      :is-added="false"
    />
  </div>
</template>
