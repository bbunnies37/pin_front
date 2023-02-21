<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 w-full bg-black/60 z-[10000] flex justify-center items-center">
    <div class="signup-popup bg-white w-[484px] h-[99%] rounded-[32px] text-center">
      <div class="pt-5 px-[10px] pb-6 flex flex-col justify-center items-center">
        <div class="mt-2 mx-auto mb-[6px]">
          <img class="w-[45px] h-[45px]" src="../assets/images/pinterest-logo.png" alt="pinterest logo">
        </div>
        <div>Welcome to Pinterest</div>
        <div>Find new ideas to try</div>
        <div class="flex flex-col">
          <label for="email">Email</label>
          <input type="text" placeholder="Email" name="email">
        </div>
        <div class="flex flex-col">
          <label for="password">Password</label>
          <input type="text" placeholder="Create a password" name="password">
        </div>
        <div class="flex flex-col">
          <label for="age">Age</label>
          <input type="text" placeholder="Age" name="age">
        </div>
        <div>
          <button>Continue</button>
        </div>
      </div>
      <div>
        Create a free business account
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped>
  .signup-popup {
    box-shadow: rgb(0 0 0 / 45%) 0px 2px 10px;
  }
</style>