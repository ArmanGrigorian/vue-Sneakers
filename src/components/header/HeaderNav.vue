<script setup>
import { inject } from 'vue'

const toggleCart = inject('toggle-cart')
const totalPrice = inject('total-price')
</script>

<template>
  <nav>
    <ul class="flex flex-wrap items-center gap-8 max-md:w-full max-md:justify-between max-md:gap-2">
      <li
        class="select-none transition opacity-75 hover:opacity-100 active:scale-95 max-3xs:w-full"
      >
        <button type="button" @click="toggleCart" class="flex items-center gap-1">
          <img src="/icons/cart.svg" alt="cart svg" class="w-5" />
          <strong class="text-customGrey text-sm font-bold">{{ totalPrice }} &dollar;</strong>
        </button>
      </li>
      <li
        class="select-none transition opacity-75 hover:opacity-100 active:scale-95 max-3xs:w-full"
      >
        <button type="button">
          <router-link to="/favorites" class="flex items-center gap-1">
            <img src="/icons/heart.svg" alt="heart svg" class="w-5" />
            <span class="text-customGrey text-sm font-medium">Favorites</span>
          </router-link>
        </button>
      </li>
      <li
        class="select-none transition opacity-75 hover:opacity-100 active:scale-95 max-3xs:w-full"
      >
        <button type="button">
          <router-link to="/account" class="flex items-center gap-1">
            <img src="/icons/profile.svg" alt="profile svg" class="w-5" />
            <span class="text-customGrey text-sm font-medium">Account</span>
          </router-link>
        </button>
      </li>
    </ul>
  </nav>
</template>
