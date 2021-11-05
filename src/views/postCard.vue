<script setup>
import { shallowRef } from "vue"
import { useStore } from "vuex"
import postDetail from "@views/postDetail.vue"
import postCommit from "@views/postCommit.vue"

const store = useStore()

const showComponent = shallowRef(postDetail)

const props = defineProps({
    postId: {
        type: String,
        required: true
    }
})


const goTo = (path) => {
    if (path === "postCommit") {
        showComponent.value = postCommit
    } else {
        showComponent.value = postDetail
    }
}

</script>



<template>
<component :is="showComponent" @goTo="goTo" :postId="props.postId"></component>
</template>


<style scoped>
</style>