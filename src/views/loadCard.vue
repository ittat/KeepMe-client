
<script setup>
import { provide } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import http from "@http"
import Card from "@components/Card.vue"
provide("showheader", false)
provide("showfooter", false)
const store = useStore()
const router = useRouter()

//TODO
//  判断 token 跳转
http.get('feeds/start=0/length=10', {}).then(res => {
    const feeds = res.data.data;
    console.log(feeds);
    for (let i = 0; i < feeds.length; i++) {
        store.commit('insortPid', 'post-' + feeds[i].postId)
    }
})


</script>

<template>
    <Card>
        <template v-slot:body>
            <div class="d-flex flex-column align-items-center justify-content-center h-100 w-100">
                <div class="logo">
                    <p class="h1">Keep Me</p>
                </div>

                <icon class="load m-4" name="loading" iconType="svg" width="2.5rem" />
            </div>
        </template>
    </Card>
</template>


<style scoped>
.logo {
    margin: 2rem;
}

.load {
    /* 
      turn : 定义的动画名称
      1s : 动画时间
      linear : 动画以何种运行轨迹完成一个周期
      infinite :规定动画应该无限次播放
      load-rotate :一个name
    */
    animation: 2s linear infinite load-rotate;
}

@keyframes load-rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>