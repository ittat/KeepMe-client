<script >
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"

import { defineComponent, provide } from "@vue/runtime-core"
export default defineComponent({
    name: "postDetail",
    components: {
        Card,
        userImg
    },
    setup() {
        provide("showheader", true)
        provide("showfooter", false)
        provide("bodysrcoll", true)
    }
})
</script>

<template>
    <Card>
        <template v-slot:header>
            <div class="w-100 d-flex justify-content-between">
                <div class="d-flex flex-row text-start align-items-center">
                    <user-img class="mt-1 mb-1" name="head-funingdady" color="#000" size="3" />
                    <div class="d-flex flex-column mx-3">
                        <span class="fw-bolder fs-4">dfsdfdsf</span>
                        <span class="fw-lighter fs-6">dfssf</span>
                    </div>
                </div>

                <icon name="favourite" iconType="svg" width="1.5rem" class="mx-0" />
            </div>
        </template>
        <template v-slot:body>
            <div class="d-flex flex-column">
                <span class="text-wrap fs-5 lh-5">
                    sdfsdfdskfhdkslfkdslfjdsklfjdsfkdsjfkdsfjsldk dsfjdskf
                    jkdslfjds dkfjdskfjdsklfj dskjfkdslfjdsklf
                    dsfsdfdsf dsfdsfsdf
                    sdfdsfdsfdsf
                    sdfdsdskljfkldsfjdslf
                    sdfsdfdskfhdkslfkdslfjdsklfjdsfkdsjfkdsfjsldk dsfjdskf
                    jkdslfjds dkfjdskfjdsklfj dskjfkdslfjdsklf
                    dsfsdfdsf dsfdsfsdf
                    sdfdsfdsfdsf
                    sdfdsdskljfkldsfjdslf
                </span>

                <hr />
                <!-- <icon v-if="hasImg" name="img-error" iconType="png" width="inherit" /> -->
                <video v-if="true" class="w-100 h-25" src="/src/assert/icons/movie.mp4" controls></video>
                <hr />
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
</style>