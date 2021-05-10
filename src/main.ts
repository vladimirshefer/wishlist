import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {Store} from "vuex";

require("@/init/bootstrap")
require("@/init/firebase")
require("@/init/vue")
require("@/init/dayjs")

let router: VueRouter = require("@/init/router");
let store: Store<any> = require("@/store");

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
