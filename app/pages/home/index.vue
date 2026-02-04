<script setup lang="ts"></script>

<template>
  <div
    class="c-home w-full h-full bg-cover bg-center flex flex-col items-center"
    style="
      background-image: url('https://silvermoon-hall-os.sharpdotnut.com/Static/silvermoon-hall-cover.png');
    ">
    <div class="max-w-4xl w-full mt-50 p-4 text-white">
      <Card>
        <template #title>主页</template>
        <template #content>
          <div class="flex items-center gap-4">
            <img
              src="https://irminsul-os.kuriyona.com/Static/Genshin/EmotionIcon/UI_EmotionIcon723.png"
              class="h-24 mt-4" />
            <p>「再找我？」</p>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import 'tailwindcss';
.c-home * {
  @apply text-white!;
}
.p-card {
  @apply bg-transparent backdrop-blur-xl backdrop-brightness-75;
}
</style>
