<script setup>
import { inject } from 'vue'
const clearPurchaseHistory = inject('clear-purchase-history')
</script>

<template>
  <div class="flex justify-between items-center gap-2 max-md:flex-col">
    <h2 class="text-customBlack text-3xl font-bold">Purchase history</h2>
    <button
      @click="clearPurchaseHistory"
      type="button"
      title="Clear orders history"
      class="px-4 py-2 border font-medium border-neutral-300 rounded-md shadow text-customBlack hover:text-customWhite hover:bg-red-700 active:scale-95"
    >
      Clear
    </button>
  </div>
</template>
