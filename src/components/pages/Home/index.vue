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
          <b-button v-else v-b-modal.modal-add-item variant="primary" href="#">Добавить желание</b-button>
          <b-modal id="modal-add-item" title="Добавить желание">
            <div>Форма внизу страницы. // TODO</div>
          </b-modal>
        </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  data() {
    return {
      user: firebase.auth().currentUser
    }
  },
  methods: {
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => this.user = user)
  }
}
</script>

<style scoped>

</style>
