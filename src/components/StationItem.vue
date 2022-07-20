<template lang="pug">
.flex.flex-col.items-center(class="w-full")
  .flex.px-4.py-2.border-l-4.border-r-4.border.border-red-600.shadow-xl.rounded-xl.items-center.justify-between(class="w-1/2")
    .flex.flex-1.text-xl.text-gray-800 {{station.name}}
    .flex.items-center
      template(v-for="line in station.getLines()")
        span.font-medium.text-xs.text-center.rounded.mr-2.py-1.px-2(class="last:mr-0" :style="[{'background-color': lines.get(line).bgColor}, {'color': lines.get(line).textColor}, {'border': `1px solid ${lines.get(line).borderColor}`}]") {{line}}
  svg.w-6.fill-current.text-blue-400.m-2(class="last:display-none" aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-down' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' v-if="!isLast")
    path(fill='currentColor' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z')
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StationItem',
  props: [
    'station',
    'lines',
    'isLast'
  ]
})
</script>
