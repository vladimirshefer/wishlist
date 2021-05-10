<template>
  <div class="col-xs-12 col-md-6 col-lg-4">
    <div class="p-3 mb-2" style="background-color: #f3f3f4; border-radius: 3px">
      <div class="d-flex align-items-baseline mb-2">
        <router-link :to="'/user/' + item.stored.uid" v-slot="{ href }" custom>
          <a :href="href" class="mr-2">
            <template v-if="profile">
              <b-avatar
                v-if="profile.photoURL"
                :src="profile.photoURL"
                size="sm"
                class="mr-1"
              />
              {{ profile.displayName || "Anonymous" }}
            </template>
            <template v-else>
              <b-avatar size="sm" text="?" class="mr-1" />
              {{ "Anonymous" }}
            </template>
          </a>
        </router-link>
        <small class="text-muted">{{ createdAtStr }}</small>
      </div>
      <div
        class="feed-item__title crop"
        :style="{ background: backgroundColor }"
      >
        <h5 class="text-center" :class="textSizeClass">
          {{ item.stored.name }}
        </h5>
      </div>
      <div>
        <p style="white-space: pre-line">{{ item.stored.description }}</p>
      </div>
      <div>
        <b>{{ item.stored.cost }} ₽</b>
      </div>
      <b-progress
        :title="moneyCollectedProgressString"
        max="100"
        class="w-100 mt-2 mb-3"
        height="15px"
      >
        <b-progress-bar :value="moneyCollectedPercent">
          <span>
            <strong> {{ moneyCollectedProgressString }} </strong>
          </span>
        </b-progress-bar>
      </b-progress>
      <div class="mb-2">
        <TagBadge v-for="tag in item.stored.tags" :key="tag" :tag="tag" />
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
        <b-icon icon="box-arrow-up-right" />
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
          <b-icon icon="folder-check" />
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
          <b-icon icon="folder-plus" />
          {{ "Тоже хочу!" }}
        </b-button>
      </template>
    </div>
  </div>
</template>

<script>
import wishlistItemsService from "@/services/wishlistItemsService";
import dayjs from "dayjs";
import TagBadge from "@/components/TagBadge";
import profileService from "@/services/profileService";
import StringUtils from "@/js/utils/StringUtils";

export default {
  name: "FeedItem",
  components: { TagBadge },
  props: {
    item: { type: Object, required: true },
  },
  data() {
    return {
      profile: null,
      isAdded: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    isMyItem() {
      return this.item.stored.uid === this.user.uid;
    },
    backgroundColor() {
      let randomSeed = StringUtils.hashcode(this.item.stored.name) + 13;
      let pairs = [
        "rgb(51, 102, 153), rgb(51, 170, 136)",
        "rgb(51, 102, 153), rgb(136, 51, 170)",
        "rgb(102, 51, 153), rgb(51, 136, 170)",
        "rgb(102, 153, 51), rgb(51, 136, 170)",
        "rgb(153, 51, 102), rgb(51, 136, 170)",
        "rgb(153, 51, 102), rgb(170, 136, 51)",
        "rgb(153, 102, 51), rgb(136, 51, 170)",
      ];
      let pair = pairs[randomSeed % pairs.length];
      let angle = randomSeed % 360;
      return `linear-gradient(${angle}deg, ${pair})`;
    },
    createdAtStr() {
      let createdAt = this.item.createdAt;
      let now = dayjs();
      if (createdAt.year() !== now.year()) {
        return createdAt.format("DD.MM.YYYY, hh:mm");
      }
      if (createdAt.date() !== now.date()) {
        return createdAt.format("DD MMM, hh:mm");
      } else {
        return createdAt.format("hh:mm");
      }
    },
    textSizeClass() {
      return this.item.stored.name.length > 50 ? "" : "banner-text";
    },
    moneyCollectedPercent() {
      return (
        ((this.item.moneyCollected || 0) / this.item.stored.cost) * 100 || 0
      );
    },
    moneyCollectedProgressString() {
      return (
        (this.item.moneyCollected || 0) +
        " / " +
        this.item.stored.cost +
        " p. (" +
        this.moneyCollectedPercent.toFixed(2) +
        "%)"
      );
    },
  },
  methods: {
    addToMyList(item) {
      if (this.isAdded) {
        return;
      }

      wishlistItemsService.create(item.stored);
      this.isAdded = true;
    },
  },
  async beforeMount() {
    this.profile = await profileService.getUserProfileOrNull(
      this.item.stored.uid
    );
  },
};
</script>

<style scoped>
.feed-item__title {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feed-item__title > h5 {
  color: white;
}

.banner-text {
  font-size: 40px;
}

.crop {
  overflow: hidden;
}
</style>
