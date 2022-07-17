<template lang="pug">
section.bg-white
  .max-w-screen-xl.mx-auto
    div
      dl.grid.grid-cols-1.gap-4(class='sm:grid-cols-3')
        .flex.flex-col.px-4.py-8.text-center
          dt.font-medium.text-gray-500
            | Origen
          dd.text-2xl.font-extrabold.text-red-500
            | {{from}}
        .flex.flex-col.px-4.py-8.text-center
          dt.font-medium.text-gray-500
            | Destino
          dd.text-2xl.font-extrabold.text-red-500 {{to}}
        .flex.flex-col.px-4.py-8.text-center
          dt.font-medium.text-gray-500
            | Distancia
          dd.text-2xl.font-extrabold.text-red-500 {{distance}} metros
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StatsItem',
  props: [
    'from',
    'to',
    'distance'
  ]
})
</script>
