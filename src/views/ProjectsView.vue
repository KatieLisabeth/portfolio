<template>
  <div class="container">
    <ParticleMove class="particles-background" />
    <div class="cards-container">
      <CardsEl :cards="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ParticleMove from '@/components/animation/ParticleMove.vue'
import CardsEl from '@/components/elements/CardsEl.vue'
import { useContentStore } from '@/stores/useContentStore'

const contentStore = useContentStore()

const projects = contentStore.projects
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.particles-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.cards-container {
  position: relative;
  z-index: 1;
  padding: 20px;
  margin-top: 50px;
}
</style>
