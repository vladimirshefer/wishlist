import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/pages/Home";
import User from "@/components/pages/User";
import Profile from "@/components/pages/Profile"
import Favorites from "@/components/pages/Favorites";
import WishPage from "@/components/pages/WishPage";

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    {path: '/user/:userId', component: User},
    {path: '/profile', component: Profile},
    {path: '/fav', component: Favorites},
    {path: '/wish/:wishId', component: WishPage},
]

const router = new VueRouter({
    // mode: 'history', // Unsupported by GitHub pages
    routes
})

export default router
