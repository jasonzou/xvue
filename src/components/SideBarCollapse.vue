<script setup lang="ts">
import { useAppConfigStore } from '@/stores/app'
import { NIcon } from 'naive-ui'
import SvgIcon from './SvgIcon.vue'

interface IProps {
  size?: number
}

defineOptions({
  name: 'SideBarCollapse',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const useAppConfig = useAppConfigStore()

function toggleClick() {
  useAppConfig.appConfig.nav.subMenuCollapse = !useAppConfig.appConfig.nav.subMenuCollapse
}
</script>

<template>
  <NIcon :size="size" @click="toggleClick">
    <SvgIcon :name="useAppConfig.getCollapse ? 'hamburger-opened' : 'hamburger-closed'" class="cursor-pointer" />
  </NIcon>
</template>
