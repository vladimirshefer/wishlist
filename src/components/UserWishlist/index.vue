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
      <ItemCardWrapper
        :item="item"
        :editable="editable"
        @remove="removeWishlistItem(item.id)"
        @update="editItem($event)"
      />
    </div>
  </div>
</template>

<script>
import db from "@/db";
import ItemCardWrapper from "@/components/UserWishlist/ItemCardWrapper";
import wishlistItemsService from "@/services/wishlistItemsService";

export default {
  name: "UserWishlist",
  components: { ItemCardWrapper },
  props: {
    /**
     * Used to filter list by owner.
     */
    userId: { type: String, required: false },
    /**
     * Show edit buttons/controls.
     */
    editable: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      items: [],
      dataReady: false,
      unsubscribe: function() {},
    };
  },
  methods: {
    removeWishlistItem(id) {
      if (this.editable) {
        db.wishlistItems.doc(id).delete();
      }
    },
    editItem(item) {
      wishlistItemsService.edit(item.id, item)
    },
    init(userId) {
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
              };
            });
            this.dataReady = true;
          }
        );
      } else {
        this.items = [];
        this.dataReady = true;
      }
    },
  },
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
  },
};
</script>

<style scoped></style>
