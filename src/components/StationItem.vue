<template lang="pug">
.flex.flex-col.items-center.w-full
  .flex.px-2.py-2.border-l-4.border-r-4.border.shadow-xl.justify-between.w-full(class="md:w-3/4", :style="borderStyle")
    .flex-row.flex.mr-4
      span.text-left.antialiased.text-gray-800 {{station.name}}
    .flex.items-center.flex.flex-nowrap.overflow-auto
      span.font-medium.text-xs.text-center.rounded.py-1.px-2(v-if="!transfer" :style="[{'background-color': lines.get(currentLine).bgColor}, {'color': lines.get(currentLine).textColor}, {'border': `1px solid ${lines.get(currentLine).borderColor}`}]") {{currentLine}}
      .flex.items-center(v-if="transfer")
        span.mr-2.text-xs.text-center.rounded.py-1 De
        span.mr-2.font-medium.text-xs.text-center.rounded.py-1.px-2(:style="[{'background-color': lines.get(transfer.fromLine).bgColor}, {'color': lines.get(transfer.fromLine).textColor}, {'border': `1px solid ${lines.get(transfer.fromLine).borderColor}`}]") {{transfer.fromLine}}
        span.mr-2.text-xs.text-center.rounded.py-1 a
        span.font-medium.text-xs.text-center.rounded.py-1.px-2(:style="[{'background-color': lines.get(transfer.toLine).bgColor}, {'color': lines.get(transfer.toLine).textColor}, {'border': `1px solid ${lines.get(transfer.toLine).borderColor}`}]") {{transfer.toLine}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StationItem',
  props: ['station', 'lines', 'isLast', 'transfer', 'currentLine'],
  computed: {
    borderStyle() {
      if (this.transfer) {
        const fromColor = this.lines.get(this.transfer.fromLine).bgColor;
        const toColor = this.lines.get(this.transfer.toLine).bgColor;
        return {
          borderImage: `linear-gradient(to bottom, ${fromColor}, ${toColor}) 1`,
        };
      }
      const currentColor = this.lines.get(this.currentLine).bgColor;
      return {
        borderColor: currentColor,
      };
    },
  },
})
</script>
