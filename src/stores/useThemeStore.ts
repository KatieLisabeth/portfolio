import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface Theme {
  primary: string
  text: string
}

interface Themes {
  light: Theme
  dark: Theme
}

const themes: Themes = {
  light: {
    primary: '#fff',
    text: '#0314ac'
  },
  dark: {
    primary: 'linear-gradient(90deg, #01041F 0%, #082B33 100%)',
    text: '#16d287'
  }
}

export const useThemeStore = defineStore('themeStore', {
  state: () => ({
    currentTheme: reactive<Theme>(themes.light),
    themes
  }),
  actions: {
    detectSystemTheme() {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.currentTheme = prefersDark ? this.themes.dark : this.themes.light
      this.applyTheme(this.currentTheme)

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        this.currentTheme = e.matches ? this.themes.dark : this.themes.light
        this.applyTheme(this.currentTheme)
      })
    },
    toggleTheme() {
      this.currentTheme =
        this.currentTheme === this.themes.light ? this.themes.dark : this.themes.light
      this.applyTheme(this.currentTheme)
    },
    applyTheme(theme: Theme) {
      const root = document.documentElement
      root.style.setProperty('--primary-color', theme.primary)
      root.style.setProperty('--text-color', theme.text)
      this.saveThemeToSessionStorage()
    },
    saveThemeToSessionStorage() {
      sessionStorage.setItem('theme', this.currentTheme === this.themes.light ? 'light' : 'dark')
    },
    loadThemeFromSessionStorage() {
      const storedTheme = sessionStorage.getItem('theme')
      if (storedTheme) {
        this.currentTheme = storedTheme === 'light' ? this.themes.light : this.themes.dark
        this.applyTheme(this.currentTheme)
      }
    }
  }
})
