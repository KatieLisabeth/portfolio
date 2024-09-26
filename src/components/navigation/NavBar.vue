<template>
  <div :class="[themeClass, 'header']">
    <!-- Logo -->
    <div class="logo">
      <img v-if="themeClass === 'dark-logo'" src="/src/assets/logoD.svg" alt="Logo" />
      <img v-if="themeClass === 'light-logo'" src="/src/assets/logoL.svg" alt="Logo" />
    </div>

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
      <!-- <button class="language" @click="toggleLocale">{{ $t('switch_language') }}</button> -->
      <div class="theme-switch">
        <ThemeSwitch :isDarkTheme="isDarkTheme" @updateTheme="emit('updateTheme')" />
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import LanguageSwitch from '@/controllers/LanguageSwitch.vue'
import ThemeSwitch from '@/controllers/ThemeSwitch.vue'
import { useThemeStore } from '@/stores/useThemeStore'
import { computed, reactive, ref } from 'vue'

defineProps({
  isDarkTheme: Boolean
})
const emit = defineEmits(['updateTheme'])

const themeStore = useThemeStore()
const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark-logo' : 'light-logo'
})

const links = reactive([
  { text: 'about_me', href: '#about' },
  { text: 'work_experience', href: '#work' }
  // { text: 'projects', href: '#projects' }
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

.logo img {
  height: 50px;
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
nav .language {
  padding-bottom: 0.5rem;
  margin: 0 1rem;
  text-align: start;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: var(--text-color);
}

.theme-switch {
  display: flex;
  align-items: center;
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
    background: rgba(89, 92, 92, 0.541);
  }

  .hamburger {
    display: flex;
  }

  .nav a {
    margin: 0.5rem 0;
    color: rgb(183, 219, 25);
  }

  .theme-switch {
    display: none;
  }
}
</style>
