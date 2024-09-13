<template>
  <div class="container">
    <div class="content">
      <!-- Image  -->
      <div class="photo">
        <img src="/src/assets/photo.png" alt="Photo" />
      </div>
      <!-- Text  -->
      <div class="text">
        <ScriptEl />
      </div>
    </div>
    <!-- Carousel -->
    <div class="carousel">
      <CarouselEl :images="images" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CarouselEl from '@/components/elements/CarouselEl.vue'
import ScriptEl from '@/components/elements/ScriptEl.vue'
import { svgIcons } from '@/mixins/icons'
import { ref } from 'vue'

defineProps({
  themeTextColor: {
    type: String,
    required: true
  }
})

const images = ref<string[]>(Object.values(svgIcons))
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
}

.photo {
  flex: 1;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 4rem;
}

.photo img {
  width: 300px;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
}

.text {
  flex: 1;
  padding-left: 1rem;
  color: var(--theme-text-color);
  height: 200px;
}

.carousel {
  width: 100%;
  margin-top: 7rem;
}
</style>
