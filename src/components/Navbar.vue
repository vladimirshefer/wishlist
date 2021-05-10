<template>

  <b-navbar toggleable="lg" type="light" variant="custom" sticky :style="{background: '#ffffff'}">

    <router-link to="/" v-slot="{ href }" custom>
      <b-navbar-brand :href="href">
        <b-avatar square variant="transparent" :src="logoUrl" size="1.5em"/>
        WishList
      </b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link v-if="user" :to="'/user/' + user.uid"
                     v-slot="{href}" custom>
          <b-nav-item :href="href">
            <b-icon icon="house-door"/>
            <span class="ml-1">Мои желания</span>
          </b-nav-item>
        </router-link>

        <router-link v-if="user" to="/fav/" v-slot="{href}" custom>
          <b-nav-item :href="href">
            <b-icon icon="star"/>
            <span class="ml-1">Избранное</span>
          </b-nav-item>
        </router-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="user">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            {{ profile.displayName || user.displayName || user.email }}
            <b-avatar variant="light" :src="profile.photoURL || user.photoURL" class="ml-1"/>
          </template>

          <b-dropdown-item disabled href="#"></b-dropdown-item>

          <router-link to="/profile/" v-slot="{ href }" custom>
            <b-dropdown-item :href="href">
              <b-icon icon="person"/>
              Профиль
            </b-dropdown-item>
          </router-link>

          <b-dropdown-item href="#" @click="$emit('signOut')">
            <b-icon icon="box-arrow-right"/>
            Выйти
          </b-dropdown-item>

        </b-nav-item-dropdown>
        <b-nav-item right v-if="!user" @click="$emit('signIn')"><b-icon icon="google"/> Войти</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {
      logoUrl: require('@/assets/logo.svg'),
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    profile(){
      return this.$store.state.profile || {}
    }
  },
}
</script>

<style scoped>

</style>
