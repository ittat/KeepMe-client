<script setup>
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"
import { useRoute } from "vue-router"
import http from "@http"
import dectime from "@utils/utils.js"
import { onMounted, provide, reactive, getCurrentInstance, ref } from "vue"
import { useStore } from "vuex"
import qs from "qs"

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

const route = useRoute()

const commitData = reactive({})

const newCommit = ref("")

const updatePost = async () => {
    const res = await http.get(`/post/${props.postId}/commit`)
    console.log(res.data)
    if (res.data.code == 105) {
        commitData.value = res.data.data
    }
}

onMounted(async () => {
    console.log("mounted")
    updatePost()
})

const toUserInfo = (e) => {
    store.commit('toPidName', `user-${postData.userId}`)
}

const closeThisCommitCard = () => {
    //给父组件传值
    emit('goTo', 'postDetail')
}

const postCommit = () => {
    console.log(newCommit.value)
    if (newCommit.value.length > 0) {
        http.post(`/post/${props.postId}/commit`, qs.stringify({
            context: newCommit.value
        })).then(res => {
            console.log(res)
            updatePost()
            newCommit.value = ""
        })
    }
}

</script>



<template>
    <Card>
        <template v-slot:header>
            <div class="w-100 d-flex position-relative justify-content-center">
                <p class="h3 mb-0">Commit</p>
                <icon
                    @click="closeThisCommitCard"
                    class="position-absolute mx-0 active"
                    style="left: 0;"
                    name="close-danger"
                    iconType="svg"
                    width="1.6rem"
                />
            </div>
        </template>
        <template v-slot:body>
            <div class="d-flex flex-column w-100 h-100 justify-content-start">
                <ul class="list-group">
                    <li v-for="commit in commitData.value" :key="commit.id" class="list-group-item">
                        <h5 class="mb-1">{{commit.username}}</h5>
                        <small class="text-muted">{{dectime(commit.date) + ' ago'}}</small>
                        <p class="mb-1">{{ commit.context }}</p>
                    </li>
                </ul>
            </div>
        </template>
        <template v-slot:footer>
            <div class="input-group p-1">
                <input
                    type="text"
                    class="form-control"
                    placeholder="请输入评论内容"
                    v-model="newCommit"
                    @keyup.enter="postCommit"
                />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" @click="postCommit">Send</button>
                </div>
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