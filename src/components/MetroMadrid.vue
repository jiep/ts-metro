<template lang="pug">
.flex.opacity-90.overflow-y-auto
  section.flex.p-8.justify-center.items-center
    form.bg-white.shadow-xl.rounded-lg.p-8
     label.block.mb-4
        span.text-gray-700 Estación de origen
        select.block.w-full.mt-1.border.border-gray-600.rounded-md(v-model='selectedOrigin', class='focus:border-gray-500 focus:bg-white focus:ring-0')
          option(value="", disabled) Selecciona una estación de origen
          option(:value="s.getId()" v-for="s in stations") {{s.getName()}}

        label.block.mb-8
          span.text-gray-700 Estación de destino
          select.block.w-full.mt-1.border.border-gray-600.rounded-md(v-model='selectedDestiny', class='focus:border-gray-500 focus:bg-white focus:ring-0')
            option(value="", disabled) Selecciona una estación de destino
            option(:value="s.getId()" v-for="s in stations") {{s.getName()}}

        .flex.justify-items-end
          button.flex-1.border.border-blue-500.bg-blue-500.text-white.rounded-md.px-4.py-2.transition.duration-500.ease.select-none(@click='onClick', :disabled="selectedOrigin === '' && selectedDestiny === ''", type='button', class='hover:bg-blue-600 focus:outline-none focus:shadow-outline disabled:cursor-not-allowed disabled:bg-blue-500') Buscar ruta más corta
  section.flex-1.p-8.overflow-y-auto
    .bg-white.shadow-xl.rounded-lg.p-8.h-full
      template(v-if="clicked")
        .flex.flex-col.overflow-y-auto.h-full
          StatsItem(:from="metro.getStationById(selectedOrigin).getName()",
                    :to="metro.getStationById(selectedDestiny).getName()",
                    :distance="distance")
          section.flex.flex-col.overflow-y-auto.h-full.border-t.border-gray-300.py-8
            StationList(:stations="shortestPath", :lines="linesConfig")
      section.flex.flex-col.justify-center.items-center.h-full.text-center(v-else)
        WarningItem(v-show="!sameStations" message="Selecciona estaciones de origen y destino para calcular la ruta mínima")
        AlertItem(v-show="sameStations" message="Las estaciones de origen y destino no pueden coincidir")

</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MetroMadrid from '@/lib/model/MetroMadrid'
import Station from '@/lib/model/Station'
import Line from '@/lib/model/Line'
import StationList from '@/components/StationList.vue'
import StatsItem from '@/components/StatsItem.vue'
import AlertItem from '@/components/AlertItem.vue'
import WarningItem from '@/components/WarningItem.vue'

export default defineComponent({
  name: 'MetroMadrid',
  components: {
    StatsItem,
    AlertItem,
    WarningItem,
    StationList
  },
  data () {
    return {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      metro: null as any,
      stations: new Array<Station>(),
      selectedOrigin: '',
      selectedDestiny: '',
      shortestPath: new Array<string>(),
      linesConfig: new Map<any, any>(),
      distance: 0,
      clicked: false,
      sameStations: false
    }
  },
  async mounted () {
    const responses = await Promise.all([
      fetch('/data/stations.json'),
      fetch('/data/distances.json'),
      fetch('/data/lines.json')
    ])

    const dataStations = await responses[0].json()
    const stations = dataStations.map((x: any) => new Station(x.id, x.name, x.lines))
    const distances = await responses[1].json()
    const dataLines = await responses[2].json()
    const lines = dataLines.map((x: any) => new Line(x.name, x.bgColor, x.textColor, x.borderColor))
    lines.forEach(
      (x: Line) => this.linesConfig.set(
        x.getName(),
        {
          bgColor: x.getBgColor(),
          textColor: x.getTextColor(),
          borderColor: x.getBorderColor()
        }
      )
    )
    this.metro = new MetroMadrid(distances, stations, lines)
    this.stations = stations.sort((a: Station, b: Station) => a.getName().localeCompare(b.getName()))
  },
  methods: {
    onClick () {
      if (this.selectedOrigin === this.selectedDestiny) {
        this.sameStations = true
        this.clicked = false
      } else {
        this.sameStations = false
        this.clicked = true
        const stationOrigin: Station = this.metro.getStationById(this.selectedOrigin)
        const stationDestiny: Station = this.metro.getStationById(this.selectedDestiny)
        const [path, distance] = this.metro.getShortestPath(stationOrigin, stationDestiny)
        this.distance = distance
        this.shortestPath = path
      }
    }
  }
})
</script>

<style scoped>
</style>
