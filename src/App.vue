<!--------------------------------------------------------------------------
  title: App.vue
  created: 2024-12-02 10:37:47
  author: Jason Zou <jason.zou@gmail.com>
  last modified: 2024-12-02 10:40:13
 -------------------------------------------------------------------------->
<script setup lang='ts'>
import { NConfigProvider, NDialogProvider, NMessageProvider, NNotificationProvider } from 'naive-ui'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="container" m-4 p-4>
    <NConfigProvider>
      <NNotificationProvider placement="bottom-right">
        <NMessageProvider placement="bottom-right">
          <NDialogProvider>
            <RouterView />
            <!-- <GithubButton /> -->
          </NDialogProvider>
        </NMessageProvider>
      </NNotificationProvider>
    </NConfigProvider>
  </div>
</template>

<style lang="css" scoped>
#container {
  background-color: #ccc;
}
</style>
