<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import useLayoutTools from '@/hooks/UseLayoutTools'
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

function myreload() {
  useLayoutTools().reload()
}
</script>

<template>
  <NIcon :size="size" @click="$router.go()">
    <SvgIcon class="cursor-pointer" name="ep:refresh" />
  </NIcon>
</template>
