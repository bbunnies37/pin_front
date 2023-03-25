<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 w-full bg-black/60 z-[10000] flex justify-center items-center">
    <div class="signup-popup bg-white w-[484px] h-[736px] rounded-[32px] text-center relative">
      <div class="absolute top-0 right-0 mt-4 mx-4">
        <button @click="closeSignupPopup" class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-secondary">
          <img src="../assets/close-icon.png" alt="close button" class="h-[18px] w-[18px]">
        </button>
      </div>
      <div class="pt-5 px-[10px] pb-6 flex flex-col justify-center items-center">
        <div class="mt-2 mx-auto mb-[6px]">
          <img class="w-[45px] h-[45px]" src="../assets/images/pinterest-logo.png" alt="pinterest logo">
        </div>
        <div class="text-[32px]">Welcome to Pinterest</div>
        <div class="mb-[22px]">Find new ideas to try</div>
        <div class="w-[268px]">
          <div class="flex flex-col text-left mb-1">
            <label for="email" class="text-[14px]">Email</label>
            <input v-model="signupData.email" type="text" placeholder="Email" name="email" class="px-4 py-2 rounded-2xl border-2 border-[#cdcdcd]">
          </div>
          <div class="flex flex-col text-left mb-1">
            <label for="password" class="text-[14px]">Password</label>
            <input v-model="signupData.password" type="text" placeholder="Create a password" name="password" class="px-4 py-2 rounded-2xl border-2 border-[#cdcdcd]">
          </div>
          <div class="flex flex-col text-left mb-1">
            <label for="birthdate" class="text-[14px]">Birthdate</label>
            <input v-model="signupData.birthdate" type="text" placeholder="yyyy/mm/dd" name="birthdate" class="px-4 py-2 rounded-2xl border-2 border-[#cdcdcd]">
          </div>
          <div class="mt-2">
            <button @click="submitSignupData" class="w-full bg-primary text-white px-[18px] rounded-[20px] h-10">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div class="text-xs">
        Already a member? <a class="font-bold cursor-pointer" @click="login">Log in</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, onActivated } from 'vue'

  const emit = defineEmits([
    'goLogin',
    'closePopup',
  ])

  const signupData = reactive({
    email: '',
    password: '',
    birthdate: '',
  })

  const submitSignupData = () => {
    console.log(signupData)
  }

  const login = () => {
    console.log('move to login')
    emit('goLogin')
  }

  const closeSignupPopup = () => {
    console.log('close signup popup')
    emit('closePopup')
  }

  onActivated(() => {
    signupData.email = ''
    signupData.password = ''
    signupData.birthdate = ''
  })
</script>

<style scoped>
  .signup-popup {
    box-shadow: rgb(0 0 0 / 45%) 0px 2px 10px;
  }
</style>