<script >
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"

import { defineComponent, provide } from "@vue/runtime-core"
export default defineComponent({
    name: "userInfo",
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
            <div class="w-100 d-flex justify-content-center">
                <user-img class="mt-4 mb-1" name="head-funingdady" color="#000" size="3" />
            </div>

            <span class="fw-lighter fs-6 placeholder">dfsdfdsf</span>
            <hr />
            <div class="mb-2 d-flex flex-row align-items-center justify-content-center">
                <icon name="at" iconType="svg" width="1.5rem" />
                <icon name="posts" iconType="svg" width="1.5rem" />
                <!-- todo -->
                <icon name="follow" iconType="svg" width="1.5rem" />
            </div>
        </template>
        <template v-slot:body>
            <div id="infos" class="d-flex flex-column align-items-start">
                <i class="bi bi-info fs-6">Infos:</i>
                <div class="d-flex flex-column align-items-start mx-4">
                    <span class>dfksdkjfsdkfjkdslfjdsl</span>
                    <span class>dfksdkjdsl</span>
                    <span class>dfsdkfjkdslfjdsl</span>
                    <span class>dfksdkjfsdkfjkdslfjdsl</span>
                </div>

                <hr />
                <i class="bi bi-info fs-6">Infos:</i>
                <div class="d-flex flex-column align-items-start mx-4">
                    <span class>dfksdkjfsdkfjkdslfjdsl</span>
                    <span class>dfksdkjdsl</span>
                    <span class>dfsdkfjkdslfjdsl</span>
                    <span class>dfksdkjfsdkfjkdslfjdsl</span>
                </div>

                <hr />
                <i class="bi bi-info fs-6">Infos:</i>
                <div class="d-flex flex-column align-items-start mx-4">
                    <span class>dfksdkjfsdkfjkdslfjdsl</span>
                    <span class>dfksdkjdsl</span>
                    <span class>dfsdkfjkdslfjdsl</span>
                    <span class>dfksdkjfsdkfjkdslfjdsl</span>
                </div>
            </div>
        </template>
        <template v-slot:footer></template>
    </Card>
</template>


<style scoped>
img {
    margin-right: 2rem;
    margin-left: 2rem;
    /* padding: 1rem; */
}
</style>