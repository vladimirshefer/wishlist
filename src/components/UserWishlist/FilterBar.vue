<template>
  <div class="col-12">
    <div class="p-3">
      <template v-if="showFilter">
        <div class="d-inline mr-3">
          <b-link class="mx-1" variant="outline-light" size="sm" @click="resetFilter">
            <b-icon icon="x"/>
          </b-link>
        </div>
        <b-form inline class="d-inline">
          <b-form-tags size="sm" tag-pills tag-variant="primary" v-model="filter.tags"/>
          <b-button size="sm" class="mx-1" variant="primary" @click="applyFilter">Применить</b-button>
        </b-form>
      </template>
      <template v-else>
        <b-button size="sm" variant="primary" @click="showFilter=true">
          <b-icon icon="filter"/>
        </b-button>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: "FilterBar",
  data() {
    return {
      filter: this.getFilterDefaults(),
      showFilter: false,
    }
  },
  methods: {
    getFilterDefaults() {
      return {
        tags: [],
      }
    },
    getFilterCopy() {
      return JSON.parse(JSON.stringify(this.filter))
    },
    applyFilter() {
      this.$emit("apply", this.getFilterCopy())
    },
    resetFilter() {
      this.filter = this.getFilterDefaults()
      this.showFilter = false;
    },
    addFilterTag(tag) {
      this.showFilter = true;
      if (!this.filter.tags.includes(tag)) {
        this.filter.tags.push(tag);
      }
    },
  }
}
</script>

<style scoped>

</style>
