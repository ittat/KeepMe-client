<script setup>
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"
import { useRoute } from "vue-router"
import http from "@http"
import { onMounted, provide, reactive, getCurrentInstance, ref } from "vue"
import { useStore } from "vuex"
import mitt from "@mitt"

const store = useStore()

provide("showheader", true)
provide("showfooter", false)
provide("bodysrcoll", true)


const route = useRoute()

const commitData = reactive({})

const newCommit = ref("")

const closeThisCommitCard = () => {
    store.commit('closeActivePid')
}

const getUserMessages = async () => {
    const res = await http.get(`/user/${store.state.userId}/meassages`)
    console.log(res.data);
    // if (res.data.code == 105) {
    //     mitt.emit('alertOK', 'OK')
    // }
}

getUserMessages()

</script>



<template>
    <Card>
        <template v-slot:header>
            <div class="w-100 d-flex position-relative justify-content-center">
                <p class="h3 mb-0">Message</p>
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
                    <li class="list-group-item list-group-item-action">关于</li>
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