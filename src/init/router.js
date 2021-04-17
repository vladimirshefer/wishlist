import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/pages/Home";
import User from "@/components/pages/User";
import Profile from "@/components/pages/Profile"

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    {path: '/user/:userId', component: User},
    {path: '/profile', component: Profile},
]

const router = new VueRouter({
    // mode: 'history', // Unsupported by GitHub pages
    routes
})

export default router
