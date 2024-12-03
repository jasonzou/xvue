<!--------------------------------------------------------------------------
  title: App.vue
  created: 2024-12-02 10:37:47
  author: Jason Zou <jason.zou@gmail.com>
  last modified: 2024-12-02 10:40:13
 -------------------------------------------------------------------------->
<script setup lang='ts'>
import { RouterView } from 'vue-router'
// import { NConfigProvider, NNotificationProvider, NMessageProvider, NDialogProvider } from 'naive-ui';
</script>

<template>
  <div id="container" m-4 p-4>
    <!-- <n-config-provider>
      <n-notification-provider placement="bottom-right">
        <n-message-provider placement="bottom-right">
          <n-dialog-provider> -->
    <RouterView />
    <!-- <GithubButton /> -->
    <!-- </n-dialog-provider>
        </n-message-provider>
      </n-notification-provider>
    </n-config-provider> -->
  </div>
</template>

<style lang="css" scoped>
#container {
  background-color: #ccc;
}
</style>
