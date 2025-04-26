<template lang="pug">
svg(xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512')
  rect(x="160" y="0" width="64" height="512" :fill="color")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StationSeparator',
  props: {
    color: {
      type: String,
      default: '#000',
    },
  },
})
</script>
