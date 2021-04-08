<template>
  <div id="app" class="container">
    <Navbar :user="user" @signIn="signInWithGoogle" @signOut="signOut"/>

    <UserWishlist :user-id="(user ? user.uid : null)"/>

    <div class="row" v-if="user">
      <div class="col-12">
        <AddForm @submit="addWishlistItem($event)"/>
      </div>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase/app'
import AddForm from "@/components/AddForm";
import Navbar from "@/components/Navbar";
import UserWishlist from "@/components/UserWishlist";

export default {
  name: 'App',
  components: {UserWishlist, Navbar, AddForm},
  data() {
    return {
      user: null,
      form: {
        name: "",
      },
      items: []
    }
  },
  methods: {
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
    signOut() {
      firebase.auth().signOut();
    },
    addWishlistItem(item) {
      firebase.firestore().collection("wishlistItems").add(
          {
            ...item,
            uid: this.user.uid
          }
      )
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => this.user = user)
  }
}
</script>

<style>
.row {
  margin-top: 10px;
}
</style>
