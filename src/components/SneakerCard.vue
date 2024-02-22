<script setup>
import { ref } from 'vue'

const liked = ref(false)
const checked = ref(false)

function handleLike() {
  liked.value = !liked.value
}

function handleCheck() {
  checked.value = !checked.value
}
</script>

<template>
  <div
    class="relative border w-[232px] rounded-3xl shadow-md flex flex-col gap-10 p-5 transition hover:-translate-y-1 hover:shadow-xl max-sm:w-full"
  >
    <button @click="handleLike" type="button" class="absolute top-5 left-5 active:scale-95">
      <img
        v-if="!liked"
        src="/icons/like-1.svg"
        alt="like svg"
        class="block w-8 h-8 border border-neutral-300 rounded-lg shadow opacity-75 transition hover:opacity-100"
      />
      <img
        v-else
        src="/icons/like-2.svg"
        alt="liked svg"
        class="block w-8 h-8 opacity-100 shadow border border-red-50 rounded-lg transition hover:opacity-80"
      />
    </button>

    <div>
      <img
       src="/images/sneakers-1.jpg"
        alt="sneakers-1 jpg"
         class="block w-full max-h-40 object-contain object-top" />
      <h5 class="text-customBlack text-sm font-semibold">
        Мужские Кроссовки Nike Blazer Mid Suede
      </h5>
    </div>

    <div class="flex justify-between items-center gap-1">
      <p class="text-customGrey text-sm">
        Цена: <br />
        <strong class="text-customBlack font-semibold">12 999 руб.</strong>
      </p>

      <button @click="handleCheck" type="button" class="active:scale-95">
        <img
          v-if="!checked"
          src="/icons/plus.svg"
          alt="plus svg"
          class="block w-8 h-8 border border-neutral-300 rounded-lg shadow opacity-75 transition hover:opacity-100"
        />
        <img
          v-else
          src="/icons/checked.svg"
          alt="checked svg"
          class="block w-8 h-8 transition opacity-100 hover:opacity-80"
        />
      </button>
    </div>
  </div>
</template>
