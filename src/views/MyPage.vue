<template>
  <div>
    <!-- 유저 프로필 -->
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
      <div class="my-1 text-base font-semibold">
        팔로잉 {{ followCnt }}명
      </div>
      <div class="my-1 pt-2 flex justify-center items-center">
        <div class="mx-1">
          <button class="py-3 px-4 rounded-3xl bg-secondary min-w-[60px] font-semibold">
            공유
          </button>
        </div>
        <div class="mx-1">
          <button class="py-3 px-4 rounded-3xl bg-secondary font-semibold">
            프로필 수정
          </button>
        </div>
      </div>
    </div>
    
    <!-- 생성됨/저장됨 탭 -->
    <div class="mb-4 flex justify-center items-center">
      <div class="mx-2">
        <div class="py-3">
          <div 
            class="p-2 font-semibold rounded-lg hover:bg-secondary cursor-pointer"
            @click="openSubTab('created')"
          >
            생성됨
            <div class="mt-2 h-[3px]" :class="{ 'bg-black': subTabName === 'created' }"></div>
          </div>
        </div>
      </div>
      <div class="mx-2">
        <div class="py-3">
          <div 
            class="p-2 font-semibold rounded-lg hover:bg-secondary cursor-pointer"
            @click="openSubTab('saved')"
          >
            저장됨
            <div class="mt-2 h-[3px]" :class="{ 'bg-black': subTabName === 'saved' }"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 생성됨 탭 -->
    <div id="created" class="hidden sub-tab-content">
      <!-- 생성된 핀이 없는 경우 -->
      <div class="py-4 flex flex-col justify-center items-center">
        <span class="block">아직 아무것도 없네요! 내가 만든 핀이 여기에 보관됩니다.</span>
        <div class="py-4">
          <button class="py-3 px-3 bg-primary text-white rounded-3xl hover:bg-red-700">
            아이디어 핀 만들기
          </button>
        </div>
      </div>

      <!-- 생성된 핀이 있는 경우 -->
      <div>

      </div>
    </div>

    <!-- 저장됨 탭 -->
    <div id="saved" class="hidden sub-tab-content">
      <!-- 저장된 핀이 없는 경우 -->
      <!-- <div class="py-4 flex flex-col justify-center items-center">
        아직 아무것도 없네요!
      </div> -->

      <!-- 저장된 핀이 있는 경우 -->
      <div>
        <div class="my-1 px-4 flex justify-between">
          <button class="w-12 h-12 rounded-full flex justify-center items-center hover:bg-secondary">
            <img class="w-5" src="../assets/filter-icon.png" alt="sort items">
          </button>
          <button class="w-12 h-12 rounded-full flex justify-center items-center hover:bg-secondary">
            <img class="w-4" src="../assets/add-icon.png" alt="create new pin">
          </button>
        </div>
        <div class="mt-1 mb-12 flex flex-wrap justify-center">
          <div class="p-2">
            <a to="" class="no-underline rounded-lg hover:cursor-pointer">
              <div class="w-[236px]">
                <div class="h-[157px] bg-secondary rounded-2xl">

                </div>
                <div class="py-2">
                  <h2 class="text-xl font-semibold">모든 핀</h2>
                  <div class="mt-1 flex">
                    <div class="text-xs">핀 14개</div>
                    <div class="pl-2 text-xs text-gray-500">8주</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="p-2">
            <a to="" class="no-underline rounded-lg hover:cursor-pointer">
              <div class="w-[236px]">
                <div class="h-[157px] bg-secondary rounded-2xl">

                </div>
                <div class="py-2">
                  <h2 class="text-xl font-semibold">모든 핀</h2>
                  <div class="mt-1 flex">
                    <div class="text-xs">핀 14개</div>
                    <div class="pl-2 text-xs text-gray-500">8주</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="p-2">
            <a to="" class="no-underline rounded-lg hover:cursor-pointer">
              <div class="w-[236px]">
                <div class="h-[157px] bg-secondary rounded-2xl">

                </div>
                <div class="py-2">
                  <h2 class="text-xl font-semibold">모든 핀</h2>
                  <div class="mt-1 flex">
                    <div class="text-xs">핀 14개</div>
                    <div class="pl-2 text-xs text-gray-500">8주</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const username = route.params.username
const followCnt = ref(1)

const subTabName = ref('created')

const openSubTab = (menu: string) => {
  // Get all elements with class="sub-tab-content" and hide them
  const tabcontent = document.getElementsByClassName('sub-tab-content') as HTMLCollectionOf<HTMLElement>
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }

  const subTab = document.getElementById(menu)
  if (subTab) {
    subTab.style.display = 'block'
    subTabName.value = menu
  }
}

onMounted(() => {
  openSubTab('saved')
})
</script>