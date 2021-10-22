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
            <icon name="lock" iconType="svg" />
            <icon name="lock" iconType="png" />
        </template>
    </Card>
</template>
