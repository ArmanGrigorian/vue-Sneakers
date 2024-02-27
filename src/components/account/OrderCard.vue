<script setup>
import { inject } from 'vue'

defineProps({
  sneaker: Object
})

const deleteOrders = inject('delete-orders')
</script>

<template>
  <div
    class="border w-[272px] rounded-3xl shadow-md flex flex-col gap-4 p-5 transition hover:-translate-y-1 hover:shadow-xl max-3xs:w-full"
  >
    <div>
      <img
        :src="sneaker.imageUrl"
        :alt="sneaker.title + ' image'"
        class="block w-full max-h-40 object-contain object-top"
      />
      <h5 class="text-customBlack text-base text-center font-semibold">
        {{ sneaker.title }}
      </h5>
    </div>

    <div class="flex flex-col items-start gap-1">
      <p class="text-customGrey text-sm font-normal">
        Price:
        {{ sneaker.price }} &dollar;
      </p>
      <p class="text-customGrey text-sm font-normal">Date: {{ sneaker.orderDate }}</p>
    </div>

    <button
      @click="deleteOrders(sneaker)"
      type="button"
      title="Delete from orders history"
      class="w-full h-10 border border-neutral-300 rounded-md shadow hover:bg-red-700 active:scale-95"
    >
      🗑️
    </button>
  </div>
</template>
