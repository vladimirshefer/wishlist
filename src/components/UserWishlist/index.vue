<template>
  <div class="row">
    <div class="col-12" v-if="items.length == 0">
      <div class="card wishlist-item">
        <div class="card-body">
          <div class="wishlist-item-card">
          </div>
          <h3 class="card-title">
            Все желания уже выполнены?
          </h3>
          <h5>В этом списке ничего нет :)</h5>
          <b-button v-if="!editable" variant="primary" href="/" class="mt-2">На главную</b-button>
        </div>
      </div>
    </div>
    <div class="col-12" v-for="item in items" :key="item.name">
      <ItemCardWrapper :item="item" :editable="editable"
                        @remove="removeWishlistItem(item.id)"
                        @update="editItem($event)"
      />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import ItemCardWrapper from "@/components/UserWishlist/ItemCardWrapper";
import {wishlistItems} from "@/firestore.wishlistItems";

export default {
  name: "UserWishlist",
  components: {ItemCardWrapper},
  props: {
    /**
     * Used to filter list by owner.
     */
    userId: {type: String, required: false},
    /**
     * Show edit buttons/controls.
     */
    editable: {type: Boolean, required: false, default: false}
  },
  data() {
    return {
      items: [],
      unsubscribe: function () {
      }
    }
  },
  methods: {
    removeWishlistItem(id) {
      if (this.editable) {
        firebase.firestore().collection("wishlistItems").doc(id).delete();
      }
    },
    editItem(item) {
      firebase.firestore().collection("wishlistItems").doc(item.id).update(
          wishlistItems.utils.normalize(item)
      )
    },
    init(userId) {
      this.unsubscribe()

      if (userId != null) {
        let targetCollectionSelection = firebase.firestore().collection("wishlistItems")
            .where("uid", "==", userId);

        // eslint-disable-next-line
        if (!this.editable) {
          targetCollectionSelection = targetCollectionSelection
              .where("private", "==", false)
        }

        this.unsubscribe = targetCollectionSelection
            .onSnapshot(querySnapshot => {
              this.items = querySnapshot.docs.map(it => {
                return {
                  ...it.data(),
                  id: it.id
                }
              })
            })
      } else {
        this.items = []
      }
    }
  },
  watch: {
    userId(userId) {
      this.init(userId);
    }
  },
  mounted() {
    this.init(this.userId);
  }
}
</script>

<style scoped>

</style>
