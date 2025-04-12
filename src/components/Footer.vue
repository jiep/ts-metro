<template lang="pug">
footer.text-center.text-white
  p.text-xs v{{version}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComp',
  setup() {
    const version = __APP_VERSION__
    return { version }
  },
})
</script>
