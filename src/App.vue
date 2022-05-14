<template lang="pug">
  .app.w-screen.h-screen.flex.flex-col.bg-metro.bg-contain.bg-center
    NavBar/
    MetroMadrid.flex-1/
</template>

<script lang="ts">
import Vue from 'vue'
import MetroMadrid from './components/MetroMadrid.vue'
import NavBar from './components/NavBar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    MetroMadrid,
    NavBar
  }
})
</script>

<style>
</style>
