<template>
  <div id="app" class="container">
    <Navbar :user="user" @signIn="signInWithGoogle" @signOut="signOut"/>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: { Navbar},
  data() {
    return {
      user: firebase.auth().currentUser,
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
