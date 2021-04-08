<template>
  <div>
    <h3>Добавить желание</h3>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="item-add-form">
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

       <b-badge pill class="mr-2 p-2" v-for="(tag, index) in computedTags" :key="index" :variant="getColorForTag(tag)">{{tag}}</b-badge>

       <b-form-group
          id="input-group-tags"
          label="Теги:"
          label-for="input-tags">
          <div class="d-flex flex-row justify-content-between">
              <b-form-input
                id="input-tags"
                class="w-75"
                v-model="tag"
                @keydown.enter="addTag"
                placeholder="Одежда"
              ></b-form-input>
              <b-button variant="outline-primary" @click="addTag">Добавить тег</b-button>
          </div>
      </b-form-group>

      <b-form-group id="input-group-private">
          <b-form-checkbox v-model="form.private">Приватный</b-form-checkbox>
      </b-form-group>

      <b-button class="mr-1" type="submit" variant="outline-primary">Добавить</b-button>
      <b-button class="mr-1" type="reset" variant="outline-danger">Сброс</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "AddForm",
  data() {
    return {
      form: {
        name: "",
        cost: "",
        link: "",
        tags: [],
        private: false
      },
      tag: "",
      colors: ["primary", "secondary", "succes", "danger", "warning", "info", "dark"],
      show: true
    }
  },
  computed: {
    computedTags() {
      return this.form.tags;
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.$emit("submit", this.form)
      console.log(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.name = ""
      this.form.cost = ""
      this.form.link = ""
      this.form.tags = [];
      this.form.private = false;

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    getColorForTag(value) {
      return this.colors[value.charCodeAt(0) % this.colors.length];
    },
    addTag(event) {
      event.preventDefault();

      if (!this.tag) {
       const repeatTag = this.form.tags.filter(tag => tag === this.tag);

       if (repeatTag.length === 0) {
          this.form.tags.push(this.tag);
        }
      }

      this.tag = "";
    },
  }
}
</script>

<style scoped>
</style>
