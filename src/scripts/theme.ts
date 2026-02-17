import { ThemeColor } from '@/assets/theme'
import { StyleProvider, Themes } from '@varlet/ui'

export const setActualTheme = (theme: 'dark' | 'light') => {
  if (theme === 'light') {
    StyleProvider({
      ...Themes.md3Light,
      ...ThemeColor.light
    })
    return
  } else {
    StyleProvider({
      ...Themes.md3Dark,
      ...ThemeColor.dark
    })
  }
}
