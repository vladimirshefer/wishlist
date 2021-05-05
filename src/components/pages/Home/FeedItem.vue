<template>
  <div class="col-xs-12 col-md-6">
    <div class="card mb-2">
      <div class="card-body">
        <div v-if="profile" class="d-flex mb-2">
          <router-link
            :to="'/user/' + item.stored.uid"
            v-slot="{ href }"
            custom
          >
            <a :href="href" class="mr-2">
              <b-avatar size="sm" :src="profile.photoURL" class="mr-1" />
              {{ profile.displayName || "Anonymous" }}
            </a>
          </router-link>
          <small class="text-muted">{{ createdAtStr }}</small>
        </div>
        <div>
          <h5
            class="card-title"
            style="
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            "
          >
            <span>{{ item.stored.name }}</span>
          </h5>
        </div>
        <div>
          <p style="white-space: pre-line">{{ item.stored.description }}</p>
        </div>
        <div>
          <b>{{ item.stored.cost }} ₽.</b>
        </div>
        <b-progress
          :title="moneyCollectedProgressString"
          max="100"
          class="w-50 mt-2 mb-3"
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
  </div>
</template>

<script>
import { wishlistItems } from "@/firestore.wishlistItems";
import firebase from "firebase";
import dayjs from "dayjs";
import TagBadge from "@/components/TagBadge";
import db from "@/db";
import profileService from "@/services/profileService";

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

      db.wishlistItems.add({
        ...wishlistItems.utils.normalize(item.stored),
        uid: firebase.auth().currentUser.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
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
</style>
