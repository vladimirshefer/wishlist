<template>
  <div class="card">
    <div class="card-body">
      <div class="wishlist-item-card">
        <div
          class="container-title"
          style="display: flex; align-items: flex-start"
        >
          <h5
            class="card-title"
            style="
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            "
          >
            {{ item.name }}
          </h5>

          <div class="dropdown-b-dropdown">
            <b-dropdown v-if="editable" variant="light" size="sm">
              <b-dropdown-item @click="$emit('edit')">Изменить</b-dropdown-item>
              <b-dropdown-item @click="tryRemove">Удалить</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <div>
          <p style="white-space: pre-line">{{ item.description }}</p>
        </div>
        <p>
          <b>{{ item.cost }} ₽</b>
        </p>
        <div class="mb-2">
          <TagBadge v-for="tag in item.tags" :key="tag" :tag="tag" />
        </div>

        <b-button
          v-if="item.link"
          :href="item.link"
          target="_blank"
          size="sm"
          variant="primary"
        >
          Открыть
          <b-icon icon="box-arrow-up-right" />
        </b-button>

        <b-button
          v-else
          :href="searchLink"
          target="_blank"
          size="sm"
          variant="primary"
        >
          <b-icon icon="google" />
          Поиск
        </b-button>
        <div class="status-progress">
          <p>Накоплено:</p>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              :style="{ width: progressPercent + '%' }"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagBadge from "@/components/TagBadge";

export default {
  name: "ItemCard",
  components: { TagBadge },
  props: {
    item: { type: Object, required: true },
    editable: { type: Boolean, required: false, default: false },
  },
  methods: {
    tryRemove() {
      if (confirm("Удалить желание?")) {
        this.$emit("remove");
      }
    },
  },
  computed: {
    searchLink() {
      return "https://www.google.com/search?q=" + this.item.name; // TODO sanitize
    },
    progressPercent() {
      return (this.progress / this.cost) * 100;
    },
    // styleProgress() {
    //   return {
    //     width: this.progressStatus,
    //   };
    // },
  },
};
</script>

