<template>
  <div class="header">
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
        {{ link.text }}
      </a>
      <router-link to="/resume" rel="noopener noreferrer"> CV </router-link>

      <div class="theme-switch">
        <ThemeSwitch :isDarkTheme="isDarkTheme" @updateTheme="emit('updateTheme')" />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store'
import { computed, reactive, ref } from 'vue'
import ThemeSwitch from '../controllers/ThemeSwitch.vue'

defineProps({
  isDarkTheme: Boolean
})
const emit = defineEmits(['updateTheme'])

const themeStore = useThemeStore()
const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark-logo' : 'light-logo'
})

const links = reactive([
  { text: 'About me', href: '#about' },
  { text: 'Work experience', href: '#work' },
  { text: 'Projects', href: '#projects' }
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
  background-color: var(--primary-color);
  transition:
    background-color 0.5s ease,
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
    background-color: var(red);
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
