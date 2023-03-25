<template>
  <div class="bg-secondary flex justify-center items-center border-secondary border-4 overflow-auto py-10">
    <div class="pt-10 px-10 h-[690px] w-[880px] bg-white rounded-2xl flex-col">
      <!-- pin builder header -->
      <div class="h-10 mb-5 flex justify-between">
        <div class="px-3">
          <button class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-secondary">
            <img class="w-[18px]" src="../assets/more-options-icon.jpg" alt="more options">
          </button>
        </div>
        <div class="w-[236px] h-10 bg-secondary rounded-lg flex">
          <button class="bg-secondary grow px-[14px] rounded-l-lg text-left">My Saves</button>
          <button class="bg-primary flex-[0_0_auto] px-[14px] text-white rounded-r-lg">저장</button>
        </div>
      </div>

      <!-- pin build body -->
      <div class="pb-10 flex">

        <!-- pin build body left -->
        <div class="w-[311px] h-[550px] px-5">
          <div class="h-[494px] relative">
            <div class="h-full relative bg-secondary rounded-xl p-3 ">
              <div class="w-[241] h-[460px] m-1 flex flex-col justify-center items-center rounded-md border-2 border-dashed border-[#dadada]">
                <div class="p-2">
                  <img class="h-6 w-6" src="../assets/default-profile-pic.jpg" alt="click to upload">
                </div>
                <div class="mt-4 text-center text-sm font-semibold">
                  드래그하거나 클릭하여 업로드
                </div>
              </div>
              <div class="m-8 absolute bottom-0 left-0 right-0 text-xs font-normal text-center">
                Pinterest는 20MB 미만의 고화질 .jpg 파일을 사용하는 것을 권장합니다.
              </div>
            </div>
            <input class="absolute w-full h-full opacity-0 left-0 top-0 text-opacity-0 hover:cursor-pointer" type="file">
          </div>

          <div class="mt-2">
            <button class="bg-secondary py-3 px-4 min-w-[60px] w-full min-h-[48px] rounded-3xl font-semibold">
              사이트에서 저장
            </button>
          </div>
        </div>

        <!-- pin build body right -->
        <div class="px-5 w-[489px] h-[550px]">
          <div class="h-[452px]">
            <!-- title -->
            <div class="mt-8 h-[73px]">
              <textarea class="h-[46px] leading-[46px] whitespace-pre-wrap text-4xl font-bold resize-none focus:outline-none" type="text" placeholder="제목 추가" maxlength="100" rows="1"></textarea>
              <div>
                <div class="textarea-underline pt-2"></div>
                <div class="min-h-[15px] mt-1"></div>
              </div>
            </div>

            <!-- creator -->
            <div class="mt-4 flex">
              <div class="px-1">
                <img class="w-12 h-12" src="../assets/default-profile-pic.jpg" alt="profile pic">
              </div>
              <div class="px-1 flex justify-center items-center font-semibold text-sm">Christine Shin</div>
            </div>

            <!-- description -->
            <div class="mt-6">
              <textarea class="w-full h-12 mx-4 px-1 text-base leading-[48px] resize-none focus:outline-none" type="text" placeholder="사람들에게 회원님의 핀에 대해 설명해 보세요"></textarea>
              <div>
                <div class="textarea-underline pt-2"></div>
                <div class="min-h-[15px] mt-1"></div>
              </div>
            </div>

            <div>
              <button class="py-3 px-4 bg-secondary min-h-[48px] rounded-3xl font-semibold">
                대체 텍스트 추가
              </button>
            </div>
          </div>

          <div class="mt-4">
            <textarea class="w-full h-[23px] text-lg resize-none focus:outline-none" type="text" placeholder="랜딩 페이지 링크 추가" rows="1"></textarea>
            <div>
              <div class="textarea-underline pt-2"></div>
              <div class="min-h-[15px] mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.textarea-underline {
  box-shadow: rgba(142, 142, 142, 0.5) 0px 1px 0px 0px;
}
</style>