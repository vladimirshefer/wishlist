<template>
  <div>
    <div class="row">
      <div class="col-12">
        <UserProfileHeader :user-id="userId"/>
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
import ItemEditForm from "@/components/UserWishlist/ItemEditForm";
import wishlistItemsService from "@/services/wishlistItemsService";
import UserProfileHeader from "@/components/UserProfileHeader";

export default {
  name: "User",
  components: {UserProfileHeader, ItemEditForm, UserWishlist},
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
    async addWishlistItem(item) {
      await wishlistItemsService.create(item)
    },
  },
  watch: {
    async userId(userId) {
      await this.reloadUserProfile(userId)
    },
    async user() {
      await this.reloadUserProfile(this.userId)
    }
  }
}
</script>

<style scoped>

</style>
