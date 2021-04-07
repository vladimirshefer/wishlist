<template>
  <div class="card col-12 wishlist-item">
    <div class="d-flex p-3 justify-content-between">
      <div>
        <div class="wishlist-item-card">
        </div>
        <h5 class="card-title">{{ item.name }}</h5>
        <p><b>{{ item.cost }} ₽.</b></p>
        <b-link class="card-link" target="_blank" v-if="item.link" :href="item.link">Открыть</b-link>
        <span style="color: gray" v-else>Ссылка отсутствует</span>
      </div>
      <div>
          <b-btn-close @click="removeItem(item)"></b-btn-close>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: "WishlistItemCard",
  props: {
    item: {type: Object, required: true}
  },
  methods: {
    removeItem(item) {
       firebase.firestore().collection("wishlistItems").doc(item.id).delete();
    }
  }
}
</script>
а
<style>
.wishlist-item {
  margin-bottom: 10px;
}
</style>
