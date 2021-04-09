<template>
  <div class="my-1">
    <ItemCard v-show="!isEditing" :item="item" :editable="editable"
              @remove="$emit('remove', $event)"
              @edit="isEditing = true"
              @clickOnTag="$emit('clickOnTag', $event)"
    />
    <ItemEditForm v-if="isEditing" :item="item"
                  @submit="$emit('update', $event); isEditing=false"
                  @cancel="isEditing=false"
    />
  </div>
</template>

<script>
import ItemEditForm from "@/components/UserWishlist/ItemEditForm";
import ItemCard from "@/components/UserWishlist/ItemCard";

export default {
  name: "ItemCardWrapper",
  components: {ItemCard, ItemEditForm},
  props: {
    item: {type: Object, required: true},
    editable: {type: Boolean, required: false, default: false},
  },
  data() {
    return {
      isEditing: false
    }
  }
}
</script>

<style scoped>

</style>
