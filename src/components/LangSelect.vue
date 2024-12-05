<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { useAppConfigStore } from '@/stores/app'
import { NDropdown, NIcon } from 'naive-ui'
import { useI18n } from 'vue-i18n'

interface IProps {
  size?: number
}

defineOptions({
  name: 'LangSelect',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const useAppConfig = useAppConfigStore()

const toolbarTextColor = computed(() => useAppConfig.getTheme.toolbarTextColor)

const language = computed(() => useAppConfig.getLanguage)

const i18n = useI18n()
function handleSetLanguage(lang: Language) {
  i18n.locale.value = lang
  useAppConfig.appConfig.defaultLanguage = lang
}

const options = [
  {
    label: 'English',
    key: 'English',
  },
  {
    label: '简体中文',
    key: 'zh-cn',
  },
  {
    label: '繁體中文',
    key: 'zh-tw',
  },
]
</script>

<template>
  <NDropdown trigger="hover" :options="options" @command="handleSetLanguage">
    <NIcon :size="size">
      <SvgIcon name="ri:translate" class="cursor-pointer" />
    </NIcon>
  </NDropdown>
</template>

<style scoped lang="css">
  .n-dropdown {
  color: v-bind(toolbarTextColor);
}

.dark .n-dropdown {
  color: var(--xt-toolbar-text-color);
}
</style>
