<template lang="pug">
nav.bg-blue-600
  .max-w-screen-xl.px-4.mx-auto
    .flex.items-center.justify-center.m-4
      .flex.text-white.items-center
        LogoIcon.h-12.mr-2
        .flex-col.select-none("md:select-text")
          h1.text-xl Metro de Madrid
          p.text-xs Busca la ruta más corta entre estaciones
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LogoIcon from '@/components/LogoIcon.vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    LogoIcon
  }
})
</script>
