<template lang="pug">
.app.w-screen.h-screen.flex.flex-col.bg-metro.bg-contain.bg-center
  NavBar/
  router-view/
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>
