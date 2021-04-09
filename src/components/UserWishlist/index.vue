<template>
  <div class="row">
    <FilterBar ref="filterBar" @apply="filter = $event"/>
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

    <div class="col-12" v-for="item in itemsFiltered" :key="item.name">
      <ItemCardWrapper :item="item" :editable="editable"
                       @remove="removeWishlistItem(item.id)"
                       @update="editItem($event)"
                       @clickOnTag="$refs.filterBar.addFilterTag($event)"
      />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import ItemCardWrapper from "@/components/UserWishlist/ItemCardWrapper";
import * as R from "ramda"
import FilterBar from "@/components/UserWishlist/FilterBar";

export default {
  name: "UserWishlist",
  components: {FilterBar, ItemCardWrapper},
  props: {
    userId: {type: String, required: false},
    editable: {type: Boolean, required: false, default: false},
  },
  data() {
    return {
      items: [],
      unsubscribe: function () {
      },
      filter: {
        tags: [],
      },
    }
  },
  computed: {
    itemsFiltered() {
      let result = this.items;

      if (!this.filter) {
        return result;
      }

      if (!!this.filter.tags && Array.isArray(this.filter.tags) && this.filter.tags.length > 0) {
        result = result.filter(item => {
              if (R.isNil(item.tags) || item.tags.length === 0) {
                return false;
              }
              return R.any(tag => this.filter.tags.includes(tag))(item.tags)
            }
        )
      }

      return result
    }
  },
  methods: {
    removeWishlistItem(id) {
      if (this.editable) {
        firebase.firestore().collection("wishlistItems").doc(id).delete();
      }
    },
    editItem(item) {
      firebase.firestore().collection("wishlistItems").doc(item.id).update(item)
    },
    init(userId) {
      this.unsubscribe()

      if (userId != null) {
        this.unsubscribe = firebase.firestore().collection("wishlistItems")
            .where("uid", "==", userId)
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
    },
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
