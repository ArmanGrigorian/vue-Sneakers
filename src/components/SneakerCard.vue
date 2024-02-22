<script setup>
defineProps({
  imgSrc: String,
  imgAlt: String,
  title: String,
  price: Number,
  isLiked: Boolean,
  isAdded: Boolean,
  handleAddToCart: Function,
  handleAddToFavorite: Function
})
</script>

<template>
  <div
    class="relative bg-customWhite border w-[232px] rounded-3xl shadow-md flex flex-col gap-10 p-5 transition hover:-translate-y-1 hover:shadow-xl max-3xs:w-full"
  >
    <button
      @click="handleAddToFavorite"
      title="add to favorite"
      type="button"
      class="absolute top-5 left-5 active:scale-95"
    >
      <img
        v-if="!isLiked"
        src="/icons/like-1.svg"
        alt="like svg"
        class="block w-9 h-9 border border-neutral-300 rounded-lg shadow opacity-75 transition hover:opacity-100"
      />
      <img
        v-else
        src="/icons/like-2.svg"
        alt="liked svg"
        class="block w-9 h-9 opacity-100 shadow border border-red-50 rounded-lg transition hover:opacity-80"
      />
    </button>

    <div>
      <img :src="imgSrc" :alt="imgAlt" class="block w-full max-h-40 object-contain object-top" />
      <h5 class="text-customBlack text-sm font-semibold">
        {{ title }}
      </h5>
    </div>

    <div class="flex justify-between items-center gap-1">
      <p class="text-customGrey text-sm">
        Цена: <br />
        <strong class="text-customBlack font-semibold">{{ price }} &#8381;</strong>
      </p>

      <button @click="handleAddToCart" type="button" title="add to cart" class="active:scale-95">
        <img
          v-if="!isAdded"
          src="/icons/plus.svg"
          alt="plus svg"
          class="block w-9 h-9 border border-neutral-300 rounded-lg shadow opacity-75 transition hover:opacity-100"
        />
        <img
          v-else
          src="/icons/checked.svg"
          alt="checked svg"
          class="block w-9 h-9 transition opacity-100 hover:opacity-80"
        />
      </button>
    </div>
  </div>
</template>
