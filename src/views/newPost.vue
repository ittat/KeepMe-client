<script >
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"

import { defineComponent, provide } from "@vue/runtime-core"
export default defineComponent({
    name: "newPost",
    components: {
        Card,
        userImg
    },
    setup() {
        provide("showheader", true)
        provide("showfooter", true)
        provide("bodysrcoll", true)
    }
})
</script>

<template>
    <Card>
        <template v-slot:header>
            <div class="w-100 my-2 d-flex flex-row justify-content-center align-items-center position-relative">
                <p class="h3 mb-0">New Post</p>
                <icon class="position-absolute mx-0" style="left: 0;" name="close-danger" iconType="svg" width="1.6rem"  />
                <icon class="position-absolute mx-0" style="right: 0;" name="send" iconType="svg" width="1.6rem"  />
            </div>
        </template>
        <template v-slot:body>
            <textarea
                class="form-control w-100 h-100"
                name
                id
                cols="30"
                rows="10"
                placeholder="Write something you will to share..."
            ></textarea>
        </template>
        <template v-slot:footer>
            <div class="d-flex flex-row justify-content-around">
                <i class="bi bi-images fs-1"></i>
                <i class="bi bi-camera-video fs-1"></i>
                <i class="bi bi-emoji-smile fs-1"></i>
                <i class="bi bi-link-45deg fs-1"></i>
            </div>
        </template>
    </Card>
</template> 


<style scoped>
img {
    margin-right: 2rem;
    margin-left: 2rem;
    /* padding: 1rem; */
}

textarea {
    resize: none;
    border-width: 0;
}
</style>