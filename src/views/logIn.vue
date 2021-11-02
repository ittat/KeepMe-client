<script setup>
import Card from "@components/Card.vue"
import { provide, reactive, ref } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import { stringify } from 'qs' // 引入qs模块，用来序列化post类型的数据
import http from "@http"
import mitt from "@mitt"

const store = useStore()
const route = useRoute()
const isloginMode = ref(true)


// 如果 token 已经存在， 直接关闭
if (store.state.token) {
    store.commit('closeActivePid')
}

const userInfo = reactive({
    username: '',
    password: '',
    email: '',
    isMissUser: false,
    isMissPassd: false,
    isMissEmail: false
})

provide("showheader", false)
provide("showfooter", false)
provide("bodysrcoll", false)

const switchloginMode = () => {
    isloginMode.value = !isloginMode.value
}

const enter = () => {
    if (userInfo.username == '') {
        userInfo.isMissUser = true
    } else if (userInfo.password == '') {
        userInfo.isMissPassd = true
    } else {
        if (isloginMode.value) {
            login()
        } else {
            createNewUser()
        }
    }
}

const login = async () => {
    const res = await http.post(`/user/login`, stringify({
        username: userInfo.username,
        password: userInfo.password
    }))
    console.log(res.data)
    if (res.data.code == 102) {
        userInfo.isMissPassd = false
        userInfo.isMissUser = false
        // OK go back to the previous page
            mitt.emit('alertOK',"成功登陆")
        store.commit('closeActivePid')
    } else {
        userInfo.isMissPassd = true
        userInfo.isMissUser = true
            mitt.emit('alertOK',"登陆失败")

    }
}


const createNewUser = async () => {
    if (userInfo.email == '') {
        userInfo.isMissPassd = true
    } else {
        const res = await http.post(`/user/create`, stringify({
            username: userInfo.username,
            password: userInfo.password,
            email: userInfo.email
        }))
        console.log(res);
        if (res.data.code == 105) {
            userInfo.isMissPassd = false
            userInfo.isMissUser = false
            userInfo.email = false
            isloginMode.value =true
            // OK go back to the previous page
            mitt.emit('alertOK',"注册成功！")
        } else {
            userInfo.isMissPassd = true
            userInfo.isMissUser = true
            userInfo.email = true
            mitt.emit('alerWarn',"注册失败！")
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
                <div v-show="!isloginMode" class="input-group">
                    <input
                        type="text"
                        v-model="userInfo.email"
                        class="form-control shadow-sm"
                        :class="{ 'is-invalid': userInfo.isMissEmail }"
                        placeholder="邮箱"
                    />
                </div>
                <div class="input-group">
                    <input
                        type="password"
                        v-model="userInfo.password"
                        class="form-control shadow-sm"
                        :class="{ 'is-invalid': userInfo.isMissPassd }"
                        placeholder="密码"
                        @keyup.enter="enter"
                    />
                </div>

                <icon
                    v-if="!store.state.token"
                    @click="enter"
                    class="pt-4 active"
                    name="arrow_right"
                    iconType="svg"
                    width="4rem"
                />
                <p
                    v-show="isloginMode"
                    class="fw-lighter my-2"
                    @click="switchloginMode"
                >Create New User?</p>
                <p
                    v-show="!isloginMode"
                    class="fw-lighter my-2"
                    @click="switchloginMode"
                >Have a User?</p>
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