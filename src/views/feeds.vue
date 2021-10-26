<template>
    <div
        id="warper"
        class="d-flex overflow-hidden"
        @touchstart="onFeedsTouchDown"
        @touchmove="onFeedsTouchMove"
        @touchend="onFeedsTouchEnd"
    >
        <div id="cards" class="d-flex">
            <div
                v-for="pid in store.state.pids"
                v-bind:key="pid"
                class="d-inline-flex"
                style="width:100vw"
            >
                <postDetail v-if="pid.includes('post-')" :postId="pid.replace('post-', '')"></postDetail>
                <userInfo v-else-if="pid.includes('user-')" :userId="pid.replace('user-', '')"></userInfo>
                <newPost v-else-if="pid.includes('system-newpost')"></newPost>
                <logIn v-else-if="pid.includes('system-login')"></logIn>
                <loadCard v-else></loadCard>
            </div>
        </div>
    </div>
</template>

<script setup>

import loadCard from "@views/loadCard.vue"
import logIn from "@views/logIn.vue"
import newPost from "@views/newPost.vue"
import postDetail from "@views/postDetail.vue"
import userInfo from "@views/userInfo.vue"
import { useStore } from "vuex"
import http from "@http"
import { onMounted, watch } from "@vue/runtime-core"
import { bind, clear } from 'size-sensor';



const store = useStore()

// 卡片滚动
let startX = 0 // touch event 的初始 x 坐标
let cardCount = store.state.pids.length // 卡片数量
let activeCard = 0 // warper 的滑动距离
let fingerTouch = false // 是否为滑动

// 动态更新卡片数量
// Notes: 只能监听store的简单类型变量 activePid
// 因为复杂类型是指针存放
watch(() => store.state.activePid, (New, Old) => {
    cardCount = store.state.pids.length
    // animate(-activeCard * (100 / cardCount))
    activeCard = New
    animate(-New * (100 / cardCount))

})


const animate = (direct) => {
    requestAnimationFrame(() => {
        if (fingerTouch) {
            document.getElementById('cards').style = "transform: translateX(" + direct + "%);"
        } else {
            document.getElementById('cards').style = "transform: translateX(" + direct + "%);transition: transform 0.3s ease-in-out;";
        }
    })

}

const onFeedsTouchDown = (e) => {
    startX = e.touches[0].clientX;
    fingerTouch = false;
}

const onFeedsTouchMove = (e) => {
    if (Math.abs(startX - e.touches[0].clientX) > 100) {
        animate(-(activeCard + ((startX - e.touches[0].clientX) / window.innerWidth)) * (100 / cardCount));

        fingerTouch = true;
    }
}

const onFeedsTouchEnd = (e) => {
    if (fingerTouch) {
        fingerTouch = false;
        let Direct = startX - e.changedTouches[0].clientX > 0 ? 0 : 1
        if (activeCard == 0 && Direct == 1) {
            // 第 0 页 右滑
            activeCard = 0;
            animate(-activeCard * (100 / cardCount))
        } else if (activeCard == cardCount - 1 && Direct == 0) {
            // 最后页 左滑
            animate(-activeCard * (100 / cardCount))
        } else {
            //其他情况
            activeCard += startX - e.changedTouches[0].clientX > 0 ? 1 : -1;
            store.commit('setActivePid', activeCard)
        }
    }
}


onMounted(() => {

    // bind the event on element, will get the `unbind` function
    const unbindCards = bind(document.getElementById("cards"), element => {
        cardCount = store.state.pids.length
        animate(-store.state.activePid * (100 / cardCount))
    });
})



</script>


<style>
#warper {
    /* background-color: lawngreen; */
    /* margin-right: 17px; */
    height: calc(100vh - 15%);
    margin-top: 14px;
    /* margin-left: 8px; */
    /* box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.2), 3px 3px 0 0 #f6f6f6,
        5px 3px 8px 2px rgba(0, 0, 0, 0.2), 7px 6px 0 0 #f6f6f6,
        9px 6px 8px 2px rgba(0, 0, 0, 0.2), 10px 9px 0 0 #f6f6f6,
        15px 9px 8px 2px rgba(0, 0, 0, 0.2); */
}
</style>