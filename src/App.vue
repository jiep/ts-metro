<template lang="pug">
.app.flex.flex-col.bg-gray-300.bg-contain.bg-center.overflow-x-auto.h-screen(class="md:w-screen")
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
