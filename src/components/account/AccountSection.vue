<script setup>
import { inject } from 'vue'
import AccountTop from './AccountTop.vue'
import AccountContent from './AccountContent.vue'
import InfoBlock from '../InfoBlock.vue'

const orders = inject('orders')
</script>

<template>
  <section class="p-5 max-md:p-4">
    <AccountTop/>

    <div v-if="orders.length">
      <AccountContent />
    </div>

    <div class="min-h-[calc(100dvh-633px)] flex flex-col justify-center items-center gap-2" v-else>
      <InfoBlock
        title="You have no orders"
        text="Are you poor? Place at least one order."
        iconUrl="/icons/emoji-2.png"
      />
    </div>
  </section>
</template>