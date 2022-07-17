<template lang="pug">
.flex.opacity-90.overflow-y-auto
  section.flex.p-8.justify-center.items-center
    form.bg-white.shadow-xl.rounded-lg.p-8
      label.block.mb-4
        span.text-gray-700 Estación de origen
        select.block.w-full.mt-1.border.border-gray-600.rounded-md(v-model='selectedOrigin', class='focus:border-gray-500 focus:bg-white focus:ring-0')
          option(value="", disabled) Selecciona una estación de origen
          option(:value="s.getId()" v-for="(s, i) in stations") {{s.getName()}}

      label.block.mb-8
        span.text-gray-700 Estación de destino
        select.block.w-full.mt-1.border.border-gray-600.rounded-md(v-model='selectedDestiny', class='focus:border-gray-500 focus:bg-white focus:ring-0')
          option(value="", disabled) Selecciona una estación de destino
          option(:value="s.getId()" v-for="(s, i) in stations") {{s.getName()}}

      .flex.justify-items-end
        button.flex-1.border.border-red-500.bg-red-500.text-white.rounded-md.px-4.py-2.transition.duration-500.ease.select-none(@click='onClick', :disabled="selectedOrigin === '' && selectedDestiny === ''", type='button', class='hover:bg-red-600 focus:outline-none focus:shadow-outline disabled:cursor-not-allowed disabled:bg-red-500') Buscar ruta más corta

  section.flex-1.p-8.overflow-y-auto
    .bg-white.shadow-xl.rounded-lg.p-8.h-full
      template(v-if="clicked")
        .flex.flex-col.overflow-y-auto.h-full
          StatsItem.mb-16(:from="metro.getStationById(selectedOrigin).getName()",
                    :to="metro.getStationById(selectedDestiny).getName()",
                    :distance="distance")
          section.flex.flex-col.overflow-y-auto.h-full
            .flex.flex-col.text-center.items-center(v-for="(station, i) in shortestPath")
              StationItem(:name="station")
              svg.w-6.fill-current.text-red-400.m-2(aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-down' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512', v-if="shortestPath.length - 1 !== i")
                path(fill='currentColor' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z')

      section.flex.flex-col.justify-center.items-center.h-full.text-center(v-else)
        svg.text-gray-400.mb-4.w-12(aria-hidden='true' focusable='false' data-prefix='fas' data-icon='clipboard-list' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512')
          path(fill='currentColor' d='M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z')
        h1.text-gray-400 Selecciona estaciones de origen y destino para calcular la ruta mínima
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MetroMadrid from '@/lib/model/MetroMadrid'
import Station from '@/lib/model/Station'
import StationItem from '@/components/StationItem.vue'
import StatsItem from '@/components/StatsItem.vue'

export default defineComponent({
  name: 'MetroMadrid',
  components: {
    StationItem,
    StatsItem
  },
  data () {
    return {
      /* eslint-disable @typescript-eslint/no-explicit-any */
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
    this.stations = stations.sort((a: Station, b: Station) => a.getName().localeCompare(b.getName()))
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
      this.shortestPath = path.map((x: Station) => x.getName())
    }
  }
})
</script>

<style scoped>
</style>
