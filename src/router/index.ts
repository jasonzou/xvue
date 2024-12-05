import { useAppConfigStore } from '@/stores/app'
import { useKeepAliveStore } from '@/stores/keepAlive'
import { createRouter, createWebHashHistory } from 'vue-router'
import constantRoutes from './constant'

// create a router
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes,
  ],
})
router.afterEach((to, from) => {
  const useAppConfig = useAppConfigStore()
  const useKeepAlice = useKeepAliveStore()
  // useAppConfig.appConfig.app.enableProgress && (isLoading.value = false)

  if (to.meta.cache) {
    const componentName = to.matched[to.matched.length - 1].components?.default.name || null
    if (componentName)
      useKeepAlice.add(componentName)
    else
      console.warn('该页面没有设置name属性，无法缓存')
  }

  if (from.meta.cache) {
    const componentName = from.matched[from.matched.length - 1].components?.default.name || null

    if (componentName) {
      switch (typeof from.meta.cache) {
        case 'string':
          if (from.meta.cache !== to.name)
            useKeepAlice.remove(componentName)
          break
        case 'object':
          if (!from.meta.cache.includes(to.name as string))
            useKeepAlice.remove(componentName)
          break
      }

      if (from.meta.noCache) {
        switch (typeof from.meta.noCache) {
          case 'string':
            if (from.meta.noCache === to.name)
              useKeepAlice.remove(componentName)
            break
          case 'object':
            if (from.meta.noCache.includes(to.name as string))
              useKeepAlice.remove(componentName)
            break
        }
      }

      if (to.name === 'reload')
        useKeepAlice.remove(componentName)
    }
  }
})

export default router
