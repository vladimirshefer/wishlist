<template>
  <div class="row">
    <div class="col-12" v-if="items.length === 0 && dataReady">
      <div class="card wishlist-item">
        <div class="card-body">
          <div class="wishlist-item-card"></div>
          <h3 class="card-title">
            Все желания уже выполнены?
          </h3>
          <h5>В этом списке ничего нет :)</h5>
          <b-button v-if="!editable" variant="primary" href="/" class="mt-2"
            >На главную</b-button
          >
        </div>
      </div>
    </div>
    <div class="col-12" v-if="!dataReady">
      <b-overlay variant="transparent" :show="!dataReady" rounded="sm">
        <div class="row">
          <div class="col-8" style="min-height: 50px"></div>
        </div>
      </b-overlay>
    </div>
    <div class="col-12" v-for="item in items" :key="item.name">
      <div class="row">
        <div class="col-0 col-lg-1 col-xl-2"/>
        <div class="col-12 col-lg-10 col-xl-8">
          <ItemCardWrapper
            :item="item"
            :editable="editable"
            @remove="removeWishlistItem(item.id)"
            @archive="archiveWishlistItem(item)"
            @update="editItem($event)"
          />
        </div>
        <div class="col-0 col-lg-1 col-xl-2"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import db from "@/db";
import ItemCardWrapper from "@/components/UserWishlist/ItemCardWrapper.vue";
import wishlistItemsService from "@/services/wishlistItemsService";
import {Component, Prop, Vue} from "vue-property-decorator";


@Component<UserWishlist>({
  components: {ItemCardWrapper},
  watch: {
    userId(userId) {
      this.init(userId);
    },
    editable() {
      this.init(this.userId);
    },
  },
  beforeMount() {
    this.init(this.userId);
  }
})
export default class UserWishlist extends Vue {
  @Prop()
  userId!: string | null
  @Prop()
  editable!: boolean


  items: any[] = []
  dataReady: boolean = false
  unsubscribe: any = function () {/* Stub */}


  removeWishlistItem(id: string) {
    if (this.editable) {
      db.wishlistItems.doc(id).delete();
    }
  }

  archiveWishlistItem(item: any) {
    if (this.editable) {
      item.archived = true
      wishlistItemsService.edit(item.id, item);
    }
  }

  editItem(item: any) {
    wishlistItemsService.edit(item.id, item)
  }

  private itemsComparator = (a: any, b: any) => {
    // Firstly push down all archived items
    // then compare by date desc
    let archivedSorting = (+a.archived) - (+b.archived)
    if (archivedSorting != 0) {
      return archivedSorting
    }
    return (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
  };

  init(userId: any) {
    this.unsubscribe();

    if (userId != null) {
      let targetCollectionSelection = db.wishlistItems.where(
          "uid",
          "==",
          userId
      );

      if (!this.editable) {
        targetCollectionSelection = targetCollectionSelection.where(
            "private",
            "==",
            false
        );
      }

      this.unsubscribe = targetCollectionSelection.onSnapshot(
          (querySnapshot) => {
            this.items = querySnapshot.docs.map((it) => {
              return {
                ...it.data(),
                id: it.id,
              } as any;
            })
            .sort(this.itemsComparator);
            this.dataReady = true;
          }
      );
    } else {
      this.items = [];
      this.dataReady = true;
    }
  }

}
</script>

<style scoped></style>
