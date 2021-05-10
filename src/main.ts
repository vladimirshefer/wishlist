import Vue from 'vue'
import App from './App.vue'

require("@/init/bootstrap")
require("@/init/firebase")
require("@/init/vue")
require("@/init/dayjs")

import router from "@/init/router";
import store from "@/store";

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
