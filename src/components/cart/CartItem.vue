<script setup>
import { inject } from 'vue'

defineProps({
  sneaker: Object
})

const { manageCartList } = inject('state')
</script>

<template>
  <div
    class="relative w-[90%] flex flex-col justify-center items-start gap-2 bg-customWhite border rounded-xl shadow-md p-3 transition hover:-translate-y-[2px] hover:shadow-xl max-3xs:w-full"
  >
    <button
      @click="manageCartList(sneaker)"
      type="button"
      title="remove from cart"
      class="absolute top-3 right-3 w-10 h-10 border border-neutral-300 rounded-md shadow font-bold text-neutral-400 hover:text-customWhite hover:bg-red-700 active:scale-95"
    >
      X
    </button>

    <img :src="sneaker.imageUrl" :alt="sneaker.title + ' image'" class="w-[25%]" />

    <div>
      <h5 class="text-customBlack text-base font-medium">
        {{ sneaker.title }}
      </h5>
      <p class="text-customGrey text-sm font-normal">
        Price: <strong class="text-customBlack font-semibold">{{ sneaker.price }} &dollar;;</strong>
      </p>
    </div>
  </div>
</template>
