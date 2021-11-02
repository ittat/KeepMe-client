<script setup>
import feeds from "@views/feeds.vue"
import navBar from "@views/navBar.vue"
import compAlert from "@components/alert.vue"
import store from "./store"

if (localStorage.getItem('token')) {
  store.commit('setToken', localStorage.getItem('token'))
  store.commit('setUsername', localStorage.getItem('username'))
  store.commit('setUserId', localStorage.getItem('userId'))
}

</script>

<template>
  <feeds></feeds>
  <navBar></navBar>
  <compAlert></compAlert>
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
