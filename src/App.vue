<script setup>
import feeds from "@views/feeds.vue"
import navBar from "@views/navBar.vue"


import { useRoute } from 'vue-router'
import { watch } from 'vue'
import store from "./store"
const route = useRoute()

watch(() => route.path, (newPath, oldPath) => {
  console.log('route: ' + newPath + ' <== ' + oldPath);
  if (newPath.includes('/system-')) {
    console.log('save: ' + newPath.replace('/system', 'system'))
    store.commit('insortPid', newPath.replace('/system', 'system'))
  } else if (newPath.includes('/post/')) {
    console.log('save: ' + newPath.replace('/post/', 'post-'))
    store.commit('insortPid', newPath.replace('/post/', 'post-'))
  } else {

  }

})


</script>

<template>
  <feeds></feeds>
  <navBar></navBar>
</template>

<style>
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  border-width: 0;
  padding: 0;
  background-color: #272d37;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: inherit;
  width: inherit;
}
</style>
