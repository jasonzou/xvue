<!--------------------------------------------------------------------------
  title: App.vue
  created: 2024-12-02 10:37:47
  author: Jason Zou <jason.zou@gmail.com>
  last modified: 2024-12-02 10:40:13
 -------------------------------------------------------------------------->
<script setup lang='ts'>
import PageFooter from '@/components/PageFooter.vue'
import PageHeader from '@/components/PageHeader.vue'
import SideMenu from '@/components/SideMenu.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import { useAppConfigStore } from '@/stores/app'
import { GameControllerOutline } from '@vicons/ionicons5'
import { NButton, NIcon, NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider, NSpace } from 'naive-ui'

const collapsed = false
const useAppConfig = useAppConfigStore()
function toggleClick() {
  useAppConfig.appConfig.nav.subMenuCollapse = !useAppConfig.appConfig.nav.subMenuCollapse
}
</script>

<template>
  <NLayout>
    <!-- header -->
    <NLayoutHeader bordered h-24 p-6>
      <PageHeader v-model:collapsed="collapsed" inverted="inverted" />
    </NLayoutHeader>
  </NLayout>
  <NLayout class="layout1" position="fixedMenu" has-sider>
    <!-- 左侧区域 -->
    <NLayoutSider
      bordered collapse-mode="width"
      :collapsed-width="64" :width="240"
      show-trigger="arrow-circle" @collapse="toggleClick"
    >
      <!-- 左侧菜单 -->
      <SideMenu />
    </NLayoutSider>
    <!-- 右侧区域 -->
    <NLayout>
      <!-- 页面内容区域 -->
      <NLayoutContent m-2 p-2>
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
        <!-- 多标签组件 -->
        <TabsView v-if="isMultiTabs" v-model:collapsed="collapsed" />
        <!-- 主内容组件 -->
        <MainView />
      </NLayoutContent>
      <NLayoutFooter>
        <PageFooter />
      </NLayoutFooter>
    </NLayout>
  </NLayout>
</template>

<style lang="css" scoped>
#container {
  background-color: #ccc;
}
</style>
