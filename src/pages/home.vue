<!--------------------------------------------------------------------------
  title: App.vue
  created: 2024-12-02 10:37:47
  author: Jason Zou <jason.zou@gmail.com>
  last modified: 2024-12-02 10:40:13
 -------------------------------------------------------------------------->
<script setup lang='ts'>
import SvgIcon from '@/components/SvgIcon.vue'
import { GameControllerOutline } from '@vicons/ionicons5'
import { NButton, NIcon, NSpace, NLayout, NLayoutSider, NLayoutHeader, NLayoutFooter, NLayoutContent } from 'naive-ui'
import Logo from '@/components/Logo.vue'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
  <NLayout class="layout1" position="fixedMenu" has-sider>
    <!-- 左侧区域 -->
    <NLayoutSider>
      <!-- logo -->
      <Logo collapsed="collapsed" />
      logo
      <!-- 左侧菜单 -->
      <AsideMenu v-modelcollapsed="collapsed" v-modellocation="getMenuLocation" />
    </NLayoutSider>
    <!-- 右侧区域-->
    <NLayout>
      <!-- header区域-->
      <NLayoutHeader inverted="getHeaderInverted" position="fixedHeader">
        <PageHeader v-model:collapsed="collapsed" inverted="inverted" />
      </NLayoutHeader>
      <!-- 页面内容区域-->
      <NLayoutContent>
        <div bg-amber>
          <h1>It works. Hellow world!...</h1>
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
            <SvgIcon name="hamburger-closed" /> - from local svg icons
          </NIcon>
          <NIcon size="40">
            <SvgIcon name="mdi:home" />--iconify
          </NIcon>
        </NSpace>
        <!-- 多标签组件-->
        <TabsView v-if="isMultiTabs" v-model:collapsed="collapsed" />
        <!-- 主内容组件-->
        <MainView />
      </NLayoutContent>
      <n-layout-footer>
        <PageFooter />
      </n-layout-footer>
    </NLayout>
  </NLayout>
</template>

<style lang="css" scoped>
#container {
  background-color: #ccc;
}
</style>
