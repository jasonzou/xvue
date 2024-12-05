<!--------------------------------------------------------------------------
  title: App.vue
  created: 2024-12-02 10:37:47
  author: Jason Zou <jason.zou@gmail.com>
  last modified: 2024-12-02 10:40:13
 -------------------------------------------------------------------------->
<script setup lang='ts'>
import type { GlobalTheme } from 'naive-ui'
import { darkTheme, NButton, NCard, NConfigProvider, NDialogProvider, NMessageProvider, NNotificationProvider, NSpace } from 'naive-ui'
import { ref } from 'vue'

import { RouterView } from 'vue-router'

const theme = ref<GlobalTheme | null>(null)
</script>

<template>
  <NConfigProvider :theme="theme" class="" h-full>
    <NNotificationProvider placement="bottom-right">
      <NMessageProvider placement="bottom-right">
        <NDialogProvider>
          <RouterView />
          <!-- <GithubButton /> -->
        </NDialogProvider>
      </NMessageProvider>
    </NNotificationProvider>
    <NCard>
      <NSpace>
        <NButton @click="theme = darkTheme">
          Dark
        </NButton>
        <NButton @click="theme = null">
          Light
        </NButton>
      </NSpace>
    </NCard>
  </NConfigProvider>
</template>

<style lang="css" scoped>
#container {
  background-color: #ccc;
}
</style>
