<template lang="pug">
.p-4.border-t-4.border.border-red-600.shadow-xl(class="w-1/3")
  h5.text-2xl.text-gray-800 {{name}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StationItem',
  props: [
    'name'
  ]
})
</script>
