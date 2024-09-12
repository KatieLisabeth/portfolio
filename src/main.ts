import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { useThemeStore } from './store'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

const themeStore = useThemeStore()
themeStore.detectSystemTheme()

app.mount('#app')
