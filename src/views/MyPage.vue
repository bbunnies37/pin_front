<template>
  <div>
    <div class="mb-8 mt-3 flex flex-col justify-center items-center">
      <div class="my-1">
        <!-- <img src="" alt=""> -->
        <div class="w-[120px] h-[120px] rounded-full bg-secondary"></div>
      </div>
      <div class="my-1">
        <h1 class="font-semibold text-4xl">
          test user
        </h1>
        <div class="mt-2 text-sm text-gray-600 text-center">
          @{{ username }}
        </div>
      </div>
      <div class="my-1">

      </div>
      <div class="my-1">

      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const username = route.params.username
</script>