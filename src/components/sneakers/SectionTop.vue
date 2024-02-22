<template>
  <div class="flex justify-between items-center gap-2 max-md:flex-col">
    <h2 class="text-customBlack text-3xl font-bold">Все кроссовки</h2>

    <div class="px-2 py-1 border rounded max-md:w-full">
      <select
       name="select"
       class="w-full outline-offset-4">
        <option value="default">По умолчанию</option>
        <option value="title">По названию</option>
        <option value="asc">По цене по возрастанию</option>
        <option value="desc">По цене по убыванию</option>
      </select>
    </div>

    <div class="relative max-md:w-full">
      <img
        src="/icons/search.svg"
        alt="search svg"
        class="absolute top-0 bottom-0 my-auto left-2"
      />
      <input
        type="text"
        name="search"
        placeholder="Поиск..."
        class="w-full pl-7 pr-2 py-1 border rounded"
      />
    </div>
  </div>
</template>
