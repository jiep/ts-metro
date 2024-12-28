<template lang="pug">
.app.flex.flex-col.bg-gray-300.bg-contain.bg-center.overflow-x-auto.h-screen(class="md:w-screen")
  NavBar/
  router-view/
  FooterVersion/
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import FooterVersion from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FooterVersion,
  },
}
</script>
