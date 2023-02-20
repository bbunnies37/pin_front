<template>
  <div class="relative w-[256px] px-[8px] pb-[16px] rounded-lg">
    <div class="opacity-0 hover:opacity-100 w-100 hover:bg-gray-500 absolute inset-0 rounded-lg flex justify-between flex-col p-[15px]">
      <div class="text-[#FFFFFF] flex justify-between">
        <div>profile</div>  
        <button class="bg-primary p-[10px] rounded-3xl">save</button>
      </div>
      <div class="font-bold text-xs flex justify-between">
        <button class="bg-secondary px-[10px] rounded-3xl">↗chaeWon.com</button>
        <div>
          <button class="mr-[10px] p-[5px] bg-secondary rounded-3xl">
            <img class="w-[18px]" src="src/assets/images/download.png" alt="download images">
          </button>
          <button class="p-[5px] bg-secondary rounded-3xl">
            <img class="w-[18px]" src="src/assets/images/more.png" alt="more options">
          </button>
        </div>
      </div>
    </div>
    <img class="w-100 rounded-lg" :src="`src/assets/images/${images[idx % 4]}`" :alt="images[idx % 4]">
  </div>
</template>

<script setup>

const images = ['angryChae.jpg', 'cuteChae.jpg', 'kawaiiChae.jpg', 'merongChae.jpg']
const props = defineProps({
  idx: Number
})


</script>

<style>

</style>