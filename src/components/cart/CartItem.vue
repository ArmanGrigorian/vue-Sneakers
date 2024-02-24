<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number
})
</script>

<template>
  <div
    class="relative flex flex-col justify-center items-start gap-2 bg-customWhite border rounded-xl shadow-md p-3 transition hover:-translate-y-[2px] hover:shadow-xl max-3xs:w-full"
  >
    <button
      type="button"
      title="remove from cart"
      class="absolute top-3 right-3 w-10 h-10 border border-neutral-300 rounded-md shadow font-bold text-neutral-400 hover:text-customWhite hover:bg-red-700 active:scale-95"
    >
      X
    </button>

    <img :src="imageUrl" :alt="title + ' image'" class="w-[25%]" />

    <div>
      <h5 class="text-customBlack text-base font-medium">
        {{ title }}
      </h5>
      <p class="text-customGrey text-sm font-normal">
        Price: <strong class="text-customBlack font-semibold">{{ price }} &dollar;;</strong>
      </p>
    </div>
  </div>
</template>
