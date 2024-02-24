<template>
  <div class="flex flex-col gap-4">
    <div>
      <p class="flex justify-between items-center gap-1 border-b border-dashed">
        <span>Total:</span>
        <strong>21.498 &dollar;</strong>
      </p>
      <p class="mt-1 flex justify-between items-center gap-1 border-b border-dashed">
        <span>Tax 5%:</span>
        <strong>10.74 &dollar;</strong>
      </p>
    </div>

    <button
      type="button"
      title="Оформить заказ"
      class="relative bg-customGreen w-full h-14 rounded-lg text-customWhite text-lg font-medium transition opacity-85 hover:opacity-100 active:scale-95"
    >
      Order Now
      <img
        src="/icons/arrow-next.svg"
        alt="arrow-next svg"
        class="absolute top-0 bottom-0 my-auto right-5"
      />
    </button>
  </div>
</template>
