<script setup lang="ts">
import logoImage from '@/assets/images/ezEditorLogo.png'

import { GlobalSettings } from '@/GlobalSettings'

interface IProps {
  name: string
  collapsed: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  name: 'Index',
  collapsed: false,
})
</script>

<template>
  <div class="logo" whitespace-nowrap pr-5>
    <img :src="logoImage" alt="XVue logo" align-mid :class="{ 'mr-2': !props.collapsed }">
    <span mx-3 align-middle text-2xl>
      {{ GlobalSettings.title }}
    </span>
  </div>
</template>

<style lang="css" scoped>
.logo {
  height: 72px;
  width: auto;

  img {
    width: auto;
    height: 56px;
  }
}
</style>
