// load the constant router
import router from '@/router'
import { createApp } from 'vue'

import App from './App.vue'

// setup svg-icons
import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import './style.css'

const app = createApp(App)

// bind the router with the app
app.use(router)
app.mount('#app')
