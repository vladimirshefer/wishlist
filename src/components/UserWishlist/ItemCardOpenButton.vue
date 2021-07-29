<template>
  <div>
    <b-button
      v-if="link"
      :href="link"
      target="_blank"
      size="sm"
      variant="primary"
    >
      Открыть
      <b-icon icon="box-arrow-up-right"/>
    </b-button>
    <b-button
      v-else
      :href="searchLink"
      target="_blank"
      size="sm"
      variant="primary"
    >
      <b-icon icon="google"/>
      Поиск
    </b-button>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component<ItemCardOpenButton>({
  name: "ItemCardOpenButton"
})
export default class ItemCardOpenButton extends Vue {
  @Prop()
  name!: string

  @Prop()
  link!: string | null

  get searchLink() {
    return "https://www.google.com/search?q=" + this.name; // TODO sanitize
  }
}
</script>

<style scoped>

</style>
