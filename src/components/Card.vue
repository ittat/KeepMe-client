<template>
  <div id="main" class="mx-3 switchtop" ref="mainDom">
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


let startY = 0
let curY = 0


const mainDom  = ref(null)

const offset = ref('')

const animate = (direct) => {
  requestAnimationFrame(() => {
  mainDom.value.style =  "transform: translateY(" + direct + "px);"
  })

}

const onFeedsTouchDown = (e) => {
  startY = e.touches[0].clientY;
}

const onFeedsTouchMove = (e) => {
  curY = e.touches[0].clientY
  animate(- (startY - e.touches[0].clientY))

}

const onFeedsTouchEnd = (e) => {
  if (Math.abs(curY - startY > 250)) {
    store.commit('closeActivePid')
  } else {
    animate(0)
  }
}



</script>

<style scoped>
#main {
  background-color: rgb(197, 197, 197);
  border: rgba(213, 213, 213, 0.24);
  border-radius: 0.4rem;
  border-style: solid;
  border-width: 0.2rem;
  height: 100%;
  width:100%;
  /* box-shadow: 0 0 4px 1px gainsboro; */
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

.card-full {
  height: inherit;
}

.body-scroll {
  overflow-y: auto;
}
</style>