<template>
  <header :style="{ backgroundColor: currentTheme.secondary, color: currentTheme.text }">
    <NavBar :isDarkTheme="isDarkTheme" @updateTheme="updateTheme" />
  </header>

  <main>
    <section id="home" class="section">
      <HomeView :themeTextColor="currentTheme.text" />
      <MouseMove v-if="showScrollAnimation" />
    </section>

    <section id="about" class="section">
      <AboutView v-if="isVisible.about" />
    </section>

    <section id="services" class="section">
      <h1>Services Section</h1>
      <ParticleMove />
    </section>

    <section id="contact" class="section">
      <h1>Contact Section</h1>
      <p>This is the contact section content.</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import MouseMove from '@/components/animation/MouseMove.vue'
import ParticleMove from '@/components/animation/ParticleMove.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import { useScroll } from '@/utils/useScroll'

import { storeToRefs } from 'pinia'
import { defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { useThemeStore } from './store'

// Lazy-loaded components
const HomeView = defineAsyncComponent(() => import('@/views/HomeView.vue'))
const AboutView = defineAsyncComponent(() => import('@/views/AboutView.vue'))

// Theme store to manage current theme
const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

// Reactive variable to track if the current theme is dark
const isDarkTheme = ref(currentTheme.value === themeStore.themes.dark)

// Watch for changes in the current theme to apply styles to the body
watch(currentTheme, (newTheme) => {
  isDarkTheme.value = newTheme === themeStore.themes.dark
  document.body.style.backgroundColor = newTheme.primary
  document.body.style.color = newTheme.text
})

// Toggle theme handler (triggered by the header/NavBar)
const updateTheme = () => {
  themeStore.toggleTheme()
  themeStore.saveThemeToSessionStorage() // Save the theme to sessionStorage
}

// Use composable to handle scroll and section visibility (but no theme change based on scroll)
const { isVisible, showScrollAnimation } = useScroll(['home', 'about'])

// Ensure the correct theme is applied when the page is loaded
onMounted(() => {
  themeStore.loadThemeFromSessionStorage()
  document.body.style.backgroundColor = currentTheme.value.primary
  document.body.style.color = currentTheme.value.text
})
</script>
<style scoped>
html {
  scroll-behavior: smooth;
}

header {
  width: 100%;
  z-index: 1000;
  margin-bottom: 1rem;
}

.section {
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  text-align: center;
}

.section:nth-of-type(odd) {
  background-color: transparent;
}

.section:nth-of-type(even) {
  background-color: transparent;
}
</style>
