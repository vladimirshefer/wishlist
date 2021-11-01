<template>
  <b-progress
    :title="title"
    max="100"
    height="15px"
    class="position-relative"
    style="background: darkgray"
  >
    <b-progress-bar :value="percent" :variant="variant"/>
    <span class="justify-content-center d-flex position-absolute w-100 h-100 align-items-center">
      <strong style="color: white">{{ title }} {{ suffix }}</strong>
    </span>
  </b-progress>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component<ProgressBar>({
  name: "ProgressBar"
})
export default class ProgressBar extends Vue {
  @Prop()
  value!: string | number | null

  @Prop()
  max!: string | number | null

  @Prop({default: ""})
  suffix!: string

  get valueAsDouble(): number {
    if (!this.value) return 0;
    return +this.value;
  }

  get maxAsDouble(): number {
    if (!this.max) return 0;
    return +this.max;
  }

  get percent(): number {
    if (!this.maxAsDouble) return 0;
    return this.valueAsDouble / this.maxAsDouble * 100
  }

  get variant(): string {
    if (!this.maxAsDouble) return "danger";
    return (this.valueAsDouble >= this.maxAsDouble) ? 'danger' : 'primary'
  }

  get title(): string {
    if (!this.maxAsDouble) return this.valueAsDouble + ""
    if (this.percent == 0) return this.maxAsDouble + ""
    return this.valueAsDouble + " / " + this.maxAsDouble
  }

}
</script>

<style scoped>

.banner-text {
  font-size: 40px;
}

</style>
