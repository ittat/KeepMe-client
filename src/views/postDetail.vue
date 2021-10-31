<script setup>
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"
import { useRoute } from "vue-router"
import http from "@http"
import dectime from "@utils/utils.js"
import { onMounted, provide, reactive, getCurrentInstance } from "vue"
import { useStore } from "vuex"
import mitt from "@mitt"

const store = useStore()
const { emit } = getCurrentInstance()


provide("showheader", true)
provide("showfooter", true)
provide("bodysrcoll", true)

const props = defineProps({
    postId: {
        type: String,
        required: true
    }
})

const postData = reactive({
    userId: "",
    username: "KeepMe",
    userImg: null,
    postDate: "1 days ago",
    postContext: "I love KeepMe ...",
    postResoure: {
        img: null,
        video: null
    },
    commitSum: '',
    likeSum: '',
})

const route = useRoute()

const updatePost = async () => {
    const res = await http.get(`/post/${props.postId}`)
    console.log(res.data)
    postData.userId = res.data.data.userId
    postData.username = res.data.data.username
    postData.postContext = res.data.data.context
    postData.postDate = dectime(res.data.data.date) + ' ago'
    postData.userImg = res.data.data.userImg
    postData.commitSum = '' + res.data.data.commits_sum
    postData.likeSum = '' + res.data.data.like_sum
    postData.postResoure.img = res.data.data.img == "data:," ? null : res.data.data.img
}

onMounted(async () => {
    updatePost()
})

const toUserInfo = (e) => {
    store.commit('toPidName', `user-${postData.userId}`)
}

const goTo = (path) => {
    if (store.getters.getToken) {
        emit("goTo", path)
    } else {
        mitt.emit('alertWarn', '未登陆!')
    }
}

const reverseLike = async () => {
    if (store.getters.getToken) {
        const res = await http.post(`/post/${props.postId}/like/add`, {})
        if (res.data.code == 105) {
            updatePost()
        }
    } else {
        mitt.emit('alertWarn', '未登陆!')
    }
}
</script>



<template>
    <Card>
        <template v-slot:header>
            <div class="w-100 d-flex justify-content-between">
                <div class="d-flex flex-row text-start align-items-center">
                    <user-img
                        @click="toUserInfo"
                        class="mt-1 mb-1"
                        :imgsrc="postData.userImg"
                        color="#000"
                        size="3"
                    />
                    <div class="d-flex flex-column mx-3">
                        <span class="fw-bolder fs-4">{{ postData.username }}</span>
                        <span class="fw-lighter fs-6">{{ postData.postDate }}</span>
                    </div>
                </div>

                <icon name="favourite" iconType="svg" width="1.5rem" class="mx-0 mt-4" />
            </div>
        </template>
        <template v-slot:body>
            <div class="d-flex flex-column w-100 h-100 justify-content-center">
                <span class="text-wrap text-center fs-5 lh-5">{{ postData.postContext }}</span>

                <hr v-if="postData.postResoure.img || postData.postResoure.video" />
                <img
                    v-if="postData.postResoure.img"
                    :src="postData.postResoure.img"
                    style="height: 60vw;"
                />
                <video
                    v-if="postData.postResoure.video"
                    class="w-100"
                    src="/src/assert/icons/movie.mp4"
                    controls
                ></video>
                <hr v-if="postData.postResoure.img || postData.postResoure.video" />
            </div>
        </template>
        <template v-slot:footer>
            <div class="d-flex justify-content-around align-items-center">
                <i class="bi bi-chat-square-dots fs-2" @click="goTo('postCommit')">
                    <span class="fs-3 mx-2">{{ postData.commitSum }}</span>
                </i>
                <i class="bi bi-hand-thumbs-up fs-2" @click="reverseLike">
                    <span class="fs-3 mx-2">{{ postData.likeSum }}</span>
                </i>
                <i class="bi bi-box-arrow-up-right fs-2"></i>
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