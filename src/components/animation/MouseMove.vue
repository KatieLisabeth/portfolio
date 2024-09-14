<template>
  <div :class="themeClass" class="mouse-scroll-animation">
    <div class="mouse">
      <div class="mouse-wheel"></div>
    </div>
    <!-- Down arrows -->
    <div class="arrows">
      <span class="arrow"></span>
      <span class="arrow"></span>
      <span class="arrow"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store'
import { computed } from 'vue'

// Access the theme store
const themeStore = useThemeStore()

// Computed class to change the theme dynamically
const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark-move' : 'light-move'
})
</script>

<style scoped>
.mouse-scroll-animation {
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 30px;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  position: relative;
  transition: border-color 0.5s;
}

.mouse-wheel {
  width: 4px;
  height: 10px;
  background-color: var(--primary-color);
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

.arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.arrow {
  display: block;
  width: 5px;
  height: 5px;
  transform: rotate(45deg);
  border-right: 2px solid var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  margin: 0 0 3px 4px;
  width: 16px;
  height: 16px;
  animation: mouse-scroll 1s infinite;
}

@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    top: 10px;
  }
  50% {
    opacity: 0.5;
    top: 25px;
  }
  100% {
    opacity: 1;
    top: 10px;
  }
}
</style>
