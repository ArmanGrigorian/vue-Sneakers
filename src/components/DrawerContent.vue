<script setup>
import DrawerItem from './DrawerItem.vue'
</script>

<template>
  <div class="flex flex-col justify-start items-center py-5 gap-5 max-md:gap-4 max-md:p-4">
    <DrawerItem
      img-src="/images/sneakers-1.jpg"
      img-alt="sneaker-1 png"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :is-liked="false"
      :is-added="false"
      :handle-add-to-cart="handleAddToCart"
      :handle-add-to-favorite="handleAddToFavorite"
    />
    <DrawerItem
      img-src="/images/sneakers-1.jpg"
      img-alt="sneaker-1 png"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :is-liked="false"
      :is-added="false"
      :handle-add-to-cart="handleAddToCart"
      :handle-add-to-favorite="handleAddToFavorite"
    />
  </div>
</template>
