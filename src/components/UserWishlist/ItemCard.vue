<template>
  <div class="card">
    <div class="card-body">
      <div class="wishlist-item-card"></div>
      <h5 class="card-title">
        {{ item.name }}
        <b-dropdown v-if="editable" variant="light" size="sm">
          <b-dropdown-item @click="$emit('edit')">Изменить</b-dropdown-item>
          <b-dropdown-item @click="tryRemove">Удалить</b-dropdown-item>
        </b-dropdown>
      </h5>
      <p>
        <b>{{ item.cost }} ₽.</b>
      </p>
      <div class="mb-2">
        <TagBadge v-for="tag in item.tags" :key="tag" :tag="tag" />
      </div>

      <div class="card-descriprion">
        <p style="white-space: pre-line">{{ item.description }}</p>
      </div>

      <b-button
        v-if="item.link"
        :href="item.link"
        class="card-button"
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
        class="card-button"
        target="_blank"
        size="sm"
        variant="primary"
      >
        <b-icon icon="google" />
        Поиск
      </b-button>
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
  },
};
</script>

