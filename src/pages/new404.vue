<script setup lang='ts'>
import { NResult, NButton } from 'naive-ui';  
import { useRouter } from 'vue-router';
 const router = useRouter()
function goHome() {
  router.push('/')
}
</script>


<template>
    <n-result
      status="404"
      title="404 Not Found"
      description="You know life is always ridiculous."
      size="huge"
      p-6
      m-6
    >
      <template #footer>
        <n-button type="primary" size="large" text-xl @click="goHome">Go Home</n-button>
      </template>
    </n-result>
  </template>