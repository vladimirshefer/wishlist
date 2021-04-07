<template>
  <div id="app" class="container">
    <Navbar :user="user" @signIn="signInWithGoogle" @signOut="signOut"/>

    <div class="row">
        <WishlistItemCard :item="item" v-for="item in items" :key="item.name"/>
    </div>

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
import WishlistItemCard from "@/components/WishlistItemCard";
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {Navbar, WishlistItemCard, AddForm},
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
      alert("adding")
      firebase.firestore().collection("wishlistItems").add(
          {
            ...item,
            uid: this.user.uid
          }
      )
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
      firebase.firestore().collection("wishlistItems")
          .where("uid", "==", this.user.uid || "")
          .onSnapshot(querySnapshot => {
            this.items = querySnapshot.docs.map(it => {
              return {
                ...it.data(),
                id: it.id
              }
            })
          })
    })

  }
}
</script>

<style>
.row {
  margin-top: 10px;
}
</style>
