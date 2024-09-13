<template>
  <div
    class="header"
    :style="{
      backgroundColor: themeStore.currentTheme.primary,
      color: themeStore.currentTheme.text
    }"
  >
    <!-- Logo -->
    <div class="logo">
      <img src="/src/assets/logo.svg" alt="Logo" />
    </div>

    <!-- Navigation -->
    <nav class="nav">
      <a
        v-for="link in links"
        :key="link.text"
        :href="link.href"
        :style="{ color: themeStore.currentTheme.text }"
      >
        {{ link.text }}
      </a>
    </nav>

    <!-- Theme switch -->
    <div class="theme-switch">
      <ThemeSwitch :isDarkTheme="isDarkTheme" @updateTheme="emit('updateTheme')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store'
import { reactive } from 'vue'
import ThemeSwitch from '../controllers/ThemeSwitch.vue'

defineProps({
  isDarkTheme: Boolean
})
const emit = defineEmits(['updateTheme'])

const themeStore = useThemeStore()

const links = reactive([
  { text: 'About', href: '#about' },
  { text: 'Services', href: '#services' },
  { text: 'Contact', href: '#contact' }
])
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0.5rem;
  transition:
    background-color 0.5s ease,
    color 0.5s ease;
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
  transition: color 0.3s ease;
}

nav a:hover {
  opacity: 0.7;
}

.theme-switch {
  display: flex;
  align-items: center;
}
</style>
