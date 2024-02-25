<script setup>
import { debounce } from '@/lib/debounce'
import { inject, watch } from 'vue'
import SectionContent from './SectionContent.vue'
import SectionTop from './SectionTop.vue'

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
    <SectionTop :handle-search="handleSearch" :handle-sort="handleSort" />
    <SectionContent />
  </section>
</template>
