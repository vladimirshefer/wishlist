<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-8 col-12">
            <div style="display: flex; align-items: flex-start">
              <h5 class="card-title overflow-trimmed">
                {{ item.name }}
              </h5>

              <div class="dropdown-b-dropdown">
                <b-dropdown v-if="editable" variant="light" size="sm">
                  <b-dropdown-item @click="$emit('edit')">Изменить</b-dropdown-item>
                  <b-dropdown-item @click="tryRemove">Удалить</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-md-flex justify-content-md-end col-12">
            <p>
              <b v-show="!item.isMoneyCollectingEnabled || !item.moneyCollected">{{ item.cost }} ₽</b>
            </p>
          </div>
        </div>
        <div>
          <p style="white-space: pre-line">{{ item.description }}</p>
        </div>
        <div v-show="item.isMoneyCollectingEnabled"
          class="row position-relative mt-2 mb-3">
          <div class="col-12 col-lg-6">
            <ProgressBar
              :max="item.cost"
              :value="item.moneyCollected"
              suffix="P."
            />
          </div>
        </div>
        <div class="mb-2">
          <TagBadge v-for="tag in item.tags" :key="tag" :tag="tag"/>
        </div>
        <hr/>
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <ItemCardOpenButton :name="item.name" :link="item.link"/>
            <ImageButton :name="item.name" :link="item.imageLink"/>
            <b-button
              v-show="item.donatelink"
              :href="item.donatelink"
              class="ml-2" target="_blank" size="sm" variant="warning"
            >
              Пожертвовать
              <b-icon icon="box-arrow-up-right"/>
            </b-button>
          </div>
          <div>
            <span class="text-muted">{{ createdAtStr }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TagBadge from "@/components/TagBadge.vue";
import ItemCardOpenButton from "@/components/UserWishlist/ItemCardOpenButton.vue";
import ImageButton from "@/components/ImageButton.vue";
import dateUtils from "@/js/utils/DateUtils";
import dayjs from "dayjs";
import {Component, Prop, Vue} from "vue-property-decorator";
import ProgressBar from "@/components/ProgressBar.vue";

@Component<ItemCard>({
  name: "ItemCard",
  components: { ProgressBar, TagBadge, ItemCardOpenButton, ImageButton }
})
export default class ItemCard extends Vue {
  @Prop()
  item: any | null
  @Prop()
  editable!: boolean

  tryRemove() {
    if (confirm("Удалить желание?")) {
      this.$emit("remove");
    }
  }

  get createdAtStr() {
    let date = this.item.createdAt ? dayjs(new Date(this.item.createdAt.seconds * 1000)) : null;
    if (!date) return "";
    return dateUtils.displayStringOf(date)
  }

}
</script>

<style>
.overflow-trimmed {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
