<template>
  <header :style="{ backgroundColor: currentTheme.secondary, color: currentTheme.text }">
    <NavBar :isDarkTheme="isDarkTheme" @updateTheme="updateTheme" />
  </header>

  <main>
    <section id="home" class="section">
      <HomeView :themeTextColor="currentTheme.text" />
      <MouseEl v-if="showScrollAnimation" />
    </section>

    <section id="about" class="section">
      <h1>About Section</h1>
      <p>This is the about section content.</p>
    </section>

    <section id="services" class="section">
      <h1>Services Section</h1>
      <p>This is the services section content.</p>
    </section>

    <section id="contact" class="section">
      <h1>Contact Section</h1>
      <p>This is the contact section content.</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import MouseEl from '@/components/elements/MouseEl.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import { useScroll } from '@/utils/useScroll'
import { storeToRefs } from 'pinia'
import { defineAsyncComponent, ref, watch } from 'vue'
import { useThemeStore } from './store'

// Lazy-loaded components
const HomeView = defineAsyncComponent(() => import('@/views/HomeView.vue'))

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

const isDarkTheme = ref(currentTheme.value === themeStore.themes.dark)

watch(currentTheme, (newTheme) => {
  isDarkTheme.value = newTheme === themeStore.themes.dark
  document.body.style.backgroundColor = newTheme.primary
  document.body.style.color = newTheme.text
})

// Toggle theme handler
const updateTheme = () => {
  themeStore.toggleTheme()
}

// Use composable to handle scroll and section visibility
const { showScrollAnimation } = useScroll(['home'])
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

header {
  width: 100%;
  z-index: 1000;
  margin-bottom: 30px;
}

.section {
  width: 100vw;
  height: 100vh;
  padding: 4rem 1rem;
  text-align: center;
}

.section:nth-of-type(odd) {
  background-color: transparent;
}

.section:nth-of-type(even) {
  background-color: transparent;
}
</style>
