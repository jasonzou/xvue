<!--------------------------------------------------------------------------
  title: 404.vue
  created: 2024-12-02 12:36:03
  author: Jason Zou <jason.zou@gmail.com>
  last modified:
 -------------------------------------------------------------------------->

<script setup lang='ts'>
import { NButton } from 'naive-ui'
// const { generateTitle } = useLocalI18n()
// const router = useRouter()
// function goHome() {
//   router.push('/')
// }
</script>

<template>
  <div h-full min-h-screen>
    <div>
      <div text-9xl text-purple-400 font-bold>
        404
      </div>
      <div class="py-8 text-6xl font-medium dark:text-dark-900">
        <!-- {{ generateTitle('notfound.title') }} -->
      </div>
      <div class="pb-8 text-2xl font-medium dark:text-dark-900">
        <!-- {{ generateTitle('notfound.desc') }} -->
      </div>
      <div>
        <NButton type="primary" size="large">
          Go Home
          <!-- {{ generateTitle('notfound.back') }} -->
        </NButton>
      </div>
    </div>
  </div>
</template>
