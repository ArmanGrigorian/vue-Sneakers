<script setup>
import { inject } from 'vue'
import InfoBlock from '../InfoBlock.vue'
import AccountContent from './AccountContent.vue'
import AccountTop from './AccountTop.vue'

const { orders } = inject('state')
</script>

<template>
  <section class="p-5 max-md:p-4">
    <AccountTop />

    <div v-if="orders.length">
      <AccountContent />
    </div>

    <div class="min-h-[calc(100dvh-633px)] flex flex-col justify-center items-center gap-2 max-2xs:gap-1 max-2xs:pt-4" v-else>
      <InfoBlock
        title="You have no orders"
        text="Are you poor? Place at least one order."
        iconUrl="/icons/emoji-2.png"
      />
    </div>
  </section>
</template>
