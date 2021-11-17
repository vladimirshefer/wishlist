<template>
  <div class="row" v-if="this.user">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <b-form @submit="submit($event)" @reset="reset($event)">
            <b-form-group
              id="input-group-display-name"
              label="Отображаемое имя"
              label-for="input-display-name"
            >
              <b-form-input
                id="input-display-name"
                v-model="displayName"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-avatar-url"
              label="Ссылка на аватар"
              label-for="input-avatar-url"
            >
              <b-form-input
                id="input-avatar-url"
                v-model="avatarUrl"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-about"
              label="О себе:"
              label-for="input-about"
            >
              <textarea
                v-model="about"
                class="form-control"
                id="input-about"
                rows="3"
              ></textarea>
            </b-form-group>

            <b-button class="mr-1" type="submit" size="sm" variant="primary"
              >Сохранить</b-button
            >
            <b-button class="mr-1" type="reset" size="sm" variant="danger"
              >Сбросить</b-button
            >
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileService from "@/services/profileService"

export default {
  name: "Profile",
  data() {
    return {
      form: {
        displayName: null,
        label: null,
        about: null,
        avatarUrl: null,
      },
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    profile() {
      return this.$store.state.profile
    },
    storedProfile() {
      return {
        displayName:
          (this.profile ? this.profile.displayName : null) ||
          (this.user ? this.user.displayName : null),
        about: this.profile ? this.profile.about : null,
      }
    },
    displayName: {
      get() {
        return this.form.displayName || this.storedProfile.displayName || ""
      },
      set(value) {
        this.form.displayName = value
      },
    },
    about: {
      get() {
        if (this.form.about != null) return this.form.about
        return this.profile ? this.storedProfile.about : ""
      },
      set(value) {
        if (this.storedProfile.about === value) {
          this.form.about = null
          return
        }

        this.form.about = value
      },
    },
    avatarUrl: {
      get() {
        return this.form.avatarUrl || ""
      },
      set(value) {
        this.form.avatarUrl = value
      },
    },
  },
  methods: {
    submit(event) {
      event.preventDefault()
      event.stopPropagation()

      profileService.saveProfile({
        displayName: this.displayName,
        about: this.about,
        avatarUrl: this.avatarUrl,
      })

      this.$store.dispatch("reloadUserProfile")
    },
    reset(event) {
      event.preventDefault()
      event.stopPropagation()

      this.form = { ...this.storedProfile }
    },
  },
}
</script>

<style scoped></style>
