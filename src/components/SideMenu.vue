<script setup lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs, unref, watch } from 'vue'
import type { Component } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NMenu, NSpace, NSwitch, NLayoutSider } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

interface IProps {
  mode: string // 菜单模式
  collapsed: boolean // 侧边栏菜单是否收起
  location: string // 位置
}
const props = withDefaults(defineProps<IProps>(), {
  collapsed: false,
  mode: 'vertical',
  location: 'left'
})

const menuOptions: MenuOption[] = [
  {
    label: 'Hear the Wind Sing',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Pinball 1973',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: 'Rat',
        key: 'rat'
      }
    ]
  },
  {
    label: 'A Wild Sheep Chase',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Dance Dance Dance',
    key: 'Dance Dance Dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: 'Beverage',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: 'Whisky',
            key: 'whisky'
          }
        ]
      },
      {
        label: 'Food',
        key: 'food',
        children: [
          {
            label: 'Sandwich',
            key: 'sandwich'
          }
        ]
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
const inverted=false
const openKeys=[]

function getSelectedKeys(){
  console.log('get selected keys')
  return null
}
function clickMenuItem(){
  console.log('clicked menu item')
}

function menuExpanded(){
  console.log('menu expanded')
}
</script>

<template>
  <n-menu
    :options="menuOptions" 
    :inverted="inverted" 
    :mode="props.mode" 
    :collapsed="props.collapsed" 
    :collapsed-width="64"
    :collapsed-icon-size="20" 
    :indent="24" 
    @update:value="clickMenuItem" 
    @update:expanded-keys="menuExpanded"
  />
</template>
