<template>
  <div class="row">
    <div class="col-12" v-for="item in items" :key="item.name" >
      <WishlistItemCard :item="item" @remove="removeWishlistItem(item.id)"/>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import WishlistItemCard from "@/components/UserWishlist/WishlistItemCard";

export default {
  name: "UserWishlist",
  components: {WishlistItemCard},
  props: {
    userId: {type: String, required: false}
  },
  data() {
    return {
      items: [],
      unsubscribe: function () {}
    }
  },
  methods: {
    removeWishlistItem(id) {
      firebase.firestore().collection("wishlistItems").doc(id).delete();
    },
    init(userId){
      this.unsubscribe()

      if (userId != null) {
        this.unsubscribe = firebase.firestore().collection("wishlistItems")
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
  },
  watch: {
    userId(userId) {
      this.init(userId);
    }
  },
  mounted() {
    this.init(this.userId);
  }
}
</script>

<style scoped>

</style>
