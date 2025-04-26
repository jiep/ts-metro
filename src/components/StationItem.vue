<template lang="pug">
.flex.flex-col.items-center.w-full
  .flex.px-2.py-2.border-l-4.border-r-4.border.shadow-xl.justify-between.w-full(class="md:w-3/4", :style="borderStyle")
    .flex-row.flex.mr-4
      span.text-left.antialiased.text-gray-800 {{station.name}}
    .flex.items-center.flex.flex-nowrap.overflow-auto
      LineBadge(v-if="!transfer"
        :bgColor="lines.get(currentLine).bgColor"
        :textColor="lines.get(currentLine).textColor"
        :borderColor="lines.get(currentLine).borderColor"
        :content="currentLine")
      .flex.items-center(v-if="transfer")
        span.mr-2.text-xs.text-center.rounded.py-1 De
        LineBadge.mr-2(
          :bgColor="lines.get(transfer.fromLine).bgColor"
          :textColor="lines.get(transfer.fromLine).textColor"
          :borderColor="lines.get(transfer.fromLine).borderColor"
          :content="transfer.fromLine")
        span.mr-2.text-xs.text-center.rounded.py-1 a
        LineBadge(
          :bgColor="lines.get(transfer.toLine).bgColor"
          :textColor="lines.get(transfer.toLine).textColor"
          :borderColor="lines.get(transfer.toLine).borderColor"
          :content="transfer.toLine")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LineBadge from '@/components/LineBadge.vue'

export default defineComponent({
  name: 'StationItem',
  components: {
    LineBadge,
  },
  props: ['station', 'lines', 'isLast', 'transfer', 'currentLine'],
  computed: {
    borderStyle() {
      if (this.transfer) {
        let fromColor, toColor

        const fromLine = this.lines.get(this.transfer.fromLine)

        const toLine = this.lines.get(this.transfer.toLine)
        if (this.transfer.fromLine.startsWith('ML') || this.transfer.fromLine.startsWith('R')) {
          fromColor = fromLine.borderColor
        } else {
          fromColor = fromLine.bgColor
        }

        if (this.transfer.toLine.startsWith('ML') || this.transfer.toLine.startsWith('R')) {
          toColor = toLine.borderColor
        } else {
          toColor = toLine.bgColor
        }

        return {
          borderImage: `linear-gradient(to bottom, ${fromColor}, ${toColor}) 1`,
        }
      }

      let currentColor

      if (this.currentLine.startsWith('ML') || this.currentLine.startsWith('R')) {
        currentColor = this.lines.get(this.currentLine).borderColor
      } else {
        currentColor = this.lines.get(this.currentLine).bgColor
      }

      return {
        borderColor: currentColor,
      }
    },
  },
})
</script>
