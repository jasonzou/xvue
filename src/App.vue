<!--------------------------------------------------------------------------
  title: App.vue
  created: 2024-12-02 10:37:47
  author: Jason Zou <jason.zou@gmail.com>
  last modified: 2024-12-02 10:40:13
 -------------------------------------------------------------------------->
<script setup lang='ts'>
import { ref } from 'vue'
import { NConfigProvider, NDialogProvider, NMessageProvider, NNotificationProvider, NCard, NSpace, NButton} from 'naive-ui'
import { RouterView } from 'vue-router'
import type { GlobalTheme } from 'naive-ui'

import { darkTheme } from 'naive-ui';
const theme = ref<GlobalTheme | null>(null)
</script>

<template>
    <n-config-provider :theme="theme" class="" h-full>
      <n-notification-provider placement="bottom-right">
        <n-message-provider placement="bottom-right">
          <n-dialog-provider>
            <router-view/>
            <!-- <GithubButton /> -->
          </n-dialog-provider>
        </n-message-provider>
      </n-notification-provider>
    <n-card>
      <n-space>
        <n-button @click="theme = darkTheme">
          Dark
        </n-button>
        <n-button @click="theme = null">
          Light
        </n-button>
      </n-space>
    </n-card>
    </n-config-provider>
  </template>

<style lang="css" scoped>
#container {
  background-color: #ccc;
}
</style>
