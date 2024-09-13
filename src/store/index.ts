import { defineStore } from 'pinia'
import { reactive } from 'vue'

const themes = {
  light: {
    primary: '#E0D7D7',
    secondary: '#C9B8B8',
    text: '#473131'
  },
  dark: {
    primary: '#473131',
    secondary: '#473131',
    text: '#86d9ca'
  }
}

export const useThemeStore = defineStore('themeStore', {
  state: () => ({
    currentTheme: reactive(themes.light),
    themes
  }),
  actions: {
    detectSystemTheme() {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.currentTheme = prefersDark ? this.themes.dark : this.themes.light

      // Add listener to detect changes in the system theme
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        this.currentTheme = e.matches ? this.themes.dark : this.themes.light
        this.saveThemeToSessionStorage() // Save theme when system theme changes
      })
    },
    toggleTheme() {
      this.currentTheme =
        this.currentTheme === this.themes.light ? this.themes.dark : this.themes.light
      this.saveThemeToSessionStorage() // Save theme when toggled manually
    },
    saveThemeToSessionStorage() {
      sessionStorage.setItem('theme', this.currentTheme === this.themes.light ? 'light' : 'dark')
    },
    loadThemeFromSessionStorage() {
      const storedTheme = sessionStorage.getItem('theme')
      if (storedTheme) {
        this.currentTheme = storedTheme === 'light' ? this.themes.light : this.themes.dark
      }
    }
  }
})
