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
  apiKey: "AIzaSyBLGiP1kAHt-gM6foaONlhD0Satwe38Vlk",
  authDomain: "receipt-project-88138.firebaseapp.com",
  databaseURL: "https://receipt-project-88138.firebaseio.com",
  projectId: "receipt-project-88138",
  storageBucket: "receipt-project-88138.appspot.com",
  messagingSenderId: "970273276542",
  appId: "1:970273276542:web:c3de5d19047ce2863b8e2f"
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
