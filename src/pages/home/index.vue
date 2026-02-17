<script setup lang="ts"></script>

<template>
  <div
    class="c-home absolute w-full h-full top-0 bg-cover bg-center flex flex-col items-center"
    style="
      background-image: url('https://silvermoon-hall-os.sharpdotnut.com/Static/silvermoon-hall-cover-dark.png');
    ">
    <div class="flex flex-col gap-4 max-w-4xl w-full mt-50 p-4 text-white">
      <div class="p-card">
        <h1 class="text-xl">主页</h1>
        <div class="flex items-center gap-4">
          <img
            src="https://irminsul-os.kuriyona.com/Static/Genshin/EmotionIcon/UI_EmotionIcon723.png"
            class="h-24 mt-4" />
          <p>「再找我？」</p>
        </div>
      </div>
      <div class="p-card">
        <RouterLink to="/emotion">表情包浏览&查询</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import 'tailwindcss';
.c-home * {
  @apply text-white!;
}
.p-card {
  @apply p-4 rounded-2xl bg-transparent backdrop-blur-xl backdrop-brightness-75;
}
</style>
