import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import App from './App.vue'
import Home from '@/components/pages/Home'
import User from "@/components/pages/User";

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyACtgZ3RVsV4asdNWLtlbTtbrb-BocsXjk",
  authDomain: "wishlist-for-friends.firebaseapp.com",
  projectId: "wishlist-for-friends",
  storageBucket: "wishlist-for-friends.appspot.com",
  messagingSenderId: "491027786294",
  appId: "1:491027786294:web:ed36804351917d5052c697"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/user/:userId', component: User },
]

const router = new VueRouter({
  // mode: 'history', // Unsupported by GitHub pages
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
