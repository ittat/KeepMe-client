<template>
  <div id="main">
    <div class="card card-shadow" :class="{ 'card-full': true }">
      <div v-show="hasHeader" class="card-header text-center">
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
  /* height: calc(100vh - 20%); */
  /* height:  inherit; */
  height: 100%;
}

.card-shadow{
    box-shadow: 
      0 0px 8px 2px rgba(0, 0, 0, 0.2), 
      3px 3px 0 0 #f6f6f6, 
      5px 3px 8px 2px rgba(0, 0, 0, 0.2), 
      7px 6px 0 0 #f6f6f6, 
      9px 6px 8px 2px rgba(0, 0, 0, 0.2),
      10px 9px 0 0 #f6f6f6,
      15px 9px 8px 2px rgba(0, 0, 0, 0.2)
    ;
}

.card-full {
  height: inherit;
}

.body-scroll {
  overflow-y: auto;
}

.card-footer {
  /* height: inherit; */
  overflow-y: auto;
}
</style>