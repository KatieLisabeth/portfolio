<template>
  <section id="home" class="section">
    <HomeView :themeTextColor="currentTheme.text" :showScroll="showScrollAnimation" />
    <ParticleMove />
  </section>

  <section id="about" class="section">
    <AboutView />
  </section>

  <section id="work" class="section">
    <WorkView :isWorkSessionVisible="isVisible.work" />
  </section>

  <!-- <section id="projects" class="section">
    <ProjectsView />
  </section> -->
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store'
import { useScroll } from '@/utils/useScroll'
import { storeToRefs } from 'pinia'
import { defineAsyncComponent } from 'vue'

// Lazy-loaded components
const HomeView = defineAsyncComponent(() => import('@/views/HomeView.vue'))
const AboutView = defineAsyncComponent(() => import('@/views/AboutView.vue'))
const WorkView = defineAsyncComponent(() => import('@/views/WorkView.vue'))
// const ProjectsView = defineAsyncComponent(() => import('@/views/ProjectsView.vue'))
const ParticleMove = defineAsyncComponent(() => import('@/components/animation/ParticleMove.vue'))

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

// Use scroll visibility tracking for specific sections
const { isVisible, showScrollAnimation } = useScroll(['home', 'about', 'work'])
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
}
.section {
  width: 100%;
  height: auto;
  overflow: hidden;
}
</style>
