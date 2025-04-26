<template lang="pug">
span.font-medium.text-xs.text-center.rounded.py-1.px-2(:style="badgeStyle") {{ content }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LineBadge',
  props: {
    bgColor: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
    borderColor: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    badgeStyle() {
      return {
        backgroundColor: this.bgColor,
        color: this.textColor,
        border: `1px solid ${this.borderColor}`,
      }
    },
  },
})
</script>
