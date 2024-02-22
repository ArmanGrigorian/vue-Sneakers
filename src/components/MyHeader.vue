<script setup></script>

<template>
  <header
    class="flex justify-between items-center border-b border-neutral-200 mx-5 py-5 max-md:mx-4 max-md:py-4 max-md:flex-col max-md:justify-center max-md:gap-4"
  >
    <div class="flex items-center gap-2">
      <img src="/icons/logo.png" alt="Logo png" class="w-10" />
      <div>
        <h2 class="text-customBlack text-2xl font-bold select-none max-md:text-xl">Vue Sneakers</h2>

        <p class="text-customGrey text-sm font-medium select-none">Магазин лучших кроссовок</p>
      </div>
    </div>

    <ul class="flex flex-wrap items-center gap-8 max-md:w-full max-md:justify-between max-md:gap-1">
      <li
        class="flex items-center gap-1 select-none cursor-pointer transition opacity-75 hover:opacity-100 active:scale-95 max-3xs:w-full"
      >
        <img src="/icons/cart.svg" alt="cart svg" class="w-5" />
        <strong class="text-customGrey text-sm font-bold">1205 руб.</strong>
      </li>
      <li
        class="flex items-center gap-1 select-none cursor-pointer transition opacity-75 hover:opacity-100 active:scale-95 max-3xs:w-full"
      >
        <img src="/icons/heart.svg" alt="heart svg" class="w-5" />
        <span class="text-customGrey text-sm font-medium">Закладки</span>
      </li>
      <li
        class="flex items-center gap-1 select-none cursor-pointer transition opacity-75 hover:opacity-100 active:scale-95 max-3xs:w-full"
      >
        <img src="/icons/profile.svg" alt="profile svg" class="w-5" />
        <span class="text-customGrey text-sm font-medium">Профиль</span>
      </li>
    </ul>
  </header>
</template>
