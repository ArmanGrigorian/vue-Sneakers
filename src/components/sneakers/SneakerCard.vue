<script setup>
import { inject } from 'vue'
defineProps({
  imageUrl: String,
  sneaker: Object
})

const postDeleteFavorite = inject('post-delete-favorite');
const postDeleteOrder = inject('post-delete-order');

</script>

<template>
  <div
    class="relative bg-gradient-to-br from-70 from-customWhite to-70 to-customMainBg border w-[232px] h-72 rounded-3xl shadow-md flex flex-col justify-between p-5 transition hover:-translate-y-1 hover:shadow-xl max-3xs:w-full"
  >
    <button
      @click="postDeleteFavorite(sneaker)"
      title="Add to favorites"
      type="button"
      class="absolute top-5 left-5 active:scale-95"
    >
      <img
        v-if="!sneaker.isFavorite"
        src="/icons/like-1.svg"
        alt="like svg"
        class="block w-9 h-9 border border-neutral-300 rounded-lg shadow opacity-75 transition hover:opacity-100"
      />
      <img
        v-else
        src="/icons/like-2.svg"
        alt="Favorite svg"
        class="block w-9 h-9 opacity-100 shadow border border-red-50 rounded-lg transition hover:opacity-80"
      />
    </button>

    <div>
      <img
        :src="sneaker.imageUrl"
        :alt="sneaker.title + ' image'"
        class="block w-full max-h-40 object-contain object-top"
      />
      <h5 class="text-customBlack text-base font-semibold">
        {{ sneaker.title }}
      </h5>
    </div>

    <div class="flex justify-between items-center gap-1">
      <p class="text-customGrey text-sm">
        Price: <br />
        <strong class="text-customBlack font-semibold">{{ sneaker.price }} &dollar;</strong>
      </p>

      <button @click="postDeleteOrder(sneaker)" type="button" title="Add to orders" class="active:scale-95">
        <img
          v-if="!sneaker.isAdded"
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
