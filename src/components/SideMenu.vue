<script setup lang="ts">
import { useProjectSetting } from '@/hooks/setting/useProjectSetting'
import { useAsyncRouteStore } from '@/store/modules/asyncRoute'
import { useProjectSettingStore } from '@/store/modules/projectSetting'
import { generatorMenu, generatorMenuMix } from '@/utils'
import { computed, defineComponent, onMounted, reactive, ref, toRefs, unref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface IProps {
  mode: string // 菜单模式
  collapsed: boolean // 侧边栏菜单是否收起
  location: string // 位置
}
</script>

<template>
  <NMenu
    :options="menus" :inverted="inverted" :mode="mode" :collapsed="collapsed" :collapsed-width="64"
    :collapsed-icon-size="20" :indent="24" :expanded-keys="openKeys" :value="getSelectedKeys"
    @update:value="clickMenuItem" @update:expanded-keys="menuExpanded"
  />
</template>
