<template lang="pug">
section
  .mx-auto
    .div
      .flex.flex-col(class="md:flex-row")
        .flex.flex-col.flex-1.text-center
          dt.font-medium.text-gray-500
            | Origen
          dd.text-2xl.font-extrabold.text-red-500
            | {{from}}
        .flex.place-content-center.rotate-90(class="md:rotate-0")
          SeparatorIcon.fill-current.text-blue-400.w-4.m-1
        .flex.flex-col.m-2.text-center
          dt.font-medium.text-gray-500
            | Distancia
          dd.text-2xl.font-extrabold.text-red-500 {{distance}} metros
        .flex.place-content-center.rotate-90(class="md:rotate-0")
          SeparatorIcon.fill-current.text-blue-400.w-4.m-1
        .flex.flex-col.flex-1.mb-8.text-center
          dt.font-medium.text-gray-500
            | Destino
          dd.text-2xl.font-extrabold.text-red-500 {{to}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SeparatorIcon from '@/components/SeparatorIcon.vue'

export default defineComponent({
  name: 'StatsItem',
  props: ['from', 'to', 'distance'],
  components: {
    SeparatorIcon,
  },
})
</script>
