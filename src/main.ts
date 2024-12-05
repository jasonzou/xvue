import setupI18n from '@/locales'
// load the constant router
import router from '@/router'

import directive from '@/utils/directive'
import { createApp } from 'vue'
import App from './App.vue'

import pinia from './stores'

// setup svg-icons
import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import './style.css'

const app = createApp(App)

// bind the router with the app
app.use(router)

// use pinia
app.use(pinia)

// i18n
setupI18n(app)

// directives
directive(app)

app.mount('#app')
