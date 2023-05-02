<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 w-full bg-black/60 z-[10000] flex justify-center items-center">
    div
  </div>
</template>

<script setup lang="ts">
import { reactive, onActivated } from 'vue'

const emit = defineEmits([
    'goCreate',
  'closePopup',
])


const closePopup = () => {
  console.log('close create idea pin popup')
  emit('closePopup')
}

onActivated(() => {
})
</script>

<style scoped>.signup-popup {
  box-shadow: rgb(0 0 0 / 45%) 0px 2px 10px;
}</style>