<script >
import Card from "../components/Card.vue"

import { defineComponent,provide } from "@vue/runtime-core"
export default defineComponent({
    name: "LoadCard",
    components:{
        Card
    },
    setup() {
        provide("showheader", false)
        provide("showfooter", false)
    }
})
</script>

<template>
    <Card>
        <template v-slot:body>
            <img src="../assets/img/lock.png" alt="lock">
        </template>
    </Card>
</template>
