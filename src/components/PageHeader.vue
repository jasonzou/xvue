<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import ChangeColorScheme from '@/components/ChangeColorScheme.vue'
import FullScreen from '@/components/FullScreen.vue'
import LangSelect from '@/components/LangSelect.vue'
import Logo from '@/components/Logo.vue'
import Reload from '@/components/Reload.vue'
import SideBarCollapse from '@/components/SideBarCollapse.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import { GlobalSettings } from '@/GlobalSettings'
import { useAppConfigStore } from '@/stores/app'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from '@vicons/ionicons5'

import { NAvatar, NBreadcrumb, NBreadcrumbItem, NDivider, NDropdown, NGi, NGrid, NIcon, NMenu, NPageHeader, NSpace, NSplit, NStatistic, NTooltip } from 'naive-ui'
import { computed, defineComponent, h, reactive, ref, toRefs, unref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const useAppConfig = useAppConfigStore()
console.log('fdklsa')
console.log(useAppConfig.appConfig.toolbar.enableSidebarCollapse)
console.log('fdklsa')

function openSetting() {
  console.log('Open Setting')
}
const collapsed = false
const inverted = false
const navMode = 'horizontal'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const hmenuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer',
        },
        '且听风吟',
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon),
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
    disabled: true,
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon),
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
]
</script>

<template>
  <div class="layout-header">
    <!-- logo -->
    <div class="toolbar-content h-[var(--xt-toolbar-height)] flex items-center px-4">
      <div class="flex items-center">
        <Logo />
        <NMenu mode="horizontal" :options="hmenuOptions" responsive />
      </div>
      <div class="ml-auto flex items-center">
        <!-- <MenuSearch v-if="useAppConfig.appConfig.toolbar.enableMenuSearch" class="mr-2" /> -->
        <ChangeSize v-if="useAppConfig.appConfig.toolbar.enableElementSize" class="mr-2" :size="24" />
        <Reload v-if="useAppConfig.appConfig.toolbar.enablePageReload" class="mr-2" :size="24" />
        <LangSelect v-if="useAppConfig.appConfig.toolbar.enableI18n" class="mr-2" :size="24" />
        <FullScreen v-if="useAppConfig.appConfig.toolbar.enableFullscreen" class="mr-2" :size="24" />
        <ChangeColorScheme v-if="useAppConfig.appConfig.toolbar.enableColorScheme" class="mr-2" :size="24" />
        <!-- <ThemeSelect v-if="useAppConfig.appConfig.toolbar.enableChangeTheme" class="mr-2" /> -->
        <Personal />
      </div>
    </div>
  </div>
</template>

  <style lang="css" scoped>
  body {
  color: #ccc;
}
</style>
