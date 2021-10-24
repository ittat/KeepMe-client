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

createApp(App)
.use(store)
.use(router)
.component('icon', Icon)
.mount('#app')

console.log(store.state.pids);