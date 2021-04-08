<template>

  <b-navbar toggleable="lg" type="light" variant="light">

    <b-navbar-brand href="#">
      <b-avatar square variant="light" :src="logoUrl"/>
      WishList
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-if="user" :href="myProfileLink">Моя страница</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="user">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-avatar variant="light" :src="user.photoURL"/>
          </template>
          <b-dropdown-item disabled :href="'/user/'+user.uid">{{ user.displayName || user.email}}</b-dropdown-item>
          <b-dropdown-item href="#" @click="$emit('signOut')"><b-icon icon="box-arrow-right"/> Выйти</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item right v-if="!user" @click="$emit('signIn')"><b-icon icon="google"/> Войти</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    user: {type: Object, required: true}
  },
  data() {
    return {
      logoUrl: require('@/assets/logo.png')
    }
  },
  computed: {
    myProfileLink() {
      if (!this.user || !this.user.uid) {
        return this.$router.resolve("/").href
      }

      return this.$router.resolve("/user/" + this.user.uid).href
    }
  }
}
</script>

<style scoped>

</style>
