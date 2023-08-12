import { create, useStore } from 'zustand'

type ThemeType = 'dark' | 'light'

interface themeState {
  theme: ThemeType
  changeTheme: () => void
}

const themeStore = create<themeState>((set, get) => ({
  theme: 'dark',
  changeTheme() {
    const actualState = get().theme

    if (actualState === 'dark') {
      set(() => ({ theme: 'light' }))
    } else {
      set(() => ({ theme: 'dark' }))
    }

    console.log(actualState)
  }
}))

export const useThemeStore = () => useStore(themeStore)
