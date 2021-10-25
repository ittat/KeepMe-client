<script setup>
import Card from "@components/Card.vue"
import { provide, reactive, ref } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import { stringify } from 'qs' // 引入qs模块，用来序列化post类型的数据
import http from "@http"

const store = useStore()
const route = useRoute()

const userInfo = reactive({
    username: '',
    password: '',
    isMissUser: false,
    isMissPassd: false
})

provide("showheader", false)
provide("showfooter", false)
provide("bodysrcoll", false)

const login = async () => {
    console.log(userInfo.username);
    if (userInfo.username == '') {
        userInfo.isMissUser = true
    } else if (userInfo.password == '') {
        userInfo.isMissPassd = true
    } else {
        const res = await http.post(`/user/login`, stringify({
            username: userInfo.username,
            password: userInfo.password
        }))
        console.log(res.data)
        if (res.data.code == 102) {
            userInfo.isMissPassd = false
            userInfo.isMissUser = false
            // OK go back to the previous page
            store.commit('closeActivePid')
        }else{
            userInfo.isMissPassd = true
            userInfo.isMissUser = true
        }
    }

}

</script>

<template>
    <Card>
        <template v-slot:body>
            <div class="d-flex flex-column align-items-center justify-content-center w-100 h-100">
                <div class="logo">
                    <p class="h1">Keep Me</p>
                </div>

                <icon name="user" iconType="png" width="2.5rem" />

                <div class="input-group">
                    <input
                        type="text"
                        v-model="userInfo.username"
                        class="form-control shadow-sm"
                        :class="{ 'is-invalid': userInfo.isMissUser }"
                        placeholder="用户名"
                    />
                </div>
                <div class="input-group">
                    <input
                        type="password"
                        v-model="userInfo.password"
                        class="form-control shadow-sm"
                        :class="{ 'is-invalid': userInfo.isMissPassd }"
                        placeholder="密码"
                    />
                </div>

                <icon
                    v-if="!store.state.token"
                    @click="login"
                    class="pt-4 active"
                    name="arrow_right"
                    iconType="svg"
                    width="4rem"
                />
            </div>
        </template>
    </Card>
</template>


<style scoped>
.logo {
    margin: 2rem;
}
.input-group {
    margin: 0.5rem;
    height: 3rem;
}

</style>