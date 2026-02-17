import { ref, computed, watchEffect } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { setActualTheme } from '@/scripts/theme'

export const useMainStore = defineStore('main', () => {
  const theme = ref<'dark' | 'light' | 'system'>('system')
  const actualTheme = computed(() => {
    if (theme.value === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return theme.value
  })

  watchEffect(() => {
    document.documentElement.setAttribute('color-scheme', actualTheme.value)
    setActualTheme(actualTheme.value)
  })

  return { theme }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
