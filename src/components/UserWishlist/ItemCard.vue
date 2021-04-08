<template>
    <div class="card">
      <div class="card-body">
        <div class="wishlist-item-card">
        </div>
        <h5 class="card-title">
          {{ item.name }}
          <b-dropdown v-if="editable" variant="light" size="sm">
            <b-dropdown-item @click="$emit('edit')">Изменить</b-dropdown-item>
            <b-dropdown-item @click="tryRemove">Удалить</b-dropdown-item>
          </b-dropdown>
        </h5>
        <p><b>{{ item.cost }} ₽.</b></p>
        <div class="mb-2">
          <b-badge pill class="mr-2 p-2" v-for="(tag, index) in item.tags" :key="index" :variant="getColorForTag(tag)">{{tag}}</b-badge>
        </div>
        <b-button v-if="item.link" :href="item.link"
                  class="card-button" target="_blank" size="sm" variant="primary">
          Открыть <b-icon icon="box-arrow-up-right"/>
        </b-button>
        <b-button v-else :href="searchLink"
                  class="card-button" target="_blank" size="sm" variant="primary">
         <b-icon icon="google"/> Поиск
        </b-button>
      </div>
    </div>
</template>

<script>

export default {
  name: "ItemCard",
  props: {
    item: {type: Object, required: true},
    editable: {type: Boolean, required: false, default: false}
  },
  data() {
    return {
      colors: ["primary", "secondary", "succes", "danger", "warning", "info", "dark"],
    }
  },
  methods: {
    tryRemove() {
      if (confirm("Удалить желание?")) {
        this.$emit('remove')
      }
    },
    getColorForTag(value) {
      return this.colors[value.charCodeAt(0) % this.colors.length];
    },
  },
  computed: {
    searchLink() {
      return 'https://www.google.com/search?q=' + this.item.name // TODO sanitize
    }
  }
}
</script>

