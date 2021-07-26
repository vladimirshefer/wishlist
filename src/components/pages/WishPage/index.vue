<template>
  <div class="row">
    <div class="col-12 mb-2">
      <a :href="authorUrl">
        <b-avatar size="1.5em" :src="authorPhotoUrl" class="mr-1"/>
        <b class="mr-2">{{ authorName }}</b>
      </a>
      <small class="text-muted">{{ createdAtStr }}</small>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-8">
          <h5>{{ wish.name }} </h5>
          <p>{{ wish.description }}</p>
        </div>
        <div class="col-4">
          <p>{{ wish.cost }} rub.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import wishlistItemsService from "@/services/wishlistItemsService";
import profileService from "@/services/profileService";
import dateUtils from "@/js/utils/DateUtils";
import dayjs from "dayjs";
import WishlistItemEntity from "@/db/model/WishlistItemEntity";
import {Component, Vue} from "vue-property-decorator";

@Component<WishPage>({
  name: "WishPage",
  watch: {
    async wishId() {
      await this.init();
    }
  },
  mounted() {
    this.init();
  }
})
export default class WishPage extends Vue {
  wish: WishlistItemEntity | null = null;
  authorProfile: any | null = null;

  get wishId() {
    return this.$route.params.wishId
  }

  get createdAtStr() {
    if (this.wish?.createdAt) {
      const createdAt = dayjs(new Date(this.wish!.createdAt.seconds * 1000));
      return dateUtils.displayStringOf(createdAt)
    } else {
      return "posted"
    }
  }

  get authorUrl() {
    if (this.wish && this.wish.uid) {
      let link = "/user/" + this.wish!.uid;
      return this.$router.resolve(link).href
    } else {
      return null
    }
  }

  get authorPhotoUrl() {
    return this.authorProfile?.photoURL || null
  }

  get authorName() {
    return this.authorProfile?.displayName || 'Anonymous'
  }

  private async init() {
    let wish: WishlistItemEntity | null = await wishlistItemsService.getById(this.wishId);
    this.wish = wish
    if (wish !== null) {
      this.authorProfile = await profileService.getUserProfileOrNull(wish.uid || "")
    }
  }
}
</script>

<style scoped>

</style>
