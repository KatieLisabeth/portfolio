<template>
  <header :style="{ backgroundColor: currentTheme.primary, color: currentTheme.text }">
    <NavBar :isDarkTheme="isDarkTheme" @updateTheme="updateTheme" />
  </header>

  <main>
    <section id="home" class="section">
      <HomeView :themeTextColor="currentTheme.text" :showScroll="showScrollAnimation" />
      <ParticleMove />
    </section>

    <section id="about" class="section">
      <AboutView />
    </section>

    <!-- Pass isWorkSectionVisible to WorkView -->
    <section id="work" class="section">
      <WorkView :isWorkSessionVisible="isVisible.work" />
    </section>

    <section id="projects" class="section">
      <ProjectsView />
    </section>
  </main>
  <footer>
    <FooterBar />
  </footer>
</template>

<script setup lang="ts">
import FooterBar from '@/components/navigation/FooterBar.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import { useScroll } from '@/utils/useScroll'

import { storeToRefs } from 'pinia'
import { defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { useThemeStore } from './store'

// Lazy-loaded components
const HomeView = defineAsyncComponent(() => import('@/views/HomeView.vue'))
const AboutView = defineAsyncComponent(() => import('@/views/AboutView.vue'))
const WorkView = defineAsyncComponent(() => import('@/views/WorkView.vue'))
const ProjectsView = defineAsyncComponent(() => import('@/views/ProjectsView.vue'))
const ParticleMove = defineAsyncComponent(() => import('./components/animation/ParticleMove.vue'))

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

const isDarkTheme = ref(currentTheme.value === themeStore.themes.dark)

// Watch for changes in the current theme to apply styles to the body
watch(currentTheme, (newTheme) => {
  isDarkTheme.value = newTheme === themeStore.themes.dark
  document.body.style.backgroundColor = newTheme.primary
  document.body.style.color = newTheme.text
})

const updateTheme = () => {
  themeStore.toggleTheme()
  themeStore.saveThemeToSessionStorage()
}

// Use scroll visibility tracking for specific sections
const { isVisible, showScrollAnimation } = useScroll(['home', 'about', 'work'])

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
  height: auto;
}

.section:nth-of-type(odd) {
  background-color: transparent;
}

.section:nth-of-type(even) {
  background-color: transparent;
}
</style>
