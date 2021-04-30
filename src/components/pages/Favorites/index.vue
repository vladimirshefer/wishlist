<template>
  <div class="row">
    <div class="col-12" v-for="subscription in users" :key="subscription.subject">
      <UserProfileHeader :user-id="subscription.subject"/>
    </div>
  </div>
</template>

<script>
import subscriptionService from "@/services/subscriptionService";
import UserProfileHeader from "@/components/UserProfileHeader";

export default {
  name: "Favorites",
  components: {UserProfileHeader},
  data() {
    return {
      users: []
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    async init() {
      this.users = await subscriptionService.getSubscriptions(this.user?.uid)
    }
  },
  watch: {
    async user() {
      await this.init()
    }
  },
  async beforeMount() {
    await this.init();
  }
}
</script>

<style scoped>

</style>
