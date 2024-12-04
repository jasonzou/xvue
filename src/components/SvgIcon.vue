<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

// define options for the component
defineOptions({ name: 'SvgIcon', inheritAttrs: false });

interface IProps {
  name: string
  prefix?: string
}

const props = withDefaults(defineProps<IProps>(), {
  prefix: 'icon',
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <Icon v-if="name.includes(':')" class="svg-icon" :icon="name" />
  <svg v-else class="svg-icon" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>
