<template>
  <div class="container">
    <!-- Image and Text in the same height-restricted container -->
    <div class="content">
      <!-- Image  -->
      <figure class="photo">
        <img src="@/assets/photo.png" alt="Photo of Katie" />
      </figure>
      <!-- Text  -->
      <div class="text">
        <h1>Hello, I'm Katie</h1>
        <ScriptEl />
      </div>
    </div>

    <!-- Tech stack  -->

    <div class="carousel">
      <CarouselEl :images="images" />
    </div>
    <!-- Mouse  -->
    <div class="mouse">
      <MouseMove :showScroll="showScroll" />
    </div>

    <ParticleMove />
  </div>
</template>

<script setup lang="ts">
import MouseMove from '@/components/animation/MouseMove.vue'
import ParticleMove from '@/components/animation/ParticleMove.vue'
import CarouselEl from '@/components/elements/CarouselEl.vue'
import ScriptEl from '@/components/elements/ScriptEl.vue'
import { svgIcons } from '@/mixins/icons'
import { ref } from 'vue'

defineProps({
  themeTextColor: {
    type: String,
    required: true
  },
  showScroll: {
    type: Boolean,
    required: true
  }
})

const images = ref<string[]>(Object.values(svgIcons))
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  height: auto;
  margin-bottom: 2rem;
}

.photo {
  flex: 1;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: start;
}

.photo img {
  width: 400px;
  height: auto;
  object-fit: cover;
}

.text {
  width: 100%;
  color: var(--theme-text-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content {
  height: 350px;
}

.carousel {
  margin-top: 1rem;
  width: 100%;
}

.mouse {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .photo img {
    width: 100%;
    max-width: 250px;
  }

  .text {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
  }
  .mouse {
    width: 100%;
    height: 150px;
  }
  .carousel {
    margin: 0;
    width: 100%;
  }
  .container {
    justify-content: space-between;
  }
}
</style>
