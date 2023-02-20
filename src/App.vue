<template>
  <div class="h-screen">
    <div class="h-1/6 bg-slate-600 text-white">
      페이지 헤더 영역
      <router-link to="/pin-builder">create pin</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>