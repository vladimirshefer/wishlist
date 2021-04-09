<template>

  <b-navbar toggleable="lg" type="light" variant="light">

    <router-link to="/" v-slot="{ href }" custom>
      <b-navbar-brand :href="href">
        <b-avatar square variant="light" :src="logoUrl"/>
        WishList
      </b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link v-if="user" :to="'/user/' + user.uid"
                     v-slot="{href}" custom>
          <b-nav-item :href="href">Мои желания</b-nav-item>
        </router-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="user">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-avatar variant="light" :src="user.photoURL"/>
          </template>
          <b-dropdown-item disabled href="#">{{ user.displayName || user.email}}</b-dropdown-item>
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
  }
}
</script>

<style scoped>

</style>
