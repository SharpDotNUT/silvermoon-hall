<script setup lang="ts">
import { useMainStore } from '@/stores/main'

const store = useMainStore()
</script>

<template>
  <div class="p-3 pb-2 w-full">
    <VarAppBar class="rounded-xl">
      <RouterLink to="/home"> <span>「银月之庭」</span></RouterLink>
      <template #right>
        <VarButton
          v-if="store.theme === 'light'"
          round
          text
          @click="store.theme = 'dark'">
          <span class="material-symbols-outlined">light_mode</span>
        </VarButton>
        <VarButton v-else round text @click="store.theme = 'light'">
          <span class="material-symbols-outlined">dark_mode</span>
        </VarButton>
      </template>
    </VarAppBar>
  </div>
</template>
