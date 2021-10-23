<script >
import Card from "@components/Card.vue"

import { defineComponent, provide } from "@vue/runtime-core"
export default defineComponent({
    name: "logIn",
    components: {
        Card
    },
    setup() {
        provide("showheader", false)
        provide("showfooter", false)
        provide("bodysrcoll", false)
    }
})
</script>

<template>
    <Card>
        <template v-slot:body>
            <div class=" d-flex flex-column align-items-center justify-content-center w-100 h-100">
                <div class="logo">
                    <p class="h1"> Keep Me</p>  
                </div>

                <icon name="lock" iconType="png" width="2rem" />

                <div class="input-group">
                    <input type="text" class="form-control" placeholder="用户名" />
                </div>

                <div class="input-group">
                    <input type="password" class="form-control" placeholder="密码" />
                </div>

                <icon class="pt-4" name="arrow_right" iconType="svg" width="2.5rem" />
            </div>
        </template>
    </Card>
</template>


<style scoped>

.logo{
    margin: 2rem;

}
.input-group{
    margin: .5rem;
}
</style>