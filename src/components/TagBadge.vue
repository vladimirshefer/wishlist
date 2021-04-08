<template>
  <b-badge pill class="mr-2 p-2" :variant="getColorForTag(tag)">
    {{ tag }}
  </b-badge>
</template>

<script>
export default {
  name: "TagBadge",
  props: {
    tag: {type: String, required: true}
  },
  data() {
    return {
      colors: ["primary", "secondary", "success", "danger", "warning", "info", "dark"],
    }
  },
  methods: {
    getColorForTag(value) {
      return this.colors[value.charCodeAt(0) % this.colors.length];
    },
  }
}
</script>

<style scoped>

</style>
