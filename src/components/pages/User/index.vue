<template>
  <div>
    <div class="row">
      <div class="col-12" v-if="profile">
        <div class="p-3 d-flex">
            <div class="mr-4">
              <b-avatar square size="lg" variant="light" v-if="profile.photoURL" :src="profile.photoURL"/>
            </div>
            <div>
              <div>
                <h1 class="d-inline mr-1 align-baseline" style="font-size: 2rem; font-weight: bold">
                  {{ profile.displayName }}
                  <a @click="toggleSubscription" v-show="subscribed!=null"
                     :title="subscribed?'Удалить из избранного':'Добавить в избранное'">
                    <b-icon scale="0.6"
                            :icon="subscribed?'star-fill':'star'"/>
                  </a>
                </h1>
              </div>
              <p>
                {{ profile.about }}
              </p>
            </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <UserWishlist :editable="isMyPage" :user-id="userId"/>
      </div>
    </div>
    <div class="row" v-if="isMyPage">
      <div class="col-12">
        <h4 class="mt-3">Добавить желание:</h4>
        <ItemEditForm :item="{}" @submit="addWishlistItem($event)"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserWishlist from "@/components/UserWishlist";
import firebase from "firebase";
import ItemEditForm from "@/components/UserWishlist/ItemEditForm";
import {wishlistItems} from "@/firestore.wishlistItems";
import db from "@/db";
import profileService from "@/services/profileService";
import subscriptionService from "@/services/subscriptionService";

export default {
  name: "User",
  components: {ItemEditForm, UserWishlist},
  data() {
    return {
      profile: {},
      subscribed: null,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    userId() {
      return this.$route.params.userId;
    },
    isMyPage() {
      return this.user && this.user.uid === this.userId
    }
  },
  methods: {
    addWishlistItem(item) {
      db.wishlistItems.add(
          {
            ...wishlistItems.utils.normalize(item),
            uid: this.user.uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          }
      )
    },
    async reloadUserProfile(userId) {
      this.profile = await profileService.getUserProfileOrNull(userId) || {}

      if (this.isMyPage || !this.user) {
        this.subscribed = null
      } else {
        this.subscribed = !!(await subscriptionService.getSubscriptionOrNull(this.user.uid, userId))
      }
    },
    async toggleSubscription() {
      if (!this.user) return

      let subscribed = this.subscribed;
      this.subscribed = null // to hide button until data loads
      if (subscribed === false) {
        await subscriptionService.subscribe(this.user.uid, this.userId)
      } else {
        await subscriptionService.unsubscribe(this.user.uid, this.userId)
      }

      await this.reloadUserProfile(this.userId)
    }
  },
  watch: {
    async userId(userId) {
      await this.reloadUserProfile(userId)
    },
    async user() {
      await this.reloadUserProfile(this.userId)
    }
  },
  async beforeMount() {
    await this.reloadUserProfile(this.userId)
  }
}
</script>

<style scoped>

</style>
