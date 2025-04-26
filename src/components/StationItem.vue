<template lang="pug">
.flex.flex-col.items-center.w-full
  .flex.px-2.py-2.border-l-4.border-r-4.border.shadow-xl.rounded-xl.justify-between.w-full(class="md:w-3/4", :style="[{'border-color': lines.get(currentLine).bgColor}]")
    .flex-row.flex.mr-4
      span.text-left.antialiased.text-gray-800 {{station.name}}
    .flex.items-center.flex.flex-nowrap.overflow-auto
      span.font-medium.text-xs.text-center.rounded.py-1.px-2(v-if="!transfer" :style="[{'background-color': lines.get(currentLine).bgColor}, {'color': lines.get(currentLine).textColor}, {'border': `1px solid ${lines.get(currentLine).borderColor}`}]") {{currentLine}}
      .flex.items-center(v-if="transfer")
        | De
        span.ml-2.mr-2.font-medium.text-xs.text-center.rounded.py-1.px-2(:style="[{'background-color': lines.get(transfer.fromLine).bgColor}, {'color': lines.get(transfer.fromLine).textColor}, {'border': `1px solid ${lines.get(transfer.fromLine).borderColor}`}]") {{transfer.fromLine}}
        |  a
        span.ml-2.font-medium.text-xs.text-center.rounded.py-1.px-2(:style="[{'background-color': lines.get(transfer.toLine).bgColor}, {'color': lines.get(transfer.toLine).textColor}, {'border': `1px solid ${lines.get(transfer.toLine).borderColor}`}]") {{transfer.toLine}}
  .flex.flex-row.items-center.justify-center
    SeparatorIcon.rotate-90.w-4.m-2(:style="{ fill: lines.get(currentLine).bgColor }", class="last:display-none", v-if="!isLast")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SeparatorIcon from '@/components/SeparatorIcon.vue'

export default defineComponent({
  name: 'StationItem',
  props: ['station', 'lines', 'isLast', 'transfer', 'currentLine'],
  components: {
    SeparatorIcon,
  },
})
</script>
