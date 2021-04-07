<template>
  <div class="card col-12">
    <div class="card-body">
      <div class="wishlist-item-card">
      </div>
      <h5 class="card-title">{{ item.name }}</h5>
      <p><b>{{ item.cost }} ₽.</b></p>
      <a class="card-link" target="_blank" v-if="item.link" :href="item.link">Открыть</a>
      <span style="color: gray" v-else>Ссылка отсутствует</span>
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

<style scoped>

</style>
