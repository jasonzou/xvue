<script setup lang="ts">
import { GlobalSettings } from '@/GlobalSettings'
import { ezUserStore } from '@/stores/ezUser'
import { NButton, NInput } from 'naive-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const bearer_token = GlobalSettings.token
console.log(bearer_token)

const router = useRouter()

const username = ref('')
const password = ref('')
const store = ezUserStore()
function login() {
  alert(username.value)
  console.log(username.value, password.value)
  store
    .login(username.value, password.value)
    .then((response) => {
      if (response.data.token) {
        store.token = response.data.token
        store.$patch({
          token: response.data.token,
          authorized: true,
          user: username.value,
          expired: response.data.expire,
        })
        localStorage.setItem('token', store.getToken)
        console.log('store => token', store)
        console.log('store => token1', store.getToken)
      }

      console.log(response.data)
      router.push('/dashboard')
    })
    .catch((err) => {
      console.log(err)
    })
}
function handleLoginEnter(event) {
  if (event.keyCode === 13 || event.which === 13) {
    event.preventDefault()
    login()
    return false
  }
}
</script>

<template>
  <div
    id="background"
    class="bg-login-bg h-screen items-center justify-around bg-cover"
  >
    <div
      class="g-6 h-full flex flex-wrap items-center justify-center text-gray-800"
    >
      <div
        class="m-11 items-center justify-between rounded-md bg-slate-200 p-6 sm:min-w-fit sm:w-1/5"
      >
        <div class="login-title flex justify-center p-2">
          <img src="@/static/ezEditorLogo.png">
        </div>
        <div class="pb-2 pt-2">
          <span class="font-bold">User name</span>
          <NInput
            v-model:value="username"
            class="inputflex"
            type="text"
            placeholder="Please entry your user name"
          />
        </div>
        <div class="login-password pb-4 pt-2">
          <span class="font-bold">Password</span>
          <NInput
            v-model:value="password"
            type="password"
            show-password-on="click"
            class="inputflex"
            placeholder="Please entry your password"
          />
        </div>

        <!-- login button -->
        <div class="flex justify-center pb-4 pt-6">
          <NButton
            class="login-btn sm:w-full"
            size="large"
            type="success"
            @click="login"
          >
            Log In
          </NButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.bg-login-bg {
  background-image: url('@/static/seaLion.jpg');
}
</style>
