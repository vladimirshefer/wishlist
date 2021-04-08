<template>
  <div class="row">
    <div class="col-12" v-for="item in items" :key="item.name" >
      <WishlistItemCard :item="item" @remove="removeWishlistItem(item.id)"/>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import WishlistItemCard from "@/components/WishlistItemCard";

export default {
  name: "UserWishlistItems",
  components: {WishlistItemCard},
  props: {
    userId: {type: String, required: false}
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    removeWishlistItem(id) {
      firebase.firestore().collection("wishlistItems").doc(id).delete();
    }
  },
  watch: {
    userId(userId) {
      if (userId != null) {
        firebase.firestore().collection("wishlistItems")
            .where("uid", "==", userId)
            .onSnapshot(querySnapshot => {
              this.items = querySnapshot.docs.map(it => {
                return {
                  ...it.data(),
                  id: it.id
                }
              })
            })
      } else {
        this.items = []
      }
    }
  }
}
</script>

<style scoped>

</style>
