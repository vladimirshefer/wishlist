import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/pages/Home";
import User from "@/components/pages/User";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/user/:userId', component: User },
]

const router = new VueRouter({
    // mode: 'history', // Unsupported by GitHub pages
    routes
})

export default router
