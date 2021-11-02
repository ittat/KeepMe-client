
<script setup>
import { onMounted, provide } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import http from "@http"
import Card from "@components/Card.vue"
import mitt from "@mitt"
provide("showheader", false)
provide("showfooter", false)
const store = useStore()
const router = useRouter()

onMounted(async () => {
    await store.dispatch("removeAllPosts")

    const res = await http.get('feeds/start=0/length=20', {})
    if (res.data.code == 105) {
        const feeds = res.data.data;
        for (let i = 0; i < feeds.length; i++) {
            store.commit('insortPidName', 'post-' + feeds[i].postId)
        }
        mitt.emit('alertOK', 'Updated!')
        store.commit('closeCardbyPidName', 'system-load')
    } else {
        console.log(res.data);
        mitt.emit('alertWarn', 'Error!')
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