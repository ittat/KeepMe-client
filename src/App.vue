<script setup>
import cards from "@views/cards.vue"
import navBar from "@views/navBar.vue"


</script>

<template>
    <cards></cards>
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
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: inherit;
  width: inherit;

}
</style>
