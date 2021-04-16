<template>
  <div id="app">
    <div class="container">
      <Navbar @signIn="signInWithGoogle" @signOut="signOut"/>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Footer, Navbar},
  data() {
    return {
      form: {
        name: "",
      },
      items: []
    }
  },
  computed: {
    user() {
      return this.$store.state.user
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
  beforeMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.$store.commit("updateFirebaseAuth", user)
    })
  },
}
</script>

<style>
.row {
  margin-top: 10px;
}

html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 65px !important; /* Margin bottom by footer height */
}
</style>
