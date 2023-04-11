<template>
  <div class="my-5 px-5 flex">
    <!-- 설정 사이드 탭 -->
    <div class="w-[207px]">
      <div class="mb-2 w-[90px]">
        <a @click="openTab('publicProfile')">
          <div class="p-2 cursor-pointer hover:bg-secondary rounded-lg">
            <div>
              공개 프로필
            </div>
            <div class="mt-2 h-[3px]" :class="{ 'bg-black': tabName === 'publicProfile' }"></div>
          </div>
        </a>
      </div>
      <div class="mb-2 w-[90px] rounded-lg">
        <a @click="openTab('homeFeed')">
          <div class="p-2 cursor-pointer hover:bg-secondary rounded-lg">
            <div>
              홈피드 조정
            </div>
            <div class="mt-2 h-[3px]" :class="{ 'bg-black': tabName === 'homeFeed' }"></div>
          </div>
        </a>
      </div>
    </div>

    <div class="w-[488px]">
      <!-- 공개 프로필 -->
      <div id="publicProfile" class="hidden tabcontent">
        <div>
          <h1 class="font-semibold text-[28px] mb-2">
            공개 프로필
          </h1>
          <div>
            회원님의 프로필을 방문하는 사용자에게 다음 정보가 표시됩니다.
          </div>
        </div>
        <div class="my-2">
          <!-- 사진 -->
          <div class="mt-8 mb-1 text-sm">
            사진
          </div>
          <div class="flex">
            <div class="mx-2">
              <!-- <img src="" alt=""> -->
              <div class="w-[75px] h-[75px] rounded-full bg-secondary"></div>
            </div>
            <div class="mx-2 flex justify-center items-center">
              <button class="bg-secondary rounded-3xl font-semibold py-2 px-3 w-[60px]">
                변경
              </button>
            </div>
          </div>

          <!-- 이름 -->
          <div class="mt-5 flex">
            <div class="px-1 flex flex-col w-2/4">
              <label for="firstName" class="text-sm h-[23px]">이름</label>
              <input name="firstName" type="text" class="px-4 py-2 rounded-2xl border-2 border-[#cdcdcd]">
            </div>
            <div class="px-1 flex flex-col w-2/4">
              <label for="lastName" class="text-sm h-[23px]">성</label>
              <input name="lastName" type="text" class="px-4 py-2 rounded-2xl border-2 border-[#cdcdcd]">
            </div>
          </div>

          <!-- 소개 -->
          <div class="mt-5 flex flex-col">
            <label for="introduction" class="text-sm pb-2">소개</label>
            <textarea name="introduction" id="introduction" class="px-4 py-2 rounded-2xl border-2 border-[#cdcdcd] resize-none" placeholder="회원님의 이야기를 들려주세요"></textarea>
          </div>

          <!-- 웹사이트 -->
          <div class="mt-5 flex flex-col">
            <label for="" class="text-sm pb-2">웹사이트</label>
            <input type="text" class="px-4 py-2 rounded-2xl border-2 border-[#cdcdcd]" placeholder="회원님의 사이트로 트래픽을 유도하는 링크를 추가하세요">
          </div>

          <!-- 사용자 이름 -->
          <div class="mt-5 flex flex-col">
            <label for="" class="text-sm pb-2">사용자 이름</label>
            <input type="text" class="px-4 py-2 rounded-2xl border-2 border-[#cdcdcd]">
          </div>
        </div>
      </div>

      <!-- 홈피드 조정 -->
      <div id="homeFeed" class="hidden tabcontent">
        <div>
          <h1 class="font-semibold text-[28px] mb-2">
            홈피드 조정
          </h1>
          <div>
            Pinterest를 자신에 맞게 <i>만들어보세요.</i> Pinterest가 아이디어를 추천하기 위<br>
            해 사용하는 세부 정보를 편집해 보세요. 본 세부 정보는 공개적으로 표시되지<br>
            않습니다.
          </div>
        </div>
        <div class="py-4">
          <div class="flex">
            <div class="mx-2">
              <div class="py-3">
                <div 
                  class="p-2 font-semibold rounded-lg hover:bg-secondary cursor-pointer"
                  @click="openSubTab('interests')"
                >
                  관심사
                  <div class="mt-2 h-[3px]" :class="{ 'bg-black': subTabName === 'interests' }"></div>
                </div>
              </div>
            </div>
            <div class="mx-2">
              <div class="py-3">
                <div 
                  class="p-2 font-semibold rounded-lg hover:bg-secondary cursor-pointer"
                  @click="openSubTab('boards')"
                >
                  보드
                  <div class="mt-2 h-[3px]" :class="{ 'bg-black': subTabName === 'boards' }"></div>
                </div>
              </div>
            </div>
            <div class="mx-2">
              <div class="py-3">
                <div 
                  class="p-2 font-semibold rounded-lg hover:bg-secondary cursor-pointer"
                  @click="openSubTab('following')"
                >
                  팔로잉
                  <div class="mt-2 h-[3px]" :class="{ 'bg-black': subTabName === 'following' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 관심사 탭 -->
          <div id="interests" class="py-1 hidden sub-tab-content">
            <div class="mb-3 text-gray-500">
              관심사를 추가하고 관련 아이디어를 확인해 보세요. 관심사를 삭제하면 더 이상<br>
              관심이 없는 관련 아이디어가 표시되지 않습니다.
            </div>
          </div>

          <!-- 보드 탭 -->
          <div id="boards" class="py-1 hidden sub-tab-content">
            <div class="mb-3 text-gray-500">
              이와 관련된 아이디어를 더 이상 보고 싶지 않으면 보드를 끄세요. 걱정마세요.<br>
              보드에는 아무런 영향을 미치지 않습니다.
            </div>
          </div>
          
          <!-- 팔로잉 탭 -->
          <div id="following" class="py-1 hidden sub-tab-content">
            <div class="mb-3 text-gray-500">
              게시된 핀을 더 이상 보지 않으려면 해당 개인이나 브랜드를 언팔로우하세요.<br>
              이들에게는 통지되지 않습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const tabName = ref('publicProfile')

  const openTab = (menu: string) => {
    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName('tabcontent') as HTMLCollectionOf<HTMLElement>
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
    }

    const tab = document.getElementById(menu)
    if (tab) {
      tab.style.display = 'block'
      tabName.value = menu
    }
  }

  const subTabName = ref('interests')

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
    openTab('publicProfile')
    openSubTab('interests')
  })
</script>

<style scoped>

</style>