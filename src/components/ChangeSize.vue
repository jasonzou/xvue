<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { useAppConfigStore } from '@/stores/app'
import { NDropdown, NIcon, useMessage } from 'naive-ui'

defineOptions({
  name: 'ChangeSize',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const message = useMessage()

interface IProps {
  size?: number
}

const useAppConfig = useAppConfigStore()
const elementSize = computed(() => useAppConfig.appConfig.elementSize)

function changeSize(value: ElementSize) {
  useAppConfig.appConfig.elementSize = value
}

function handleSelect(key: string | number) {
  const messageStr = `changed font size to ${String(key)}`
  message.info(messageStr)
}

const options = [
  {
    label: 'default',
    key: 'default',
  },
  {
    label: 'large',
    key: 'large',
  },
  {
    label: 'small',
    key: 'small',
  },
]
</script>

<template>
  <NDropdown trigger="hover" :options="options" @command="changeSize" @select="handleSelect">
    <NIcon :size="size">
      <SvgIcon name="ri:apps-fill" class="cursor-pointer" />
    </NIcon>
  </NDropdown>
</template>
