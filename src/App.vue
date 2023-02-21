<template>
  <div class="h-screen relative">
    <div class="h-20 w-full p-4 flex justify-between absolute top-0 left-0">
      <div class="flex py-3 items-center">
        <img class="w-8 h-8" src="./assets/images/pinterest-logo.png" alt="pinterest logo">
        <div class="text-primary text-xl font-medium ml-1 tracking-[-1px]">Pinterest</div>
      </div>
      <div class="flex items-center">
        <div class="mr-6">
          <router-link to="/pin-builder">create pin</router-link>
        </div>
        <div class="mr-2">
          <button class="px-3 py-2 bg-primary text-white rounded-3xl">
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

    <Signup v-if="showSignup"></Signup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import Signup from 'src/components/Signup.vue'

const showSignup = ref(false)

const clickSignup = () => {
  showSignup.value = !showSignup.value
}
</script>