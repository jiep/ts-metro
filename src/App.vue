<template lang="pug">
.app.w-screen.h-screen.flex.flex-col.bg-metro.bg-contain.bg-center
  Nav/
  Metro.flex-1/
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Metro from './components/Metro.vue'
import Nav from './components/Nav.vue'

export default defineComponent({
  components: {
    Metro,
    Nav
  }
})
</script>

<style>
</style>
