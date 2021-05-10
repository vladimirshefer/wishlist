require("@/init/bootstrap")
require("@/init/firebase")
require("@/init/vue")
require("@/init/dayjs")

import Vue from 'vue'
import App from './App.vue'
import store from "@/store"
import router from "@/init/router";

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
