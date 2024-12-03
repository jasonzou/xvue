<script setup lang="ts">
import GlobalSettings from '@/GlobalSettings';

console.log(GlobalSettings)

interface IProps {
  name: string
  collapsed: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  name: 'Index',
  collapsed: false
})
</script>

<template>
    <div class="logo">
        <img :src="GlobalSettings.logo" alt="" :class="{ 'mr-2': !props.collapsed }" />
        <h2 v-show="!props.collapsed" class="title">{{ GlobalSettings.title }} </h2>
    </div>
</template>


<style lang="css" scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    white-space: nowrap;

    img {
        width: auto;
        height: 32px;
    }

    .title {
        margin: 0;
    }
}
</style>