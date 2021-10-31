<template>
  <div id="main" class="mx-3 switchtop" style="width:100%">
    <div class="card card-shadow" :class="{ 'card-full': true }">
      <div
        v-show="hasHeader"
        class="card-header text-center"
        @touchstart="onFeedsTouchDown"
        @touchmove="onFeedsTouchMove"
        @touchend="onFeedsTouchEnd"
      >
        <slot name="header"></slot>
      </div>

      <div class="card-body" :class="{ 'body-scroll': bodySrcoll }">
        <slot name="body"></slot>
      </div>
      <div v-show="hasFooter" class="card-footer text-muted">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, watch, computed, ref, onMounted } from "vue"

import { useStore } from "vuex"

const hasHeader = inject("showheader") || false
const hasFooter = inject("showfooter") || false
const bodySrcoll = inject("bodysrcoll") || false
const store = useStore()
const switchright = ref(false)
const switchleft = ref(false)

const isfull = computed(() => {
  return !(hasHeader || hasFooter)
})


onMounted(() => {
  // watch(() => store.state.activePid, (newpid, oldpid) => {
  //   console.log('activePid change: ' + oldpid + ' ==> ' + newpid)
  //   const cardDom = document.getElementById('main')
  //   if (newpid > oldpid) {
  //     cardDom.classList.add('switchright')
  //   } else {
  //     cardDom.classList.add('switchleft')
  //   }
  //   setTimeout(() => {
  //     cardDom.classList.remove('switchright')
  //     cardDom.classList.remove('switchleft')
  //   }, 300);
  // })
})


let startY = 0
let fingerTouch = false


const onFeedsTouchDown = (e) => {
  startY = e.touches[0].clientY;
  fingerTouch = false;
}

const onFeedsTouchMove = (e) => {
    if (Math.abs(startY - e.touches[0].clientY) > 45) {
        fingerTouch = true;
    }
}

const onFeedsTouchEnd = (e) => {
  console.log(fingerTouch);
  if (fingerTouch) {
    fingerTouch = false;
      store.commit('closeActivePid')
    }
}



</script>

<style scoped>
#main {
  background-color: #fbfbfb;
  border: rgba(213, 213, 213, 0.24);
  border-radius: 0.51rem;
  border-style: solid;
  border-width: 0.2rem;
  height: 100%;
}

.switchright {
  position: relative;
  animation: switchright 0.3s ease-in-out;
}
.switchleft {
  position: relative;
  animation: switchleft 0.3s ease-in-out;
}

.switchtop {
  position: relative;
  animation: switchtop 0.3s ease-in-out;
}

@keyframes switchright {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes switchleft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes switchtop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.card-shadow {
  /* box-shadow: 
      0 0px 8px 2px rgba(0, 0, 0, 0.2), 
      3px 3px 0 0 #f6f6f6, 
      5px 3px 8px 2px rgba(0, 0, 0, 0.2), 
      7px 6px 0 0 #f6f6f6, 
      9px 6px 8px 2px rgba(0, 0, 0, 0.2),
      10px 9px 0 0 #f6f6f6,
      15px 9px 8px 2px rgba(0, 0, 0, 0.2)
    ; */
}

.card-full {
  height: inherit;
}

.body-scroll {
  overflow-y: auto;
}

.card-footer {
  /* height: inherit; */
  /* overflow-y: auto; */
}
</style>