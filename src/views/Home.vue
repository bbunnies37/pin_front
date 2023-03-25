<template>
  <div class="w-100 flex justify-center flex-wrap">
    <div class="flex flex-wrap flex-col content-center h-[2917px] w-[1260px] relative">
      <Pin v-for="i in 30" :key="i" :idx="i" />
    </div>
  </div>
</template>

<script setup>
import Pin from 'src/components/Pin.vue'
// import router from 'vue-router'

const goPinDetail = () => {
  // , params: {index: idx}
  // router.push({name:'pinDetail'})
}

</script>

<style>

</style>