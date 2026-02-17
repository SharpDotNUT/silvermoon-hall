<script setup lang="ts">
import { useAchievementStore } from '.'

const store = useAchievementStore()
</script>

<template>
  <div class="p-4 overflow-hidden">
    <div class="h-full flex flex-col gap-2">
      <var-pagination
        v-model:current="store.page"
        v-model:size="store.pageSize"
        :total="store.data.achievementStruct.achievementsCount"
        :simple="false" />
      <div class="h-full pr-2 flex flex-col gap-2 overflow-auto">
        <VarCard v-for="a in store.list" class="shrink-0">
          <div class="">
            <h3 class="text-xl">{{ store.text(a.nameHash) }}</h3>
            <p>{{ store.text(a.descriptionHash, [String(a.progress)]) }}</p>
            <p>
              <span v-if="a.progress != 1"
                >进度要求：{{ a.progress }}&nbsp;|&nbsp;</span
              >
              <span>{{ a.reward }} 原石</span>
            </p>
          </div>
        </VarCard>
      </div>
    </div>
  </div>
</template>
