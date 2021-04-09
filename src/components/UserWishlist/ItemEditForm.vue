<template>
  <div class="card">
    <div class="card-body">
      <b-form @submit="submit($event)" @reset="cancel">
        <b-form-group
            id="input-group-name"
            label="Что я хочу:"
            label-for="input-name">
          <b-form-input
              id="input-name"
              v-model="form.name"
              placeholder="Новая куртка"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-cost"
            label="Стоимость:"
            label-for="input-cost"
            description=""
        >
          <b-form-input
              id="input-cost"
              v-model="form.cost"
              type="number"
              min="0"
              step="0.01"
              placeholder="10000.0"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-link"
            label="Ссылка на товар:"
            label-for="input-link">
          <b-form-input
              id="input-link"
              v-model="form.link"
              type="url"
              placeholder="https://..."
          ></b-form-input>
        </b-form-group>


        <b-form-group
            id="input-group-tags"
            label="Теги:"
            label-for="input-tags">
          <div class="mb-2">
            <TagBadge v-for="(tag) in form.tags" :key="tag" :tag="tag"
                      clickable
                      @click="removeTag(tag)"/>
          </div>
          <b-input-group>
            <b-form-input
                placeholder="Одежда"
                v-model="tag"
                @keydown.enter="addTag"
            ></b-form-input>
            <b-button variant="outline-primary" @click="addTag">Добавить</b-button>
          </b-input-group>
        </b-form-group>

        <b-button class="mr-1" type="submit" size="sm" variant="primary">Сохранить</b-button>
        <b-button class="mr-1" type="reset" size="sm" variant="danger">Отмена</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import TagBadge from "@/components/TagBadge";

export default {
  name: "ItemEditForm",
  components: {TagBadge},
  props: {
    item: {type: Object, required: true}
  },
  data() {
    return {
      // non-reactive copy to prevent changes in original item until submit
      form: {
        name: "",
        cost: 0,
        link: "",
        tags: [],
      },
      tag: ""
    }
  },
  methods: {
    reset() {
      this.form = JSON.parse(JSON.stringify(this.item))
    },
    submit($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.$emit("submit", this.getResultingObject())
      this.reset();
    },
    cancel() {
      this.$emit("cancel")
      this.reset();
    },
    getResultingObject() {
      return Object.assign({}, this.item, this.form)
    },
    addTag(event) {
      event.preventDefault();

      if (!this.form.tags) {
        this.form.tags = []
      }

      if (!!this.tag && !this.form.tags.includes(this.tag)) {
        this.form.tags.push(this.tag);
      }

      this.tag = "";
    },
    removeTag(tag) {
      this.form.tags = this.form.tags.filter(it => it !== tag)
    }
  },
  created() {
    this.reset()
  }
}
</script>
