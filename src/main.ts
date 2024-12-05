// load the constant router
import router from '@/router'
import { createApp } from 'vue'

import App from './App.vue'
import pinia from './stores'

// setup svg-icons
import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import './style.css'

const app = createApp(App)

// use pinia
app.use(pinia)

// bind the router with the app
app.use(router)

app.mount('#app')
