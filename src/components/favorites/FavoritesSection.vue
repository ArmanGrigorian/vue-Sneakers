<script setup>
import { inject } from 'vue'
import InfoBlock from '../InfoBlock.vue'
import FavoritesContent from './FavoritesContent.vue'

const { favorites } = inject('state')
</script>

<template>
  <section class="p-5 max-md:p-4">
    <h2 class="text-customBlack text-3xl font-bold max-md:text-2xl">Favorites</h2>

    <div v-if="favorites.length">
      <FavoritesContent />
    </div>

    <div class="min-h-[calc(100dvh-633px)] flex flex-col justify-center items-center gap-2 max-md:pt-4 max-2xs:gap-1" v-else>
      <InfoBlock
        title="No favorites :("
        text="You haven't added anything to favorites"
        iconUrl="/icons/emoji-1.png"
      />
    </div>
  </section>
</template>
