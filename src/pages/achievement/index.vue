<script setup lang="ts">
import { useAchievementStore } from '.'

const store = useAchievementStore()
</script>

<template>
  <div>
    <var-pagination
      v-model:current="store.page"
      v-model:size="store.pageSize"
      :total="store.data.achievementStruct.achievementsCount"
      :simple="false" />
    {{ store.page }}
    <div v-for="a in store.list" class="flex gap-5">
      <p>{{ store.text(a.nameHash) }}</p>
      <p>{{ store.text(a.descriptionHash) }}</p>
      <p>{{ a.reward }} 原石</p>
    </div>
  </div>
</template>
