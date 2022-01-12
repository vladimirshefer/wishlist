<template>
  <div class="row">
    <FeedItem v-for="item in items" :key="item.stored.name+item.stored.uid" :item="item"/>
  </div>
</template>

<script lang="ts">
import db from "@/db";
import dayjs from "dayjs";
import {Component, Prop, Vue} from "vue-property-decorator";
import FeedItem from "@/components/pages/Home/Feed/FeedItem/index.vue";
import WishlistItemEntity from "@/db/model/WishlistItemEntity";


@Component<Feed>({
  components: { FeedItem },
  beforeMount() {
    this.init();
  }
})
export default class Feed extends Vue {
  @Prop()
  maxSize!: number

  items: any[] = []

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
          stored: {...item} as WishlistItemEntity,
          id: it.id,
          createdAt: item.createdAt ? dayjs(new Date(item.createdAt.seconds * 1000)) : null,
        } as any
      })
      .sort((a, b) => b.createdAt.unix() - a.createdAt.unix()) // sort descending by date
    })
  }
}
</script>

<style scoped>

</style>
