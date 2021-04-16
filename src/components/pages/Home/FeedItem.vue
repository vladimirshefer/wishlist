<template>
  <div class="col-xs-12 col-md-6">
    <div class="card mb-2">
      <div class="card-body">
        <div>
        <h5 class="card-title">
          <span>{{ item.stored.name }}</span>
        </h5>
        <small class="text-muted">{{ createdAtStr }}</small>
        </div>
        <div>
          <b>{{ item.stored.cost }} ₽.</b>
        </div>
        <div class="mb-2">
          <TagBadge v-for="tag in item.stored.tags" :key="tag" :tag="tag"/>
        </div>
        <b-button v-if="item.stored.link" :href="item.stored.link"
                  class="card-button mr-2" target="_blank" size="sm" variant="primary">
          Перейти в магазин
          <b-icon icon="box-arrow-up-right"/>
        </b-button>
        <template v-if="user">
          <b-button v-if="isMyItem || isAdded"
                    class="card-button mr-2" target="_blank" size="sm" variant="success" disabled>
            <b-icon icon="folder-check"/>
            {{ "Добавлено!" }}
          </b-button>
          <b-button v-else
                    class="card-button mr-2" target="_blank" size="sm" variant="success"
                    @click="addToMyList(item)">
            <b-icon icon="folder-plus"/>
            {{ "Тоже хочу!" }}
          </b-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {wishlistItems} from "@/firestore.wishlistItems";
import firebase from "firebase";
import dayjs from "dayjs"
import TagBadge from "@/components/TagBadge";
import db from "@/db";

export default {
  name: "FeedItem",
  components: {TagBadge},
  props: {
    item: {type: Object, required: true}
  },
  data() {
    return {
      isAdded: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    isMyItem() {
      return this.item.stored.uid === this.user.uid
    },
    createdAtStr() {
      let createdAt = dayjs(new Date(this.item.stored.createdAt.seconds * 1000));
      let now = dayjs()
      if (createdAt.year() != now.year()) {
        return createdAt.format("hh:mm DD MMM YYYY")
      }
      if (createdAt.date() != now.date()) {
        return createdAt.format("hh:mm DD MMM")
      } else {
        return createdAt.format("hh:mm")
      }
    }
  },
  methods: {
    searchLink(item) {
      return 'https://www.google.com/search?q=' + item.stored.name // TODO sanitize
    },
    addToMyList(item) {
      if (this.isAdded) {
        return
      }

      db.wishlistItems.add({
        ...wishlistItems.utils.normalize(item.stored),
        uid: firebase.auth().currentUser.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      this.isAdded = true
    },
  }
}
</script>

<style scoped>

</style>
