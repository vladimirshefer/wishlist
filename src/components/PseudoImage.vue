<template>
  <div class="feed-item__title crop" :style="{ background: backgroundColor }">
    <h5 class="text-center" :class="textSizeClass">
      {{ text }}
    </h5>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import StringUtils from "@/js/utils/StringUtils";

@Component<PseudoImage>({
  name: "PseudoImage"
})
export default class PseudoImage extends Vue {
  @Prop()
  text!: string

  get backgroundColor(): String {
    let randomSeed = StringUtils.hashcode(this.text) + 13;
    let pairs = [
      "rgb(51, 102, 153), rgb(51, 170, 136)",
      "rgb(51, 102, 153), rgb(136, 51, 170)",
      "rgb(102, 51, 153), rgb(51, 136, 170)",
      "rgb(102, 153, 51), rgb(51, 136, 170)",
      "rgb(153, 51, 102), rgb(51, 136, 170)",
      "rgb(153, 51, 102), rgb(170, 136, 51)",
      "rgb(153, 102, 51), rgb(136, 51, 170)",
    ];
    let pair = pairs[randomSeed % pairs.length];
    let angle = randomSeed % 360;
    return `linear-gradient(${angle}deg, ${pair})`;
  }

  get textSizeClass(): String {
    return this.text.length > 50 ? "" : "banner-text";
  }

}
</script>

<style scoped>

.banner-text {
    font-size: 40px;
}

</style>
