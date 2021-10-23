//bootstrap
import 'bootstrap'
import './scss/custom.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Icon from './components/Icon.vue'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

createApp(App)
.component('icon', Icon)
.mount('#app')
