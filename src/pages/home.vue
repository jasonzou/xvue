<!--------------------------------------------------------------------------
  title: App.vue
  created: 2024-12-02 10:37:47
  author: Jason Zou <jason.zou@gmail.com>
  last modified: 2024-12-02 10:40:13
 -------------------------------------------------------------------------->
<script setup lang='ts'>
import SvgIcon from '@/components/SvgIcon.vue'
import { GameControllerOutline } from '@vicons/ionicons5'
import { NButton, NIcon, NSpace } from 'naive-ui'
</script>

<template>
  <div id="container" m-4 p-4>
    <div bg-amber>
      <h1>It works. Hellow world!</h1>
      <h2>H2 heading</h2>
      <div text-4xl>
        Test UnoCSS
      </div>
      <NSpace vertical>
        <NButton type="primary" size="large">
          Naive UI Button 1
        </NButton>
        <NButton type="primary" size="large">
          Naive UI Button 2
        </NButton>
        <NButton type="primary" size="large">
          Naive UI Button 3
        </NButton>
      </NSpace>
    </div>
    <div>Three ways - icons</div>
    <NSpace>
      <NIcon size="40">
        <GameControllerOutline /> --vicons
      </NIcon>
      <NIcon size="40">
        <SvgIcon name="hamburger-opened" /> - from local svg icons
      </NIcon>
      <NIcon size="40">
        <SvgIcon name="mdi:home" />--iconify
      </NIcon>
    </NSpace>
  </div>
</template>

<style lang="css" scoped>
#container {
  background-color: #ccc;
}
</style>
