<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { provide } from "@vue/runtime-core"
import LoadCard from "./views//LoadCard.vue"


</script>

<template>
  <LoadCard></LoadCard>
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
