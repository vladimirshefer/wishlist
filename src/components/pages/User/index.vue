<template>
  <div>
    <div>
      <UserWishlist :editable="editable" :user-id="userId"/>
    </div>
  </div>
</template>

<script>
import UserWishlist from "@/components/UserWishlist";
import firebase from "firebase";
export default {
  name: "User",
  components: {UserWishlist},
  data() {
    return {
      user: firebase.auth().currentUser,
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
    editable() {
      return this.user && this.user.uid === this.userId
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => this.user = user);
  }
}
</script>

<style scoped>

</style>
