<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { useFullscreen } from '@vueuse/core'
import { NIcon } from 'naive-ui'

interface IProps {
  size?: number
}

defineOptions({
  name: 'FullScreen',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <NIcon :size="size" @click="toggle">
    <SvgIcon
      class="cursor-pointer"
      :name="isFullscreen ? 'ri:fullscreen-exit-fill' : 'ri:fullscreen-fill'"
    />
  </NIcon>
</template>
