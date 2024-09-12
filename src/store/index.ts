import { defineStore } from 'pinia'
import { reactive } from 'vue'

const themes = {
  light: {
    primary: '#FFFFFF',
    secondary: '#F0F0F0',
    text: '#000000'
  },
  dark: {
    primary: '#333333',
    secondary: '#222222',
    text: '#FFFFFF'
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
      })
    },
    toggleTheme() {
      this.currentTheme =
        this.currentTheme === this.themes.light ? this.themes.dark : this.themes.light
    }
  }
})
