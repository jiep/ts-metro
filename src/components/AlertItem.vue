<template lang="pug">
.p-4.text-red-700.border.bg-gray-50.w-full(class='border-red-900/10' role='alert')
  .flex.flex-col.place-items-center
    span.p-2.text-white.bg-red-800.rounded-full
      AlertIcon.w-12.h-12
    p.mt-4
      strong.block.opacity-90
        | {{message}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AlertIcon from '@/components/AlertIcon.vue'

export default defineComponent({
  name: 'AlertItem',
  props: ['message'],
  components: {
    AlertIcon,
  },
})
</script>
