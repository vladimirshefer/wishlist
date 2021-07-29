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
        <div class="row position-relative mt-2 mb-3">
          <div class="col-12 col-lg-6">
            <b-progress v-show="item.isMoneyCollectingEnabled"
              :title="moneyCollectedProgressString"
              max="100"
              height="15px"
            >
              <b-progress-bar :value="moneyCollectedPercent" :variant="isMoneyCollectingCompleted?'danger':'primary'">
                <span>
                  <strong> {{ moneyCollectedProgressString }} </strong>
                </span>
              </b-progress-bar>
            </b-progress>
          </div>
        </div>
        <div class="mb-2">
          <TagBadge v-for="tag in item.tags" :key="tag" :tag="tag"/>
        </div>
        <hr/>
        <ItemCardOpenButton :name="item.name" :link="item.link"/>
      </div>
    </div>
  </div>
</template>

<script>
import TagBadge from "@/components/TagBadge";
import ItemCardOpenButton from "@/components/UserWishlist/ItemCardOpenButton";

export default {
  name: "ItemCard",
  components: {ItemCardOpenButton, TagBadge},
  props: {
    item: {type: Object, required: true},
    editable: {type: Boolean, required: false, default: false},
  },
  methods: {
    tryRemove() {
      if (confirm("Удалить желание?")) {
        this.$emit("remove");
      }
    },
  },
  computed: {
    moneyCollectedPercent() {
      return ((this.item.moneyCollected || 0) / this.item.cost) * 100 || 0;
    },
    moneyCollectedProgressString() {
      return (
        (this.item.moneyCollected || 0) +
        " / " +
        this.item.cost +
        " p. (" +
        this.moneyCollectedPercent.toFixed(2) +
        "%)"
      );
    },
    isMoneyCollectingCompleted() {
      return this.item.moneyCollected?.doubleValue >= this.item.cost?.doubleValue
    }
  },
};
</script>

<style>
.overflow-trimmed {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
