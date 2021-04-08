<template>
  <div>
    <UserWishlist :user-id="(user ? user.uid : null)"/>
    <div class="row" v-if="user">
      <div class="col-12">
        <AddForm @submit="addWishlistItem($event)"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserWishlist from "@/components/UserWishlist";
import AddForm from "@/components/AddForm";
import firebase from "firebase";

export default {
  name: "Home",
  components: {AddForm, UserWishlist},
  data() {
    return {
      user: firebase.auth().currentUser
    }
  },
  methods: {
    addWishlistItem(item) {
      firebase.firestore().collection("wishlistItems").add(
          {
            ...item,
            uid: this.user.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          }
      )
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => this.user = user)
  }
}
</script>

<style scoped>

</style>
