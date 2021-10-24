<template>
    <div id="warper">
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { watch, computed } from "@vue/runtime-core";
import http from "@http";


const store = useStore()
const router = useRouter()

http.get('feeds/start=0/length=4', {}).then(res => {
    const feeds = res.data.data;
    for (let i = 0; i < feeds.length; i++) {
        store.commit('insortPid', 'post-' + feeds[i].postId)
    }
})


</script>

<style>
#warper {
    background-color: lawngreen;
    margin-right: 17px;
    height: calc(100vh - 15%);
    margin-top: 14px;
    margin-left: 8px;
}
</style>