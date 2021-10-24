<template>
    <div id="warper">
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { useRouter } from "router"
import { watch, computed } from "@vue/runtime-core";

const store  = useStore()
console.log(store.state);


watch(() => store.state.loadDone, (n,o)=>{
    console.log(n + '_' + o);
})

</script>

<style>
#warper {
    background-color: lawngreen;
    margin-right: 17px;
    height: calc(100vh - 15%);
    margin-top: 14px;
    margin-left: 8px;
}
</style>