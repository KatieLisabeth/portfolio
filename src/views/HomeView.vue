<template>
  <div class="container">
    <div class="content">
      <!-- Image on the left -->
      <div class="photo">
        <img src="/src/assets/photo.png" alt="Photo" />
      </div>
      <!-- Text on the right -->
      <div class="text">
        <h2>Hello I'm Katie</h2>
        <ScriptEl />
      </div>
    </div>
    <!-- Carousel at the bottom -->
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
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.text {
  flex: 1;
  padding-left: 1rem;
  color: var(--theme-text-color);
}

.carousel {
  width: 100%;
  margin-top: 7rem;
}
</style>
