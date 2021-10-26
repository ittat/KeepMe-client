import { createWebHistory, createWebHashHistory, createRouter } from "vue-router"

import loadCard from "@views/loadCard.vue"
import logIn from "@views/logIn.vue"
import newPost from "@views/newPost.vue"
import postDetail from "@views/postDetail.vue"
import userInfo from "@views/userInfo.vue"

import store from "@/store"

const routes = [
    {
        path: "/",
        component: () => { store.commit('toPidName', 'system-load') }
    },
    {
        path: "/system-login",
        component: () => { store.commit('toPidName', 'system-login') }
    },
    {   
        path: "/system-newpost",
        component: () => { store.commit('toPidName', 'system-newpost') }
    }
]


export default createRouter({
    history: createWebHistory(),
    routes: routes
})