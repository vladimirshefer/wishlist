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
import profileService from "@/services/profileService";

async function onAuthStateChanged(user, actionWithProfile, profileUnsubscribeGetter, profileUnsubscribeSetter) {
  await profileService.initUserProfile(user.uid)
  this.$store.state._profileUnsubscribe()
  let unsubscribe = profileService.subscribeOnProfileByUserId(user.uid,
      profile => actionWithProfile(profile));
  profileUnsubscribeSetter(unsubscribe)
}

// eslint-disable-next-line no-unused-vars
async function initUser(actionWithUser, actionWithProfile, profileUnsubscribeGetter, profileUnsubscribeSetter) {
  actionWithUser(firebase.auth().currentUser)
  firebase.auth().onAuthStateChanged(user => {
    actionWithUser(user)
    if (user) {
      onAuthStateChanged(user, actionWithProfile, profileUnsubscribeGetter, profileUnsubscribeSetter)
    }
  })
}

let profileUnsubscribe = function () {
}

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
    this.$store.commit("updateFirebaseAuth", firebase.auth().currentUser)
    firebase.auth().onAuthStateChanged(user => {
      this.$store.commit("updateFirebaseAuth", user)
      if (user) {
        profileService.initUserProfile(user.uid)
            .then(() => {
              //  profileUnsubscribe()
              // this.$store.state._profileUnsubscribe()
              // let unsubscribe = profileService.subscribeOnProfileByUserId(user.uid,
              //     profile => this.$store.commit("setUserProfile", profile));
              // profileUnsubscribe = unsubscribe()
              // this.$store.commit("setUserProfileUnsubscribe", unsubscribe)
              profileService.getUserProfileOrNull(user.uid).then(profile => this.$store.commit("setUserProfile", profile))
            })
      } else {
        profileUnsubscribe()
        this.$store.state._profileUnsubscribe()
        this.$store.commit("setUserProfile", null)
      }
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
