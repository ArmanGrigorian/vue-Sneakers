<script setup>
import { debounce } from '@/lib/debounce'
import { inject, provide, watch } from 'vue'
import SectionContent from './SectionContent.vue'
import SectionTop from './SectionTop.vue'

const filters = inject('filters')
const getSneakers = inject('get-sneakers')
const postDeleteFavorite = inject('post-delete-favorite')

const handleSort = (e) => {
  filters.sortBy = e.target.value
}
const handleSearch = debounce((e) => {
  filters.searchQuery = e.target.value
})

watch(filters, () => {
  getSneakers(filters.searchQuery, filters.sortBy)
})

provide('post-delete-favorite', postDeleteFavorite)
</script>

<template>
  <section class="p-5 max-md:p-4">
    <SectionTop :handle-search="handleSearch" :handle-sort="handleSort" />
    <SectionContent />
  </section>
</template>
