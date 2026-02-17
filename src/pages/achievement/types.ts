export interface AchievementData {
  achievements: { [key: string]: Achievement }
  achievementGroups: { [key: string]: AchievementGroup }
  achievementGoals: { [key: string]: AchievementGoal }
  achievementStruct: AchievementStruct
}

export interface AchievementGoal {
  id: number
  order: number
  nameHash: number
  rewardCount: number
  achievementsCount: number
  groupsCount: number
  achievementGroups: string[]
}

export interface AchievementGroup {
  achievements: string[]
  showCount: boolean
  finalProgress: number
  rewardCount: number
}

export interface AchievementStruct {
  rewardCount: number
  achievementsCount: number
  groupsCount: number
  goalsCount: number
  goals: string[]
}

export interface Achievement {
  id: number
  nameHash: number
  descriptionHash: number
  progress: number
  reward: number
}
