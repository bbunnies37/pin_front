<template>
  <div class="h-screen relative">
    <!-- navigation bar -->
    <div class="z-[10] h-20 w-full p-4 flex justify-between sticky top-0 left-0 bg-white">
      <div class="flex py-3 items-center">
        <router-link to="/" class="flex">
          <img class="w-8 h-8" src="./assets/images/pinterest-logo.png" alt="pinterest logo">
          <div class="text-primary text-xl font-medium ml-1 tracking-[-1px]">Pinterest</div>
        </router-link>
      </div>
      <div class="flex items-center">
        <router-link to="/home">Home</router-link>
        <div class="mx-6 relative">
          <button 
          class="flex items-center" @click="clickCreateBtn">Create <img
                        class="ml-[4px] w-[12px] h-[12px]" src="./assets/images/arrow_down.png" alt="arrow down images"></button>
          <div class="bg-white min-w-[180px] rounded-lg absolute shadow-lg top-30 left-0 p-[8px]" v-if="showCreateDialog">
              <router-link to="/idea-pin-builder" class="block p-[8px]" @click="showIdeaPinCreate = true; showCreateDialog = false">Create Idea Pin</router-link>
              <router-link class="block p-[8px]" to="/pin-builder" @click="showCreateDialog = false">Create Pin</router-link>
          </div>
        </div>
        <div class="mr-6">
          <router-link to="/settings">설정</router-link>
        </div>
        <div class="mr-6">
          <router-link to="/my-page/test">마이페이지</router-link>
        </div>
        <div class="mr-6">
            <router-link to="/pin-detail">Pin Detail</router-link>
          </div>
        <div class="mr-2">
          <button class="px-3 py-2 bg-primary text-white rounded-3xl" @click="clickLogin">
            Log in
          </button>
        </div>
        <div>
          <button class="px-3 py-2 bg-secondary rounded-3xl" @click="clickSignup">
            Sign up
          </button>
        </div>
      </div>
    </div>

    <router-view></router-view>
    <Signup v-if="showSignup" @go-login="clickLogin" @close-popup="clickSignup"></Signup>
    <Login v-if="showLogin" @go-signup="clickSignup" @close-popup="clickLogin"></Login>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import Signup from 'src/components/Signup.vue'
import Login from 'src/components/Login.vue'

const showIdeaPinCreate = ref(false)
const showSignup = ref(false)
const showLogin = ref(false)
const showCreateDialog = ref(false)

const clickSignup = () => {
  showSignup.value = !showSignup.value
}

const clickLogin = () => {
  showLogin.value = !showLogin.value
}
const clickCreateBtn = () => {
  showCreateDialog.value = !showCreateDialog.value
}
</script>