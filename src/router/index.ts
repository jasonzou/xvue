import { createRouter, createWebHashHistory } from 'vue-router'
import constantRoutes from './constant'

// create a router
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes,
  ],
})

export default router
