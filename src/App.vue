<template lang="pug">
  .app.w-screen.h-screen.flex.flex-col.bg-metro.bg-contain.bg-center
    Nav/
    Metro.flex-1/
</template>

<script lang="ts">
import Vue from 'vue'
import Metro from './components/Metro.vue'
import Nav from './components/Nav.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Metro,
    Nav
  }
})
</script>

<style>
</style>
