<script setup>
defineProps({
  handleSort: Function,
  handleSearch: Function
})
</script>
<template>
  <div class="flex justify-between items-center gap-2 max-md:flex-col">
    <h2 class="text-customBlack text-3xl font-bold">All sneakers</h2>

    <div class="px-2 py-1 border rounded max-md:w-full">
      <select @change="handleSort" name="sort" class="w-full outline-offset-4">
        <option value="title">By name</option>
        <option value="price">By price ascending</option>
        <option value="-price">By price descending</option>
      </select>
    </div>

    <div class="relative max-md:w-full">
      <img
        src="/icons/search.svg"
        alt="search svg"
        class="absolute top-0 bottom-0 my-auto left-2"
      />
      <input
        @input="handleSearch"
        type="text"
        name="search"
        placeholder="Поиск..."
        class="w-full pl-7 pr-2 py-1 border rounded"
      />
    </div>
  </div>
</template>
