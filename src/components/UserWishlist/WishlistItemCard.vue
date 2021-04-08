<template>
    <div class="card wishlist-item">
      <div class="card-body">
        <div class="wishlist-item-card">
        </div>
        <h5 class="card-title">
          {{ item.name }}
          <b-dropdown variant="light" size="sm">
            <b-dropdown-item @click="tryRemove">Удалить</b-dropdown-item>
          </b-dropdown>
        </h5>
        <p><b>{{ item.cost }} ₽.</b></p>
        <b-link v-if="item.link" class="card-link" target="_blank" :href="item.link">Открыть</b-link>
        <b-link v-else class="card-link" target="_blank" :href="searchLink">Найти</b-link>
      </div>
    </div>
</template>

<script>

export default {
  name: "WishlistItemCard",
  props: {
    item: {type: Object, required: true}
  },
  methods: {
    tryRemove() {
      if (confirm("Удалить желание?")) {
        this.$emit('remove')
      }
    }
  },
  computed: {
    searchLink() {
      return 'https://www.google.com/search?q=' + this.item.name // TODO sanitize
    }
  }
}
</script>

<style>
.wishlist-item {
  margin-bottom: 10px;
}
</style>
