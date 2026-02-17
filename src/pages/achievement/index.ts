import { acceptHMRUpdate, defineStore } from 'pinia'
import type { AchievementData } from './types'
import { computed, ref } from 'vue'
import { TextMap } from '@/scripts/text-map'
import ky from 'ky'
import { pagination } from '@/scripts/pagination'

export const useAchievementStore = defineStore('achievement', () => {
  const data = ref<AchievementData>({
    achievements: {},
    achievementGroups: {},
    achievementGoals: {},
    achievementStruct: {
      rewardCount: 0,
      achievementsCount: 0,
      groupsCount: 0,
      goalsCount: 0,
      goals: []
    }
  })
  const locale = ref('zh-Hans')

  const page = ref(0)
  const pageSize = ref(10)

  const TM = new TextMap('https://irminsul-os.kuriyona.com/Data/achievement')
  ky.get<AchievementData>(
    'https://irminsul-os.kuriyona.com/Data/achievement/meta.json'
  )
    .json()
    .then((data_) => {
      data.value = data_
    })

  const list = computed(() => {
    const total = data.value.achievementStruct.achievementsCount
    const { start, end } = pagination(total, page.value, pageSize.value)
    console.log(start, end)
    return Object.values(data.value.achievements).slice(start, end)
  })

  const text = (id: number, params?: string[]) => {
    let text_ = TM.get(locale.value, id) || ''
    if (params?.[0]) {
      text_ = text_.replace('{param0}', params[0])
    }
    return text_
  }

  return {
    data,
    page,
    pageSize,
    list,
    text
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAchievementStore, import.meta.hot))
}
