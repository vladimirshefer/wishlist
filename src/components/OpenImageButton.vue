<template>
  <div>
    <b-button
      v-if="link"
      :href="imageLink"
      target="_blank"
      size="sm"
      variant="info"
    >
      Посмотреть
      <b-icon icon="box-arrow-up-right"/>
    </b-button>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component<OpenImageButton>({
  name: "OpenImageButton"
})
export default class OpenImageButton extends Vue {
  @Prop()
  link!: string | null

  get imageLink() {
    return this.link
  }
}
</script>

<style scoped>

</style>
