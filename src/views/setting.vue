<script setup>
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"
import { useRoute } from "vue-router"
import http from "@http"
import { onMounted, provide, reactive, getCurrentInstance, ref } from "vue"
import { useStore } from "vuex"
import mitt from "@mitt"

const store = useStore()
const { emit } = getCurrentInstance()


provide("showheader", true)
provide("showfooter", false)
provide("bodysrcoll", true)


const route = useRoute()

const commitData = reactive({})

const newCommit = ref("")

const closeThisCommitCard = () => {
    store.commit('closeActivePid')
}

const logout = async () => {
    const res = await http.get(`/user/logout`)
    console.log(res.data);
    if (res.data.code == 103) {
        mitt.emit('alertOK', 'OK')
    }
}

</script>



<template>
    <Card>
        <template v-slot:header>
            <div class="w-100 d-flex position-relative justify-content-center">
                <p class="h3 mb-0">Setting</p>
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
                    <li
                        class="list-group-item list-group-item-action"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasTop"
                        aria-controls="offcanvasTop"
                    >关于</li>
                    <li class="list-group-item list-group-item-action" @click="logout">退出登陆</li>
                </ul>
            </div>

            <div
                class="offcanvas offcanvas-top position-absolute"
                tabindex="-1"
                id="offcanvasTop"
                aria-labelledby="offcanvasTopLabel"
            >
                <div class="offcanvas-header">
                    <h5 id="offcanvasTopLabel">About KeepMe</h5>
                    <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    一个卡片式的社交设计Dome ß
                    <p class="fw-lighter">Omy</p>
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