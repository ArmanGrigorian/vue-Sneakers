<template>
  <div class="flex flex-col gap-4">
    <div>
      <p class="flex justify-between items-center gap-1 border-b border-dashed">
        <span>Итого:</span>
        <strong>21 498 &#8381;</strong>
      </p>
      <p class="mt-1 flex justify-between items-center gap-1 border-b border-dashed">
        <span>Налог 5%:</span>
        <strong>1074 &#8381;</strong>
      </p>
    </div>

    <button
      type="button"
      title="Оформить заказ"
      class="relative bg-customGreen w-full h-14 rounded-lg text-customWhite text-lg font-medium transition opacity-85 hover:opacity-100 active:scale-95"
    >
      Оформить заказ
      <img
        src="/icons/arrow-next.svg"
        alt="arrow-next svg"
        class="absolute top-0 bottom-0 my-auto right-5"
      />
    </button>
  </div>
</template>
