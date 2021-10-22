<template>
  <div id="main">
    <div class="card text-center">
      <div v-show="hasHeader" class="card-header">
        <slot name="header"></slot>
      </div>
      <div class="card-body">
        <slot name="body"></slot>
      </div>
      <div v-show="hasFooter" class="card-footer text-muted">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive,toRefs,inject } from "vue";

export default defineComponent({
  name: 'Card',
  setup(){
    // const layout = new reactive({
    //   hasHeader:true,
    //   hasFooter:true
    // })
    const hasHeader = inject("showheader") || false
    const hasFooter = inject("showfooter") || false
    return { hasHeader,hasFooter}
  }
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
}
</style>