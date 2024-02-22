<script setup>
import SneakerCard from './SneakerCard.vue'

function handleAddToCart() {
  console.log('c')
}
function handleAddToFavorite() {
  console.log('f')
}
</script>

<template>
  <div class="p-5 flex flex-wrap justify-around items-start gap-7 max-md:p-4 max-md:gap-5">
    <SneakerCard
      img-src="/images/sneakers-1.jpg"
      img-alt="sneaker-1 png"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :is-liked="false"
      :is-added="false"
      :handle-add-to-cart="handleAddToCart"
      :handle-add-to-favorite="handleAddToFavorite"
    />
    <SneakerCard
      img-src="/images/sneakers-1.jpg"
      img-alt="sneaker-1 png"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :is-liked="false"
      :is-added="false"
      :handle-add-to-cart="handleAddToCart"
      :handle-add-to-favorite="handleAddToFavorite"
    />
    <SneakerCard
      img-src="/images/sneakers-1.jpg"
      img-alt="sneaker-1 png"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :is-liked="false"
      :is-added="false"
      :handle-add-to-cart="handleAddToCart"
      :handle-add-to-favorite="handleAddToFavorite"
    />
    <SneakerCard
      img-src="/images/sneakers-1.jpg"
      img-alt="sneaker-1 png"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :is-liked="false"
      :is-added="false"
      :handle-add-to-cart="handleAddToCart"
      :handle-add-to-favorite="handleAddToFavorite"
    />
    <SneakerCard
      img-src="/images/sneakers-1.jpg"
      img-alt="sneaker-1 png"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :is-liked="false"
      :is-added="false"
      :handle-add-to-cart="handleAddToCart"
      :handle-add-to-favorite="handleAddToFavorite"
    />
    <SneakerCard
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
