<template lang="pug">
.flex.flex-col.items-center.w-full
  .flex.bg-red-50.px-2.py-2.border-l-4.border-r-4.border.border-red-600.shadow-xl.rounded-xl.justify-between.w-full(class="md:w-3/4")
    .flex-row.flex.mr-4
      span.text-left.antialiased.text-gray-800 {{station.name}}
    .flex.items-center.flex.flex-nowrap.overflow-auto
      template(v-for="line in station.getLines()")
        span.font-medium.text-xs.text-center.rounded.mr-1.py-1.px-2(class="last:mr-0" :style="[{'background-color': lines.get(line).bgColor}, {'color': lines.get(line).textColor}, {'border': `1px solid ${lines.get(line).borderColor}`}]") {{line}}
  SeparatorIcon.rotate-90.w-4.fill-current.text-blue-400.m-2(class="last:display-none", v-if="!isLast")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SeparatorIcon from '@/components/SeparatorIcon.vue'

export default defineComponent({
  name: 'StationItem',
  props: [
    'station',
    'lines',
    'isLast'
  ],
  components: {
    SeparatorIcon
  }
})
</script>
