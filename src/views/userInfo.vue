<script setup>
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"
import { useRoute } from "vue-router"
import { provide, onMounted, reactive, ref } from "@vue/runtime-core"
import http from "@http"
import { useStore } from "vuex"
import mitt from "@mitt"
import qs from "qs"

provide("showheader", true)
provide("showfooter", false)
provide("bodysrcoll", true)

const route = useRoute()
const store = useStore()

const props = defineProps({
    userId: {
        type: String,
        required: true
    }
})

const userData = reactive({
    username: "KeepMe",
    desc: "I love KeepMe ...",
    userImg: "https://avatars2.githubusercontent.com/u/8186664?s=460&v=4",
    isfollow: false
})

//导航页面
const infoPageNav = ref([1, 0, 0])

/*
* param - pageName - 导航页名字：info | post | followList 
* return - void
*/
const toInfoPage = (pageName) => {
    if (pageName === "infos") {
        infoPageNav.value = [1, 0, 0]
    } else if (pageName === "posts") {
        infoPageNav.value = [0, 1, 0]
    } else {
        infoPageNav.value = [0, 0, 1]
    }
    console.log(infoPageNav.value)
}

const updateUserInfo = async () => {
    const res = await http.get(`/user/${props.userId}`)
    if (res.data.code == 105) {
        userData.username = res.data.data.username
        userData.desc = res.data.data.desc
        userData.userImg = res.data.data.userImg
        userData.isfollow = res.data.data.isfollow
    }
}


const follow = async (action) => {
    let res = null
    if (action === "add") {
        res = await http.get(`/user/${props.userId}/follow`)
    } else {
        res = await http.get(`/user/${props.userId}/unfollow`)
    }
    if (res.data.code == 105) {
        updateUserInfo()
        mitt.emit('alertOK', 'OK')
    }
}
onMounted(async () => {
    updateUserInfo()
    if (userData.username === store.state.username) toInfoPage('posts')

})


</script>



<template>
    <Card>
        <template v-slot:header>
            <div class="w-100 d-flex flex-column align-items-center justify-content-center">
                <user-img class="mt-4 mb-1" :imgsrc="userData.userImg" color="#000" size="3" />
                <span class="fw-bolder fs-1">{{ userData.username }}</span>
                <span class="fw-lighter fs-6">{{ userData.desc }}</span>
            </div>
            <hr />
            <div class="mb-2 d-flex flex-row align-items-center justify-content-center">
                <icon
                    v-if="userData.username != store.state.username"
                    name="about"
                    iconType="svg"
                    width="1.5rem"
                    class="active"
                    @click="toInfoPage('infos')"
                />
                <icon
                    name="posts"
                    class="active"
                    iconType="svg"
                    width="1.5rem"
                    @click="toInfoPage('posts')"
                />

                <icon
                    v-if="userData.username == store.state.username"
                    name="friend"
                    iconType="svg"
                    width="1.5rem"
                    class="active"
                    @click="toInfoPage('follower')"
                />
                <icon
                    v-else-if="userData.isfollow"
                    name="followed"
                    class="active"
                    iconType="svg"
                    width="1.5rem"
                    @click="follow('remove')"
                />
                <icon
                    v-else
                    name="follow"
                    class="active"
                    iconType="svg"
                    width="1.5rem"
                    @click="follow('add')"
                />
            </div>
        </template>
        <template v-slot:body>
            <!-- todo -->
            <div v-show="infoPageNav[0]" id="info" class="w-100">
                <ul class="list-group">
                    <li class="list-group-item">性别： 男</li>
                    <li class="list-group-item">地区： 快乐星球 A302</li>
                    <li class="list-group-item">签名： 普普通通测试员</li>
                </ul>
            </div>

            <div v-show="infoPageNav[1]" id="postsList" class="mx-4">
                <ul class="list-group">
                    <li class="list-group-item">实现中 。。。</li>
                </ul>
            </div>

            <div v-show="infoPageNav[2]" id="followList" class="mx-4">
                <ul class="list-group">
                    <li class="list-group-item">实现中 。。。</li>
                </ul>
            </div>
        </template>
    </Card>
</template>


<style scoped>
img {
    margin-right: 2rem;
    margin-left: 2rem;
    /* padding: 1rem; */
}
</style>