<script setup lang="ts">
// const audio = new Audio(
//   'https://silvermoon-hall-os.sharpdotnut.com/Static/Audio/Lullaby-of-the-New-Moon-I-Somnias-a-Luna.ogg'
// );
// audio.loop = true;
// audio.play();
// const playing = ref(!audio.paused);

// watch(playing, (value) => {
//   if (value) {
//     audio.play();
//   } else {
//     audio.pause();
//   }
// });
</script>

<template>
  <div
    class="absolute w-full h-full top-0 bg-cover bg-center flex items-center justify-center">
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
        <Button
          label="GitHub"
          as="a"
          href="https://github.com/SharpDotNUT/silvermoon-hall"
          target="_blank" />
        <!-- <Button
          @click="playing = !playing"
          :label="playing ? '暂停' : '播放'" /> -->
      </div>
    </div>
  </div>
</template>
