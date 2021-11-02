<template>
    <div class="nav-div d-flex flex-row justify-content-center align-items-center">
        <div class="nav-bar d-flex flex-row justify-content-center align-items-center">
            <!-- <icon
                @click="toPrevCard"
                class="mx-3 my-1"
                id="navleft"
                name="nav-arrow-right"
                iconType="svg"
                width="1.6rem"
            ></icon>-->
            <icon
                @click="toUserInfoCard"
                class="mx-3 my-1"
                name="user"
                iconType="svg"
                width="1.6rem"
            ></icon>
            <icon
                @click="toMessagesCard"
                class="mx-3 my-1"
                name="messages"
                iconType="svg"
                width="1.6rem"
            ></icon>
            <icon
                @click="toNewPostCard"
                class="mx-3 my-1"
                name="addpost"
                iconType="svg"
                width="2rem"
            ></icon>

            <icon
                @click="toReflashFeeds"
                class="mx-3 my-1"
                name="reflash"
                iconType="svg"
                width="1.6rem"
            ></icon>
            <icon
                @click="toSettingCard"
                class="mx-3 my-1"
                name="setting"
                iconType="svg"
                width="1.6rem"
            ></icon>
            <!-- <icon
                @click="toNextCard"
                class="mx-3 my-1"
                name="nav-arrow-right"
                iconType="svg"
                width="1.6rem"
            ></icon>-->
        </div>
    </div>
</template>

<script setup>

import { useStore } from "vuex"
import { useRouter } from "vue-router"


const store = useStore()
const router = useRouter()

const toPrevCard = () => {
    store.commit('toPrevPid')
}

const toNextCard = () => {
    store.commit('toNextPid')
}

const toNewPostCard = () => {
    if (store.state.token) {
        store.commit('toPidName', 'system-newpost')
    } else {
        store.commit('toPidName', `system-login`)
    }
}

const toUserInfoCard = () => {
    if (store.state.token) {
        store.commit('toPidName', `user-${store.state.userId}`)
    } else {
        store.commit('toPidName', `system-login`)
    }
}

const toReflashFeeds = () => {
    store.commit('toPidName', 'system-load')
}

const toSettingCard = () => {
    store.commit('toPidName', 'system-setting')
}

const toMessagesCard = () => {
    if (store.state.token) {
        store.commit('toPidName', 'system-messages')
    } else {
        store.commit('toPidName', `system-login`)
    }
}
</script>

<style scoped>
.nav-div {
    background-color: rgba(255, 255, 255, 0.007);
    padding: 0;
    /* height: inherit; */
    height: calc(100vh - 85%);
    border-radius: 0 0 1rem 1rem;
}

.nav-bar {
    border-radius: 20px;
    border-width: 2px;
    border: rgb(197, 197, 197) solid;
    box-shadow: 0 0 4px 1px darkgray;
    background-color: aliceblue;
}

#navleft {
    transform: rotate(180deg);
}

.line-column {
    width: 2px;
    background-color: darkgray;
    height: inherit;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 0;
}

img:active {
    /* background-color: rgb(180, 180, 209); */
    transform: translate(2px, 2px);
}
</style>