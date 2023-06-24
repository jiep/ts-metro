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
          svg.fill-current.text-blue-400.w-4.m-1(xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512')
            path(d='M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z')
        .flex.flex-col.m-2.text-center
          dt.font-medium.text-gray-500
            | Distancia
          dd.text-2xl.font-extrabold.text-red-500 {{distance}} metros
        .flex.place-content-center.rotate-90(class="md:rotate-0")
          svg.fill-current.text-blue-400.w-4.m-1(xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512')
            path(d='M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z')
        .flex.flex-col.flex-1.mb-8.text-center
            dt.font-medium.text-gray-500
              | Destino
            dd.text-2xl.font-extrabold.text-red-500 {{to}}
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
