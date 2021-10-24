//bootstrap
import 'bootstrap'
import './scss/custom.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Icon from './components/Icon.vue'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import http from './axios'
import VueAxios from 'vue-axios'

createApp(App)
.use(store)
.use(VueAxios, http)
.use(router)
.component('icon', Icon)
.mount('#app')