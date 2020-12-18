<template lang="pug">
  .flex.opacity-90
    section.flex.p-8.justify-center.items-center
      form.bg-white.shadow-xl.rounded-lg.p-8
        label.block.mb-4
          span.text-gray-700 Estación de origen
          select.block.w-full.mt-1.border.border-gray-600.rounded-md.border-transparent(v-model='selectedOrigin', class='focus:border-gray-500 focus:bg-white focus:ring-0')
            option(value="", disabled) Selecciona una estación de origen
            option(:value="s[0]" v-for="(s, i) in Array.from(stations)") {{s[1]}}

        label.block.mb-8
          span.text-gray-700 Estación de destino
          select.block.w-full.mt-1.border.border-gray-600.rounded-md.border-transparent(v-model='selectedDestiny', class='focus:border-gray-500 focus:bg-white focus:ring-0')
            option(value="", disabled) Selecciona una estación de destino
            option(:value="s[0]" v-for="(s, i) in Array.from(stations)") {{s[1]}}

        .flex.justify-items-end
          button.border.border-red-500.bg-red-500.text-white.rounded-md.px-4.py-2.transition.duration-500.ease.select-none(type='button' class='hover:bg-red-600 focus:outline-none focus:shadow-outline') Buscar ruta más corta

    section.flex-1.p-8
      .bg-white.shadow-xl.rounded-lg.p-8.overflow-y-auto.h-full
        template(v-if="selectedOrigin !== '' && selectedDestiny !== ''")
          h1.text-gray-700.block.mb-4 Ruta más corta desde {{selectedOrigin}} hasta {{selectedDestiny}}
          .flex.flex-col
            p.text-gray-700.border-b.border-t.pt-2.pb-2 Estación 1
            p.text-gray-700.border-b.pt-2.pb-2 Estación 2
            p.text-gray-700.border-b.pt-2.pb-2 Estación 3
            p.text-gray-700.border-b.pt-2.pb-2 Estación 4
            p.text-gray-700.border-b.pt-2.pb-2 Estación 5
            p.text-gray-700.border-b.pt-2.pb-2 Estación 6
        section.flex.flex-col.justify-center.items-center.h-full.text-center(v-else)
          svg.text-gray-400.mb-4.w-12(aria-hidden='true' focusable='false' data-prefix='fas' data-icon='clipboard-list' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512')
            path(fill='currentColor' d='M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z')
          h1.text-gray-400 Selecciona estaciones de origen y destino para calcular la ruta mínima
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
  data () {
    return {
      stations: new Map(),
      selectedOrigin: '',
      selectedDestiny: ''
    }
  },
  async mounted () {
    const response = await fetch('/data/stations.json')
    const data = await response.json()
    const stations = data.map((x: any) => [x.id, x.name])
    this.stations = new Map(stations)
  },
  methods: {
    onClick () {
      // TODO
    }
  }
})
</script>

<style scoped>
</style>
