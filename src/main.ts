import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import { useThemeStore } from '@/stores/useThemeStore'
import { i18n } from './utils/i18n'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(createPinia())

const themeStore = useThemeStore()
themeStore.detectSystemTheme()

app.mount('#app')
