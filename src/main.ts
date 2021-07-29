import Vue from 'vue'
import App from './App.vue'
import "@/assets/styles.css"
import router from "@/init/router";
import store from "@/store";

require("@/init/bootstrap")
require("@/init/firebase")
require("@/init/vue")
require("@/init/dayjs")

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
