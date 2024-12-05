<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { NIcon } from 'naive-ui'

interface IProps {
  size?: number
}

defineOptions({
  name: 'Reload',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})
</script>

<template>
  <NIcon :size="size" @click="$router.go()">
    <SvgIcon class="cursor-pointer" name="ep:refresh" />
  </NIcon>
</template>
