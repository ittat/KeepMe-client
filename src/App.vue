<script setup>
import { provide } from "@vue/runtime-core"
import userInfo from "@views/userInfo.vue"
import LoadCard from "@views/LoadCard.vue"
import postDetail from "@views/postDetail.vue"
import logIn from "@views/logIn.vue"
import newPost from "@views/newPost.vue"



</script>

<template>
  <userInfo></userInfo>
  <!-- <LoadCard></LoadCard> -->
  <!-- <logIn></logIn> -->
  <!-- <newPost></newPost> -->
<!-- <postDetail></postDetail> -->

</template>

<style>
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  border-width: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50;
  margin-top: 60px; */
  height: inherit;
  width: inherit;
}
</style>
