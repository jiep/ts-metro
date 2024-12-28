<template lang="pug">
footer.py-2.text-center.text-gray-900
    p.text-xs v{{version}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const version = __APP_VERSION__
    return { version }
  },
})
</script>
