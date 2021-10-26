<script setup>
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"
import { useRoute } from "vue-router"
import http from "@http"
import dectime from "@utils/utils.js"
import { onMounted, provide, reactive } from "vue"
import { useStore } from "vuex"

const store = useStore()


provide("showheader", true)
provide("showfooter", false)
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
    }
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
    postData.postResoure.img = res.data.data.img == "data:," ? null: res.data.data.img
}

onMounted(async () => {
    console.log("mounted")
    updatePost()
})

const toUserInfo = (e) => {
    store.commit('toPidName', `user-${postData.userId}`)
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
    </Card>
</template>


<style scoped>
img {
    margin-right: 2rem;
    margin-left: 2rem;
    /* padding: 1rem; */
}
</style>