<template>
  <div>
    <div class="row">
      <div class="col-12">
        <b-jumbotron>
          <template #header>Мой список желаний</template>

          <template #lead>
            Здесь можно поделиться с друзьями идеями подарков для Вас.
          </template>
          <hr class="my-4">
          <p>
            Список автоматически синхронизируется с облаком.
          </p>
          <b-button v-if="!user" variant="primary" href="#" @click="signInWithGoogle">Войти</b-button>
          <router-link v-else :to="'/user/' + user.uid"
                       v-slot="{href}" custom>
            <b-button v-b-modal.modal-add-item variant="primary" :href="href">Открыть мой список</b-button>
          </router-link>
        </b-jumbotron>
        <h3>Желания других пользователей:</h3>
        <Feed :max-size="4"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h3>Желания других пользователей:</h3>
      </div>
    </div>
    <Feed :max-size="10"/>
  </div>
</template>

<script>
import Feed from "@/components/pages/Home/Feed";

import firebase from "firebase";
import Feed from "@/components/pages/Home/Feed";

export default {
  name: "Home",
  components: {Feed},
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
  }
}
</script>

<style scoped>

</style>
