<template>
  <div id="main">
    <div class="card" :class="{ 'card-full': true }">
      <div v-show="hasHeader" class="card-header text-center">
        <slot name="header"></slot>
      </div>

      <div class="card-body" :class="{'body-scroll':bodySrcoll}">
        <slot name="body"></slot>
      </div>
      <div v-show="hasFooter" class="card-footer text-muted">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity"
import { defineComponent, reactive, toRefs, inject } from "vue"


const hasHeader = inject("showheader") || false
const hasFooter = inject("showfooter") || false
const bodySrcoll = inject("bodysrcoll") || false

const isfull = computed(() => {
  return !(hasHeader || hasFooter)
})

</script>

<style scoped>
#main {
  background-color: #fbfbfb;
  border: rgba(213, 213, 213, 0.24);
  border-radius: 0.51rem;
  border-style: solid;
  /* margin: 1rem; */
  border-width: 0.2rem;
  height: calc(100vh - 10%);
}

.card-full {
  height: inherit;
}

.body-scroll{
  overflow-y: auto;
}

.card-footer{
  /* height: inherit; */
  overflow-y: auto;
}

</style>