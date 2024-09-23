<template>
  <div class="container">
    <ParticleMove class="particles-background" />
    <div class="cards-container">
      <CardsEl :cards="cards" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ParticleMove from '@/components/animation/ParticleMove.vue'
import CardsEl from '@/components/elements/CardsEl.vue'
import { ref } from 'vue'
const cards = ref([
  {
    title: 'Comment Card 1',
    image: '/src/assets/images/image.png',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum Donec nunc ligula, vulputate quis mollis eu, interdum quis libero Donec nunc ligula, vulputate quis mollis eu, interdum quis libero Donec nunc ligula, vulputate quis mollis eu, interdum quis libero...`
  },
  {
    title: 'Comment Card 2',
    image: '@',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum Donec nunc ligula, vulputate quis mollis eu, interdum quis libero Donec nunc ligula, vulputate quis mollis eu, interdum quis libero Donec nunc ligula, vulputate quis mollis eu, interdum quis libero...`
  },
  {
    title: 'Comment Card 3',
    image: '',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum Donec nunc ligula, vulputate quis mollis eu, interdum quis libero Donec nunc ligula, vulputate quis mollis eu, interdum quis libero Donec nunc ligula, vulputate quis mollis eu, interdum quis libero...`
  },
  {
    title: 'Comment Card 4',
    image: '',
    text: `Vestibulum nunc massa, gravida quis porta nec, feugiat id metus...`
  },
  {
    title: 'Comment Card 5',
    image: '',
    text: `Donec nunc ligula, vulputate quis mollis eu, interdum quis libero...`
  },
  {
    title: 'Comment Card 4',
    image: '',
    text: `Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nunc ligula, vulputate quis mollis eu, interdum quis libero Donec nunc ligula, vulputate quis mollis eu, interdum quis libero Donec nunc ligula, vulputate quis mollis eu, interdum quis libero..`
  }
])
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
