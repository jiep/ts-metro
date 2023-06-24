<template lang="pug">
.p-4.text-orange-700.border.bg-orange-50.w-full(class='border-orange-900/10' role='alert')
  .flex.flex-col.place-items-center
    span.p-2.text-white
      WarningIcon.text-orange-600.mb-4.w-12
    p
      strong.block.opacity-90
        | {{message}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WarningIcon from '@/components/WarningIcon.vue'

export default defineComponent({
  name: 'WarningItem',
  props: [
    'message'
  ],
  components: {
    WarningIcon
  }
})
</script>
