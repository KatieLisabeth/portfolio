import { useThemeStore } from '@/stores/useThemeStore'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css'
import router from './router'
import { i18n } from './utils/i18n'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(createPinia())

const themeStore = useThemeStore()
themeStore.detectSystemTheme()

app.mount('#app')
