<template>
  <div class="flex justify-center">
    <div
      class="rounded-full z-[4] fixed left-0 mt-[16px] bg-white/[.7] justify-center flex items-center w-[48px] h-[48px]">
      <img class=" w-[20px] h-[20px]" src="src/assets/images/back_arrow.png" alt="뒤로가기 버튼">
    </div>
    <div class="pt-[10px] w-full h-full max-w-[1016px] flex-auto">
        <div class="flex rounded-[32px] justify-center shadow-lg">
          <div class="relative">
            <div class="rounded-l-lg w-[508px] h-auto">
                <div
                  class="opacity-0 hover:opacity-100 w-100 hover:bg-transparent absolute inset-0 rounded-lg flex justify-between flex-col p-[15px]">
                  <div class="font-bold text-xs flex justify-between">
                    <button class="bg-secondary px-[10px] rounded-3xl">↗chaeWon.com</button>
                  </div>
                </div>
                <img class="w-[508px] h-auto rounded-lg" :src="`src/assets/images/${images[props.idx % 4]}`"
                  :alt="images[props.idx % 4]">
              </div>
            </div>
            <div class="h-full w-[508px] pt-[32px]">
              <div class="px-[32px] w-full h-full">
                <div class="flex justify-between">
                  <div class="flex justify-between">
                    <div class="w-[48px] h-[48px] flex justify-center items-center">
                      <img class="w-[20px] h-[20px]" src="src/assets/images/more.png" alt="more images">
                    </div>
                    <div class="w-[48px] h-[48px] flex justify-center items-center">
                      <img class="w-[20px] h-[20px]" src="src/assets/images/download.png" alt="download images">
                    </div>
                    <div class="w-[48px] h-[48px] flex justify-center items-center">
                      <img class="w-[20px] h-[20px]" src="src/assets/images/copyLink.jpg" alt="copy link images">
                    </div>
                  </div>
                  <div class="flex justify-between items-center">
                    <div class="px-[16px] flex justify-center items-center">Profile <img
                        class="ml-[4px] w-[12px] h-[12px]" src="src/assets/images/arrow_down.png" alt="arrow down images">
                    </div>
                    <button class="text-[#FFFFFF] bg-primary p-[10px] rounded-3xl">Save</button>
                  </div>
                </div>
                <div>
                  <div class="text-[21px]">
                    Uploaded by 채원
                  </div>
                  <div class="font-bold my-4 text-[36px]">채원이의 하루</div>
                  <div class="flex justify-between items-center">
                    <div class="flex">
                      <div class="rounded-full w-[48px] h-[48px]"><img class="px-[4px] rounded-full w-[48px] h-[48px]"
                          src="src/assets/images/kawaiiChae.jpg" alt="귀여운채원이프로필사진"></div>
                      <div class="text-[14px]">
                        <div>채원</div>
                        <div>2.1k followers</div>
                      </div>
                    </div>
                    <button class="text-[#000000] bg-secondary p-[10px] rounded-3xl">follow</button>
                  </div>
                  <div>
                    <div class="flex justify-start items-center">
                      1 Comment <button class="w-[40px] h-[40px] rounded-full flex justify-center items-center"><img
                          class="w-[18px] h-[18px]" src="src/assets/images/arrow_down.png"
                          alt="arrow down images"></button>
                    </div>
                  </div>
                </div>
                <div>

                </div>
              </div>
              <CommentInput />
            </div>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import CommentInput from 'src/components/CommentInput.vue'
const images = ['angryChae.jpg', 'cuteChae.jpg', 'kawaiiChae.jpg', 'merongChae.jpg']
const props = defineProps({
  idx: {
    type: Number,
    default: 1,
  }
})
</script>
<style scoped></style>