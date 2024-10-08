<template>
  <div class="container">
    <div class="content">
      <!-- Image  -->
      <figure class="photo">
        <img
          v-if="themeClass === 'dark-photo'"
          src="@/assets/images/photo.png"
          alt="Photo of Katie"
        />
      </figure>

      <div :class="[themeClass, 'text']">
        <h1>{{ $t('hello_im') }}</h1>
        <ScriptEl />
      </div>
    </div>

    <div class="carousel">
      <CarouselEl :images="images" />
    </div>
    <!-- Mouse  -->
    <div class="mouse">
      <MouseScroll :showScroll="showScroll" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { carouselIcons } from '@/assets'
import MouseScroll from '@/components/animation/MouseScroll.vue'
import CarouselEl from '@/components/elements/CarouselEl.vue'
import ScriptEl from '@/components/elements/ScriptEl.vue'
import { useThemeStore } from '@/stores/useThemeStore'
import { computed, ref } from 'vue'

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

const images = ref<string[]>(Object.values(carouselIcons))

const themeStore = useThemeStore()
const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark-photo' : 'light-photo'
})
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
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
  width: 280px;
  height: auto;
  object-fit: cover;
  box-shadow:
    inset 0.3px 0.3px 2px #06d16f95,
    inset -3px -3px 10px #00000066,
    5px 5px 20px #00000033;
  border-radius: 50%;
  margin: 2rem;
}

.text {
  width: 100%;
  color: var(--theme-text-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    font-family:  monospace;
  }
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
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .photo img {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }

  .text {
    width: 100%;
    height: auto;
    padding: 0 1rem;
    text-align: center;
    &.light-photo {
      padding: 10rem 3rem;
    }
  }
  .mouse {
    width: 100%;
    height: 250px;
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
