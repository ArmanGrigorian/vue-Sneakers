<script setup>
import { inject } from 'vue'

const percentage = inject('percentage')
const totalPrice = inject('total-price')
const tax = inject('tax')

const addOrders = inject('add-orders')
const orderStatus = inject('order-status')
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <p class="flex justify-between items-center gap-1 border-b border-dashed">
        <span>Total:</span>
        <strong>{{ totalPrice }} &dollar;</strong>
      </p>
      <p class="mt-1 flex justify-between items-center gap-1 border-b border-dashed">
        <span>Tax {{ percentage }}%:</span>
        <strong>{{ tax }} &dollar;</strong>
      </p>
    </div>

    <button
      :disabled="orderStatus ? false : true"
      @click="addOrders"
      type="button"
      title="Order Now"
      :class="`${!orderStatus ? 'cursor-wait opacity-70 active:scale-100' : ''} relative bg-customGreen w-full h-14 rounded-lg text-customWhite shadow-xl text-lg font-medium transition opacity-85 hover:opacity-100 active:scale-95`"
    >
      Order Now
      <img
        src="/icons/arrow-next.svg"
        alt="arrow-next svg"
        class="absolute top-0 bottom-0 my-auto right-5"
      />
    </button>
  </div>
</template>
