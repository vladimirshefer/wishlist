import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
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

new Vue({
  render: h => h(App),
}).$mount('#app')
