<template lang="pug">
  .flex.opacity-90.overflow-y-auto
    section.flex.p-8.justify-center.items-center
      form.bg-white.shadow-xl.rounded-lg.p-8
        label.block.mb-4
          span.text-gray-700 Estación de origen
          select.block.w-full.mt-1.border.border-gray-600.rounded-md.border-transparent(v-model='selectedOrigin', class='focus:border-gray-500 focus:bg-white focus:ring-0')
            option(value="", disabled) Selecciona una estación de origen
            option(:value="s.getId" v-for="(s, i) in stations") {{s.getName}}

        label.block.mb-8
          span.text-gray-700 Estación de destino
          select.block.w-full.mt-1.border.border-gray-600.rounded-md.border-transparent(v-model='selectedDestiny', class='focus:border-gray-500 focus:bg-white focus:ring-0')
            option(value="", disabled) Selecciona una estación de destino
            option(:value="s.getId" v-for="(s, i) in stations") {{s.getName}}

        .flex.justify-items-end
          button.border.border-red-500.bg-red-500.text-white.rounded-md.px-4.py-2.transition.duration-500.ease.select-none(@click='onClick', :disabled="selectedOrigin === '' && selectedDestiny === ''", type='button', class='hover:bg-red-600 focus:outline-none focus:shadow-outline') Buscar ruta más corta

    section.flex-1.p-8.overflow-y-auto
      .bg-white.shadow-xl.rounded-lg.p-8.h-full
        template(v-if="clicked")
          .flex.flex-col.overflow-y-auto.h-full
            section
              h1.text-xl.text-gray-700.block Ruta más corta desde
                label.text-xs.px-2.py-1.rounded.bg-green-300.text-black.mx-2 {{metro.getStationById(selectedOrigin).getName}}
                | hasta
                label.text-xs.px-2.py-1.rounded.bg-indigo-300.text-black.ml-2 {{metro.getStationById(selectedDestiny).getName}}
              h1.mb-8.text-gray-700
                label.text-xs.px-2.py-1.rounded.bg-blue-300.text-black.mr-2 {{distance}}
                | metros
            section.flex.flex-col.overflow-y-auto.h-full
              p.text-gray-700.border-b.pt-2.pb-2(class='first:border-t', v-for="station in shortestPath") {{station}}
        section.flex.flex-col.justify-center.items-center.h-full.text-center(v-else)
          svg.text-gray-400.mb-4.w-12(aria-hidden='true' focusable='false' data-prefix='fas' data-icon='clipboard-list' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512')
            path(fill='currentColor' d='M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z')
          h1.text-gray-400 Selecciona estaciones de origen y destino para calcular la ruta mínima
</template>

<script lang="ts">
import Vue from 'vue'

import MetroMadrid from '@/lib/model/MetroMadrid'
import Station from '@/lib/model/Station'

export default Vue.extend({
  name: 'Metro',
  data () {
    return {
      metro: null as any,
      stations: [],
      selectedOrigin: '',
      selectedDestiny: '',
      shortestPath: [],
      distance: 0,
      clicked: false
    }
  },
  async mounted () {
    const responses = await Promise.all([fetch('/data/stations.json'), fetch('/data/distances.json')])

    const dataStations = await responses[0].json()
    const stations = dataStations.map((x: any) => new Station(x.id, x.name))
    const distances = await responses[1].json()

    this.metro = new MetroMadrid(distances, stations)
    this.stations = stations
  },
  methods: {
    onClick () {
      if (this.selectedOrigin === this.selectedDestiny) {
        alert('Las estaciones de origen y destino no pueden coincidir')
        return
      }
      this.clicked = true
      const stationOrigin: Station = this.metro.getStationById(this.selectedOrigin)
      const stationDestiny: Station = this.metro.getStationById(this.selectedDestiny)
      const [path, distance] = this.metro.getShortestPath(stationOrigin, stationDestiny)
      this.distance = distance
      this.shortestPath = path.map((x: Station) => x.getName)
    }
  }
})
</script>

<style scoped>
</style>
