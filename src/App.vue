<template>
  <div class="h-screen">
    <div class="h-1/6 bg-slate-600 text-white">페이지 헤더 영역</div>
    <RouterView class="h-5/6"></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>