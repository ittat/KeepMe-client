//bootstrap
import 'bootstrap'
import './scss/custom.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Icon from './components/Icon.vue'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.component('icon', Icon)
.mount('#app')
