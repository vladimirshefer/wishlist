<template>
  <div class="p-3 d-flex" v-if="profile">
    <div class="mr-4">
      <b-avatar
        square
        size="lg"
        variant="light"
        v-if="profile.photoURL"
        :src="profile.avatarUrl ? profile.avatarUrl : profile.photoURL"
      />
    </div>
    <div>
      <div class="d-flex">
        <h1
          class="d-inline mr-1 align-baseline"
          style="font-size: 2rem; font-weight: bold"
        >
          <router-link :to="'/user/' + userId" v-slot="{ href }" custom>
            <a :href="href">
              {{ profile.displayName }}
            </a>
            <a
              @click="toggleSubscription"
              v-show="subscribed !== null && user && user.uid !== userId"
              :title="
                subscribed ? 'Удалить из избранного' : 'Добавить в избранное'
              "
            >
              <b-icon scale="0.6" :icon="subscribed ? 'star-fill' : 'star'" />
            </a>
          </router-link>
        </h1>
      </div>
      <p>
        {{ profile.about }}
      </p>
    </div>
  </div>
</template>
<script>
import subscriptionService from "@/services/subscriptionService"
import profileService from "@/services/profileService"

export default {
  name: "UserProfileHeader",
  props: {
    userId: {},
  },
  data() {
    return {
      profile: null,
      subscribed: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    async reloadUserProfile(userId) {
      this.profile = (await profileService.getUserProfileOrNull(userId)) || {}

      if (this.isMyPage || !this.user) {
        this.subscribed = null
      } else {
        this.subscribed = !!(await subscriptionService.getSubscriptionOrNull(
          this.user.uid,
          userId
        ))
      }
    },
    async toggleSubscription() {
      if (!this.user) return

      let subscribed = this.subscribed
      this.subscribed = null // to hide button until data loads
      if (subscribed === false) {
        await subscriptionService.subscribe(this.user.uid, this.userId)
      } else {
        await subscriptionService.unsubscribe(this.user.uid, this.userId)
      }

      await this.reloadUserProfile(this.userId)
    },
  },
  watch: {
    async userId(userId) {
      await this.reloadUserProfile(userId)
    },
    async user() {
      await this.reloadUserProfile(this.userId)
    },
  },
  async mounted() {
    await this.reloadUserProfile(this.userId)
  },
}
</script>
<style scoped>
h1 a {
  color: black;
}
</style>
