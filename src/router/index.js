import { createWebHistory, createWebHashHistory, createRouter } from "vue-router"

import loadCard from "@views/loadCard.vue"
import logIn from "@views/logIn.vue"
import newPost from "@views/newPost.vue"
import postDetail from "@views/postDetail.vue"
import userInfo from "@views/userInfo.vue"


const routes = [
    {
        path: "/",
        component: loadCard
    },
    {
        path: "/system-login",
        component: logIn
    },
    {   
        path: "/system-newpost",
        component: newPost
    },
    {
        path: "/postDetail/:id(\\d+)",
        component: postDetail
    },
    {
        path: "/userInfo/:id(\\d+)",
        component: userInfo
    }
]



export default createRouter({
    history: createWebHistory(),
    routes: routes
})