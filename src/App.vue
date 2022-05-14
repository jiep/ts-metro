<template lang="pug">
.app.w-screen.h-screen.flex.flex-col.bg-metro.bg-contain.bg-center
  Nav/
  MetroMadrid.flex-1/
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import MetroMadrid from './components/MetroMadrid.vue'
import NavBar from './components/NavBar.vue'

export default defineComponent({
  components: {
    MetroMadrid,
    NavBar
  }
})
</script>

<style>
</style>
