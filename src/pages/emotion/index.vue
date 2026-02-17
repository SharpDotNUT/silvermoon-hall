<script setup lang="ts">
import { ref } from 'vue'
import type { EmojiData } from './types'
import { computed } from 'vue'
import ky from 'ky'
import { openInNewTab } from '@/scripts/tools'
import { TextMap } from '@/scripts/text-map'

const data = ref<EmojiData>()
const id = ref(-1)
const search = ref('')

const TM = new TextMap('https://irminsul-os.kuriyona.com/Data/emotion')
ky.get<EmojiData>('https://irminsul-os.kuriyona.com/Data/emotion/meta.json')
  .json()
  .then((Data) => {
    data.value = Data
    id.value = 1
  })

const result = computed(() => {
  if (search.value) {
    return data.value?.data.filter((item) =>
      TM.get('zh-Hans', item.contentTextMapHash)?.includes(search.value)
    )
  }
  return data.value?.data.filter((item) => item.setID === id.value)
})

const getUrl = (icon: string) => {
  return (
    'https://irminsul-os.kuriyona.com/Static/Genshin/EmotionIcon/' +
    icon +
    '.png'
  )
}
</script>

<template>
  <div class="flex flex-col h-full p-4 gap-4 overflow-hidden">
    <var-input :placeholder="'搜索'" v-model="search" />
    <div v-if="data" class="flex gap-4 h-full overflow-hidden">
      <var-tabs
        v-if="!search"
        class="h-full! flex flex-col gap-1"
        v-model:active="id"
        layout-direction="vertical">
        <var-tab v-for="set in data.set" :key="set.id" :name="set.id">
          <div
            style="margin: 2px; display: flex; gap: 5px; align-items: center">
            <img :src="getUrl(set.icon)" />
            <span class="hidden md:block">
              {{ TM.get('zh-Hans', set.nameTextMapHash) }}
            </span>
          </div>
        </var-tab>
      </var-tabs>
      <div class="w-full h-full pr-1 overflow-y-auto">
        <div class="grid grid-cols-[repeat(auto-fit,minmax(151px,1fr))] gap-2">
          <var-card v-for="item in result">
            <div class="h-fit flex flex-col gap-2 items-center">
              <img
                :key="id"
                :src="getUrl(item.icon)"
                height="128"
                width="128" />
              <span>{{ TM.get('zh-Hans', item.contentTextMapHash) }}</span>
              <span class="flex gap-1">
                <VarButton
                  type="primary"
                  round
                  @click="openInNewTab(getUrl(item.icon))">
                  <span class="material-symbols-outlined"> open_in_new </span>
                </VarButton>
              </span>
            </div>
          </var-card>
        </div>
      </div>
    </div>
    <div v-else id="content" class="flex" style="justify-content: center">
      <var-loading />
    </div>
  </div>
</template>
