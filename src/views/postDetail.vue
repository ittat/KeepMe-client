<script setup>
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"
import { useRoute } from "vue-router"
import http from "@http"
import dectime  from "@utils/utils.js"
import { onMounted, provide, reactive,watch } from "@vue/runtime-core"

provide("showheader", true)
provide("showfooter", false)
provide("bodysrcoll", true)

const postData = reactive({
    username: "KeepMe",
    userimg: null,
    postDate: "1 days ago",
    postContext: "I love KeepMe ...",
    postResoure: {
        img: null,
        video: null
    }
})

const route = useRoute()

const updatePost = async () =>{
    const res = await http.get(`/post/${route.params.id}`)
    console.log(res.data)
    postData.username = res.data.data.username
    postData.postContext = res.data.data.context
    postData.postDate = dectime(res.data.data.date) + ' ago'
}

onMounted(async () => {
    console.log("mounted")
    updatePost()
})

watch(() => route.path, (n, o) => {
    if (n.includes("/post/") && n !== o) {
        console.log('post: '+ n + ' ==> ' + o);
        updatePost()
    }
        
})


</script>



<template>
    <Card>
        <template v-slot:header>
            <div class="w-100 d-flex justify-content-between">
                <div class="d-flex flex-row text-start align-items-center">
                    <user-img class="mt-1 mb-1" name="head-funingdady" color="#000" size="3" />
                    <div class="d-flex flex-column mx-3">
                        <span class="fw-bolder fs-4">{{ postData.username }}</span>
                        <span class="fw-lighter fs-6">{{ postData.postDate }}</span>
                    </div>
                </div>

                <icon name="favourite" iconType="svg" width="1.5rem" class="mx-0" />
            </div>
        </template>
        <template v-slot:body>
            <div class="d-flex flex-column w-100 h-100 justify-content-center">
                <span class="text-wrap text-center fs-5 lh-5">{{ postData.postContext }}</span>

                <hr v-if="postData.postResoure.img || postData.postResoure.video" />
                <icon
                    v-if="postData.postResoure.img"
                    name="img-error"
                    iconType="png"
                    width="inherit"
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