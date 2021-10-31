<template>
    <div v-show="isShow" id="main" class="w-100 h-100">
        <div class="w-100 h-100 d-flex justify-content-center align-items-center">
            <div
                id="alert"
                class="w-25 h-25 d-flex justify-content-center align-items-center flex-column"
            >
                <i v-if="isSucessful" class="bi bi-check-circle text-white fs-1"></i>
                <i v-else class="bi bi-exclamation-circle text-white fs-1"></i>
                <p v-show="context" class="text-white m-0">{{ context }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, onUnmounted, ref } from '@vue/runtime-core'
import mitt from '@mitt'

const isShow = ref(false)
const isSucessful = ref(false)
let timer = null
const context = ref(null)

const showWarningContent = (ctn = '', delay = 1000) => {
    context.value = ctn
    isShow.value = true
    isSucessful.value = false
    clearTimeout(timer)
    timer = setTimeout(() => {
        context.value = null
        isShow.value = false
    }, delay);
}

const showSucessfulContent = (ctn = '', delay = 1000) => {
    context.value = ctn
    isShow.value = true
    isSucessful.value = true
    clearTimeout(timer)
    timer = setTimeout(() => {
        context.value = null
        isShow.value = false
    }, delay);
}

// showSucessfulContent("发送失败")

mitt.on('alertOK',showSucessfulContent)
mitt.on('alertWarn',showWarningContent)

onBeforeUnmount(() =>{
    mitt.off('alertOK')
    mitt.off('alertWarn')
})
</script>

<style scoped>
#main {
    position: absolute;
    top: 0;
    left: 0;
}

#alert {
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.548);
}
</style>