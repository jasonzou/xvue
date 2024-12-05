<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { useAppConfigStore } from '@/stores/app'
import { darkTheme, lightTheme, NIcon } from 'naive-ui'

interface IProps {
  size?: number
}

defineOptions({
  name: 'ChangeColorScheme',
})
withDefaults(defineProps<IProps>(), {
  size: 20,
})

const theme = ref<GlobalTheme | null>(null)

const useAppConfig = useAppConfigStore()

function toggleClick() {
  useAppConfig.appConfig.app.colorScheme = useAppConfig.appConfig.app.colorScheme === 'dark' ? 'light' : 'dark'
  if (useAppConfig.appConfig.app.colorScheme === 'dark') {
    theme.value = lightTheme
  }
  else {
    theme.value = darkTheme
  }
}

watch(() => useAppConfig.appConfig.app.colorScheme, (val) => {
  if (val === '')
    val = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  switch (val) {
    case 'dark':
      document.documentElement.classList.add('dark')
      break
    case 'light':
      document.documentElement.classList.remove('dark')
      break
    default:
      break
  }
}, {
  immediate: true,
})
</script>

<template>
  <NIcon :size="size" @click="toggleClick">
    <SvgIcon class="cursor-pointer" :name="useAppConfig.appConfig.app.colorScheme === 'light' ? 'ep:sunny' : 'ep:moon'" />
  </NIcon>
</template>
