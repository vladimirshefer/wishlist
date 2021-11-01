<template>
  <div class="col-xs-12 col-md-6 col-lg-4">
    <div class="p-3 mb-2" style="background-color: #f3f3f4; border-radius: 3px">
      <div class="d-flex align-items-baseline mb-2">
        <router-link :to="'/user/' + item.stored.uid" v-slot="{ href }" custom>
          <a :href="href" class="mr-2">
            <template v-if="profile">
              <b-avatar v-if="profile.photoURL" :src="profile.photoURL"
                        size="sm" class="mr-1"/>
              {{ profile.displayName || "Anonymous" }}
            </template>
            <template v-else>
              <b-avatar size="sm" text="?" class="mr-1"/>
              {{ "Anonymous" }}
            </template>
          </a>
        </router-link>
        <router-link :to="'/wish/' + item.id" v-slot="{ href }" custom>
          <a :href="href">
            <small class="text-muted">{{ createdAtStr }}</small>
          </a>
        </router-link>
      </div>
      <PseudoImage :text="item.stored.name"/>
      <div>
        <p style="white-space: pre-line">{{ item.stored.description }}</p>
      </div>
      <div>
        <b v-show="!item.stored.isMoneyCollectingEnabled || !item.stored.moneyCollected">{{ item.stored.cost }} ₽</b>
      </div>
      <b-progress v-show="item.stored.isMoneyCollectingEnabled"
        :title="moneyCollectedProgressString"
        max="100"
        class="w-100 mt-2 mb-3"
        height="15px"
      >
        <b-progress-bar :value="moneyCollectedPercent" :variant="isMoneyCollectingCompleted?'danger':'primary'">
          <span>
            <strong> {{ moneyCollectedProgressString }} </strong>
          </span>
        </b-progress-bar>
      </b-progress>
      <div class="mb-2">
        <TagBadge v-for="tag in item.stored.tags" :key="tag" :tag="tag"/>
      </div>
      <b-button
        v-if="item.stored.link"
        :href="item.stored.link"
        class="card-button mr-2"
        target="_blank"
        size="sm"
        variant="primary"
      >
        Перейти в магазин
        <b-icon icon="box-arrow-up-right"/>
      </b-button>
      <template v-if="user">
        <b-button
          v-if="isMyItem || isAdded"
          class="card-button mr-2"
          target="_blank"
          size="sm"
          variant="success"
          disabled
        >
          <b-icon icon="folder-check"/>
          {{ "Добавлено!" }}
        </b-button>
        <b-button
          v-else
          class="card-button mr-2"
          target="_blank"
          size="sm"
          variant="success"
          @click="addToMyList(item)"
        >
          <b-icon icon="folder-plus"/>
          {{ "Тоже хочу!" }}
        </b-button>
        <b-button
          class="mr-2"
          v-show="item.stored.donatelink"
          :href="item.stored.donatelink"
          target="_blank"
          size="sm"
          variant="warning"
        >
          Пожертвовать
          <b-icon icon="box-arrow-up-right" />
        </b-button>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import wishlistItemsService from "@/services/wishlistItemsService";
import TagBadge from "@/components/TagBadge.vue";
import profileService from "@/services/profileService";
import dateUtils from "@/js/utils/DateUtils";
import {Component, Prop, Vue} from "vue-property-decorator";
import UserProfileEntity from "@/db/model/UserProfileEntity";
import PseudoImage from "@/components/PseudoImage.vue";

@Component<FeedItem>({
  name: "FeedItem",
  components: {PseudoImage, TagBadge},
  async beforeMount(): Promise<void> {
    this.profile = await profileService.getUserProfileOrNull((this.item as any)?.stored?.uid as string || "") as any;
  },
})
export default class FeedItem extends Vue {
  @Prop()
  item: any | null

  profile: UserProfileEntity | null = null
  isAdded: boolean = false

  get user(): any {
    return this.$store.state.user;
  }

  get isMyItem(): Boolean {
    return this.item.stored.uid === this.user.uid;
  }

  get createdAtStr(): String {
    return dateUtils.displayStringOf(this.item.createdAt)
  }

  get moneyCollectedPercent() {
    return (
      ((this.item.stored.moneyCollected || 0) / this.item.stored.cost) * 100 || 0
    );
  }

  get moneyCollectedProgressString() {
    return (
      (this.item.stored.moneyCollected || 0) +
      " / " +
      this.item.stored.cost +
      " p. (" +
      this.moneyCollectedPercent.toFixed(2) +
      "%)"
    );
  }

  get isMoneyCollectingCompleted() {
    return this.item.stored.moneyCollected?.doubleValue >= this.item.stored.cost?.doubleValue
  }

  addToMyList(item: any): void {
    if (this.isAdded) {
      return;
    }

    wishlistItemsService.create(item.stored);
    this.isAdded = true;
  }
}
</script>

<style scoped>

</style>
