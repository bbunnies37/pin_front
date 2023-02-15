<template>
  <div class="w-100">
    <div class="flex flex-wrap flex-col content-center h-[2917px] w-[756px] relative">
      <Pin v-for="i in 20" :key="i" :idx="i"/>
    </div>
  </div>
</template>

<script setup>
import Pin from 'src/components/Pin.vue'


</script>

<style>

</style>