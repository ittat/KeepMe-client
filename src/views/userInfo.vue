<script setup>
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"
import { useRoute } from "vue-router"
import { provide, onMounted, reactive } from "@vue/runtime-core"
import http from "@http"

provide("showheader", true)
provide("showfooter", false)
provide("bodysrcoll", true)

const route = useRoute()

const props = defineProps({
    userId: {
        type: String,
        required: true
    }
})

const userData = reactive({
    username: "KeepMe",
    desc: "I love KeepMe ...",
    userImg: "https://avatars2.githubusercontent.com/u/8186664?s=460&v=4"
})
const updateUserInfo = async () => {
    const res = await http.get(`/user/${props.userId}`)
    console.log(res.data)
    if (res.data.code == 105) {
        userData.username = res.data.data.username
        userData.desc = res.data.data.desc
    }
}

onMounted(async () => {
    console.log("mounted")
    updateUserInfo()
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
                <icon name="at" iconType="svg" width="1.5rem" />
                <icon name="posts" iconType="svg" width="1.5rem" />
                <!-- todo -->
                <icon name="follow" iconType="svg" width="1.5rem" />
            </div>
        </template>
        <template v-slot:body>
            <div id="infos" class="d-flex flex-column align-items-start">
                <i class="bi bi-info fs-6">Infos:</i>
                <div class="d-flex flex-column align-items-start mx-4">
                    <span class>dfksdkjfsdkfjkdslfjdsl</span>
                    <span class>dfksdkjdsl</span>
                    <span class>dfsdkfjkdslfjdsl</span>
                    <span class>dfksdkjfsdkfjkdslfjdsl</span>
                </div>
            </div>
        </template>
        <template v-slot:footer></template>
    </Card>
</template>


<style scoped>
img {
    margin-right: 2rem;
    margin-left: 2rem;
    /* padding: 1rem; */
}
</style>