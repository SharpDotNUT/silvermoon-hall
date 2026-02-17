<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'
import { onMounted, useTemplateRef, watch } from 'vue'
import { RouterLink } from 'vue-router'
const audio = useTemplateRef<HTMLAudioElement>('audio')
const { playing, ended } = useMediaControls(audio, {
  src: 'https://silvermoon-hall-os.sharpdotnut.com/Static/Audio/Lullaby-of-the-New-Moon-I-Somnias-a-Luna.ogg'
})
onMounted(() => {
  playing.value = true
  watch(ended, () => {
    playing.value = true
  })
})
</script>

<template>
  <div
    class="absolute w-full h-full top-0 bg-cover bg-center flex items-center justify-center">
    <audio ref="audio" />
    <img
      src="https://silvermoon-hall-os.sharpdotnut.com/Static/silvermoon-hall-cover.png"
      class="absolute top-[-1] left-0 w-full h-full object-cover brightness-75" />
    <div class="absolute z-10 text-white flex flex-col items-center">
      <h1 class="text-3xl mb-4">「银月之庭」</h1>
      <h2 class="text-xl mb-4">
        "<ruby>Dormi cara columbula<rt>睡吧，睡吧，我的小鸽子</rt></ruby
        >, <ruby>O columbula mea<rt>睡吧，我亲爱的小鸽子呀</rt></ruby
        >."
      </h2>
      <div class="flex gap-2">
        <a
          href="https://github.com/SharpDotNUT/silvermoon-hall"
          target="_blank">
          <VarButton>Github 仓库</VarButton>
        </a>
        <VarButton @click="playing = !playing" round>
          <span v-if="!playing" class="material-symbols-outlined"
            >play_arrow</span
          >
          <span v-else class="material-symbols-outlined">pause</span>
        </VarButton>
        <RouterLink to="/home">
          <VarButton>进入</VarButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
