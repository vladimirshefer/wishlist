<template>
  <div class="row">
    <FeedItem v-for="item in items" :key="item.stored.name+item.stored.uid" :item="item"/>
  </div>
</template>

<script>
import db from "@/db";
import FeedItem from "@/components/pages/Home/Feed/FeedItem";
import dayjs from "dayjs";

export default {
  name: "Feed",
  components: {FeedItem},
  props: {
    maxSize: {type: Number, required: false}
  },
  data() {
    return {
      items: [],
    }
  },
  methods: {
    init() {
      let targetCollectionSelection = db.wishlistItems
          .where("private", "==", false)

      if (this.maxSize > 0) {
        targetCollectionSelection = targetCollectionSelection
            .limit(this.maxSize)
      }

      targetCollectionSelection.orderBy("createdAt", "desc")

      targetCollectionSelection
          .get()
          .then(querySnapshot => {
            this.items = querySnapshot.docs
                .map(it => {
                  let item = it.data()
                  return {
                    stored: {...item},
                    id: it.id,
                    createdAt: item.createdAt ? dayjs(new Date(item.createdAt.seconds * 1000)) : null,
                  }
                })
                .sort((a, b) => b.createdAt.unix() - a.createdAt.unix()) // sort descending by date
          })
    },
  },
  beforeMount() {
    this.init();
  }
}
</script>

<style scoped>

</style>
