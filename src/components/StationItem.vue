<template lang="pug">
.flex.flex-col.items-center(class="w-full")
  .px-4.py-2.border-t-4.border.border-red-600.shadow-xl(class="w-1/3")
    h5.text-xl.text-gray-800 {{name}}
  svg.w-6.fill-current.text-blue-400.m-2(class="last:display-none" aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-down' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' v-if="!isLast")
    path(fill='currentColor' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z')
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StationItem',
  props: [
    'name',
    'isLast'
  ]
})
</script>
