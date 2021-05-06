<template>
  <b-badge pill class="tag-badge mr-2" :variant="color"
           @click="$emit('click')"
           :style="{cursor: clickable?'pointer':'default'}"
  >
    {{ tag }}
    <b-icon icon="tag-fill"/>
  </b-badge>
</template>

<script>
import StringUtils from "@/js/utils/StringUtils";

export default {
  name: "TagBadge",
  props: {
    tag: {type: String, required: true},
    clickable: {type: Boolean, required: false, default: false}
  },
  data() {
    return {
      colors: ["primary", "secondary", "success", "danger", "warning", "info", "dark"],
    }
  },
  computed: {
    hashcode() {
      return StringUtils.hashcode(this.tag)
    },
    color() {
      return this.colors[this.hashcode % this.colors.length];
    }
  }
}
</script>

<style scoped>
.tag-badge {
  min-width: 20px;
}
</style>
