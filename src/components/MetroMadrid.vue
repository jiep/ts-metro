<template lang="pug">
.opacity-90(class="md:flex md:overflow-y-auto")
  section.flex.m-4.justify-center.items-center
    form.bg-gray-50.shadow-xl.rounded-lg.p-4.w-full(class="md:p-8")
      label.block.mb-4
        span.text-gray-700 Estación de origen
        select.block.w-full.mt-1.border.border-gray-600.rounded-md(v-model='selectedOrigin', class='focus:border-gray-500 focus:bg-white focus:ring-0', name="origin")
          option(value="", disabled) Selecciona una estación de origen
          option(:value="s.getId()" v-for="s in stations") {{s.getName()}}

      label.block.mb-4
        span.text-gray-700 Estación de destino
        select.block.w-full.mt-1.border.border-gray-600.rounded-md(v-model='selectedDestiny', class='focus:border-gray-500 focus:bg-white focus:ring-0', name="destiny")
          option(value="", disabled) Selecciona una estación de destino
          option(:value="s.getId()" v-for="s in stations") {{s.getName()}}

      .flex.place-items-center
        button.flex.justify-center.items-center.place-items-center.border.border-blue-500.bg-blue-500.rounded-md.px-4.py-2.transition.duration-500.ease.select.w-full(@click='onClick', :disabled="selectedOrigin === '' || selectedDestiny === ''", type='button', class='hover:bg-blue-600 focus:shadow-outline enabled:hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-500')
          p.text-white.mr-2 Buscar ruta más corta
          LoadingIcon.fill-white.w-4.animate-spin(v-if="isLoading")

  section.flex.flex-1.m-4
    .bg-gray-50.shadow-xl.rounded-lg.p-4.w-full(class="md:h-full md:p-8")
      template(v-if="clicked")
        .flex.flex-col(class="md:h-full md:overflow-y-auto")
          StatsItem.bg-gray-50(:from="metro.getStationById(selectedOrigin).getName()",
                    :to="metro.getStationById(selectedDestiny).getName()",
                    :distance="distance")
          section.flex.flex-col.border-t.border-gray-300.pt-8(class="md:h-full md:overflow-y-auto")
            StationList(:stations="shortestPath", :lines="linesConfig")
      section.flex.flex-col.justify-center.items-center.text-center(class="md:h-full", v-else)
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
import LoadingIcon from '@/components/LoadingIcon.vue'

export default defineComponent({
  name: 'MetroMadrid',
  components: {
    StatsItem,
    AlertItem,
    WarningItem,
    StationList,
    LoadingIcon,
  },
  data() {
    return {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      metro: null as any,
      stations: new Array<Station>(),
      selectedOrigin: '',
      selectedDestiny: '',
      shortestPath: new Array<any>(),
      linesConfig: new Map<any, any>(),
      distance: 0,
      clicked: false,
      sameStations: false,
      isLoading: false,
    }
  },
  async mounted() {
    const responses = await Promise.all([
      fetch('/data/stations.json'),
      fetch('/data/distances.json'),
      fetch('/data/lines.json'),
    ])

    const dataStations = await responses[0].json()
    const stations = dataStations.map((x: any) => new Station(x.id, x.name, x.lines))
    const distances = await responses[1].json()
    const dataLines = await responses[2].json()
    const lines = dataLines.map((x: any) => new Line(x.name, x.bgColor, x.textColor, x.borderColor))
    lines.forEach((x: Line) =>
      this.linesConfig.set(x.getName(), {
        bgColor: x.getBgColor(),
        textColor: x.getTextColor(),
        borderColor: x.getBorderColor(),
      }),
    )
    this.metro = new MetroMadrid(distances, stations, lines)
    this.stations = stations.sort((a: Station, b: Station) =>
      a.getName().localeCompare(b.getName()),
    )
  },
  methods: {
    onClick() {
      if (this.selectedOrigin === this.selectedDestiny) {
        this.sameStations = true
        this.clicked = false
      } else {
        this.sameStations = false
        this.clicked = true
        this.isLoading = true
        const stationOrigin: Station = this.metro.getStationById(this.selectedOrigin)
        const stationDestination: Station = this.metro.getStationById(this.selectedDestiny)
        const { path, distance } = this.metro.getShortestPath(stationOrigin, stationDestination)
        this.distance = distance
        this.shortestPath = path.map((step: any) => ({
          station: step.station,
          segment: step.segment,
          transfer: step.transfer,
        }))
        this.isLoading = false
      }
    },
  },
})
</script>
