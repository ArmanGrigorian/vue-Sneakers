<script setup>
import { inject } from 'vue'
import FavoritesContent from './FavoritesContent.vue'
import InfoBlock from '../InfoBlock.vue'

const favorites = inject('favorites')
</script>

<template>
  <section class="p-5 max-md:p-4">
    <h2 class="text-customBlack text-3xl font-bold">Favorites</h2>

    <div v-if="favorites.length">
      <FavoritesContent />
    </div>

    <div class="min-h-[calc(100dvh-633px)] flex flex-col justify-center items-center gap-2" v-else>
      <InfoBlock
        title="No favorites :("
        text="You haven't added anything to favorites"
        iconUrl="/icons/emoji-1.png"
      />
    </div>
  </section>
</template>
