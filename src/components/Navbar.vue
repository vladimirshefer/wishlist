<template>

  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">WishList</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right v-if="user">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-avatar variant="light" :src="user.photoURL"/>
          </template>
          <b-dropdown-item disabled :href="'/user/'+user.uid">{{ user.displayName || user.email}}</b-dropdown-item>
          <b-dropdown-item href="#" @click="$emit('signOut')">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item right v-if="!user" @click="$emit('signIn')">Войти</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    user: {type: Object, required: true}
  }
}
</script>

<style scoped>

</style>
