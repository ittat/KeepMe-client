<template>
    <div class="nav-div d-flex flex-row justify-content-center align-items-center">
        <div class="nav-bar d-flex flex-row justify-content-center">
            <icon
                @click="toPrevCard"
                class="mx-3 my-1"
                id="navleft"
                name="nav-arrow-right"
                iconType="svg"
                width="2rem"
            ></icon>
            <div class="line-column"></div>
            <icon @click="toNextCard" class="mx-3 my-1" name="nav-arrow-right" iconType="svg" width="2rem"></icon>
        </div>
    </div>
</template>

<script setup>

import { useStore } from "vuex"
import { useRouter } from "vue-router"


const store = useStore()
const router = useRouter()

const toPrevCard = () => {
    const path = store.getters.getPrevPath
    console.log(path)
    router.push(path)
}

const toNextCard = () => {
    const path = store.getters.getNextPath
    console.log(path)
    router.push(path)
}


</script>

<style scoped>
.nav-div {
    background-color: #fff0;
    padding: 0;
    /* height: inherit; */
    height: calc(100vh - 85%);
}

.nav-bar {
    border-radius: 20px;
    border-width: 2px;
    border: rgb(197, 197, 197) solid;
    box-shadow: 0 0 9px 1px darkgray;
}

#navleft {
    transform: rotate(180deg);
}

.line-column {
    width: 2px;
    background-color: darkgray;
    height: inherit;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 0;
}
</style>