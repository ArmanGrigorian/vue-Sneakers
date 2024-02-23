<script setup>
import DrawerItem from './DrawerItem.vue'
</script>

<template>
  <div
    class="DrawerContentMask flex flex-col justify-start items-center my-5 gap-5 h-[calc(100dvh-252px)] overflow-y-auto max-md:gap-4 max-md:my-4"
  >
    <DrawerItem
      img-src="/images/sneakers-1.jpg"
      img-alt="sneaker-1 png"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="12999"
      :is-favorite="false"
      :is-added="false"
    />

  </div>
</template>
