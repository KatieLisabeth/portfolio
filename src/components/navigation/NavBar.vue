<template>
  <div :class="[themeClass, 'header']">
    <!-- Header content -->
    <div class="header-content">
      <!-- Logo -->
      <div class="logo">
        <img v-if="themeClass === 'dark-logo'" src="/src/assets/logoD.svg" alt="Logo" />
        <img v-if="themeClass === 'light-logo'" src="/src/assets/logoL.svg" alt="Logo" />
      </div>

      <!-- Show only language switch, theme switch, and home button when on /resume -->
      <div v-if="isResumePage" class="nav-content">
        <!-- Hamburger Menu for Mobile -->
        <div class="hamburger" @click="toggleMobileNav">
          <span :style="{ backgroundColor: themeStore.currentTheme.text }"></span>
          <span :style="{ backgroundColor: themeStore.currentTheme.text }"></span>
          <span :style="{ backgroundColor: themeStore.currentTheme.text }"></span>
        </div>
        <nav :class="{ active: isMobileNavVisible }" class="nav">
          <router-link to="/" class="icon-button"><img :src="back" />{{ $t('back') }}</router-link>
          <a :href="pdfUrl" download="Kateryna_Lisabeth-Resume.pdf" class="icon-button"
            >{{ $t('download') }} <img :src="download" />
          </a>
          <LanguageSwitch />
          <div class="theme-switch">
            <ThemeSwitch :isDarkTheme="isDarkTheme" @updateTheme="emit('updateTheme')" />
          </div>
        </nav>
      </div>

      <!-- Regular header content when not on /resume -->
      <div v-else class="nav-content">
        <!-- Hamburger Menu for Mobile -->
        <div class="hamburger" @click="toggleMobileNav">
          <span :style="{ backgroundColor: themeStore.currentTheme.text }"></span>
          <span :style="{ backgroundColor: themeStore.currentTheme.text }"></span>
          <span :style="{ backgroundColor: themeStore.currentTheme.text }"></span>
        </div>

        <!-- Navigation -->
        <nav :class="{ active: isMobileNavVisible }" class="nav">
          <a v-for="link in links" :key="link.text" :href="link.href">
            {{ $t(link.text) }}
          </a>
          <router-link to="/resume" rel="noopener noreferrer">{{ $t('resume') }}</router-link>
          <LanguageSwitch />
          <div class="theme-switch">
            <ThemeSwitch :isDarkTheme="isDarkTheme" @updateTheme="emit('updateTheme')" />
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import back from '@/assets/icons/back.svg'
import download from '@/assets/icons/download.svg'
import pdfUrl from '@/assets/pdfs/EN.pdf'
import LanguageSwitch from '@/controllers/LanguageSwitch.vue'
import ThemeSwitch from '@/controllers/ThemeSwitch.vue'
import { useThemeStore } from '@/stores/useThemeStore'
import { computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  isDarkTheme: Boolean
})
const emit = defineEmits(['updateTheme'])

const themeStore = useThemeStore()
const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark-logo' : 'light-logo'
})

const route = useRoute()
const isResumePage = computed(() => route.path === '/resume')

const links = reactive([
  { text: 'about_me', href: '#about' },
  { text: 'work_experience', href: '#work' }
])

const isMobileNavVisible = ref(false)

const toggleMobileNav = () => {
  isMobileNavVisible.value = !isMobileNavVisible.value
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0.5rem;
  background: var(--primary-color);
  transition:
    background 0.5s ease,
    color 0.5s ease;
  position: relative;
}

.header-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.logo img {
  height: 50px;
}

.resume-header {
  display: flex;
  align-items: center;
}

.home-button {
  background-color: var(--primary-text);
  color: var(--background-color);
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}

.home-button:hover {
  background-color: var(--primary-color);
  color: var(--text-color);
}

.nav-content {
  display: flex;
  align-items: center;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--primary-color);
  transition: background-color 0.3s ease;
}

.nav {
  display: flex;
  justify-content: center;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.1s ease;
  font-family: 'Courier New', Courier, monospace;
  color: var(--primary-text);
}

nav a:hover {
  opacity: 0.7;
}

.theme-switch {
  display: flex;
  align-items: center;
}

.icon-button {
  width: 120px;
  display: flex;
  align-items: start;
  justify-self: center;
  img {
    padding: 0 10px;
  }
}

@media (max-width: 768px) {
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    display: none;
  }

  .nav.active {
    display: flex;
    background: #121515db;
    padding: 20px;
  }

  .hamburger {
    display: flex;
  }

  .nav a {
    margin: 0.5rem 0;
    /* color: #ef7f3eee; */
  }

  .theme-switch {
    display: none;
  }
}
</style>
