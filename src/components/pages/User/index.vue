<template>
  <div>
    <div>
      <UserWishlist :editable="isMyPage" :user-id="userId"/>
      <div class="row" v-if="isMyPage">
        <div class="col-12">
          <h4 class="mt-3">Добавить желание:</h4>
          <ItemEditForm :item="{}" @submit="addWishlistItem($event)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserWishlist from "@/components/UserWishlist";
import firebase from "firebase";
import ItemEditForm from "@/components/UserWishlist/ItemEditForm";
import {wishlistItems} from "@/firestore.wishlistItems";

export default {
  name: "User",
  components: {ItemEditForm, UserWishlist},
  computed: {
    user() {
      return this.$store.state.user
    },
    userId() {
      return this.$route.params.userId;
    },
    isMyPage() {
      return this.user && this.user.uid === this.userId
    }
  },
  methods: {
    addWishlistItem(item) {
      firebase.firestore().collection("wishlistItems").add(
          {
            ...wishlistItems.utils.normalize(item),
            uid: this.user.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          }
      )
    },
  }
}
</script>

<style scoped>

</style>
