<template lang="pug">
.flex.flex-col.text-center.items-center(v-for="(station, i) in stations")
    StationItem(
      :transfer="station.transfer" 
      :station="station.station" 
      :lines="lines" 
      :is-last="stations.length - 1 === i" 
      :currentLine="station.segment?.line")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import StationItem from '@/components/StationItem.vue'

export default defineComponent({
  name: 'StationList',
  components: {
    StationItem,
  },
  props: ['stations', 'lines'],
})
</script>
