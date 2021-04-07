<template>
  <div class="col-12">
    <div class="card wishlist-item">
      <div class="card-body">
        <div class="wishlist-item-card">
        </div>
        <h5 class="card-title">
          {{ item.name }}
          <b-dropdown variant="light" size="sm">
            <b-dropdown-item @click="$emit('remove')">Удалить</b-dropdown-item>
          </b-dropdown>
        </h5>
        <p><b>{{ item.cost }} ₽.</b></p>
        <b-link class="card-link" target="_blank" v-if="item.link" :href="item.link">Открыть</b-link>
        <span style="color: gray" v-else>Ссылка отсутствует</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "WishlistItemCard",
  props: {
    item: {type: Object, required: true}
  }
}
</script>

<style>
.wishlist-item {
  margin-bottom: 10px;
}
</style>
