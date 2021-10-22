//bootstrap
import 'bootstrap'
import './scss/custom.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import svgIcon from './components/svgIcon/svgIcon.vue'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
.component('svg-icon', svgIcon)
.mount('#app')
