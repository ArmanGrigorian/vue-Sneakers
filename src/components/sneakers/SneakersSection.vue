<script setup>
import { debounce } from '@/lib/debounce'
import { inject, watch } from 'vue'
import SneakersContent from './SneakersContent.vue'
import SneakersTop from './SneakersTop.vue'

const filters = inject('filters')
const getSneakers = inject('get-sneakers')

const handleSort = (e) => {
  filters.sortBy = e.target.value
}
const handleSearch = debounce((e) => {
  filters.searchQuery = e.target.value
})

watch(filters, () => {
  getSneakers(filters.searchQuery, filters.sortBy)
})

</script>

<template>
  <section class="p-5 max-md:p-4">
    <SneakersTop :handle-search="handleSearch" :handle-sort="handleSort" />
    <SneakersContent />
  </section>
</template>
