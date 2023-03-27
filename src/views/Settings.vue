<template>
  <div class="my-5 px-5 flex">
    <!-- 설정 사이드 탭 -->
    <div class="w-[207px]">
      <div class="mb-2 w-[90px]">
        <a @click="">
          <div class="p-2 cursor-pointer hover:bg-secondary rounded-lg">
            <div>
              공개 프로필
            </div>
            <div class="mt-2 h-[3px] bg-black"></div>
          </div>
        </a>
      </div>
      <div class="mb-2 w-[90px] rounded-lg">
        <a @click="">
          <div class="p-2 cursor-pointer hover:bg-secondary rounded-lg">
            <div>
              홈피드 조정
            </div>
            <div class="mt-2 h-[3px] bg-black"></div>
          </div>
        </a>
      </div>
    </div>

    <div class="w-[488px]">
      <!-- 공개 프로필 -->
      <div>
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
      <div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>