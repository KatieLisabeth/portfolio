<template>
  <div :class="[themeClass, { 'transparent-mouse': !showScroll }, 'mouse-scroll-animation']">
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

defineProps({
  showScroll: {
    type: Boolean,
    required: true
  }
})

const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark-mouse' : 'light-mouse'
})
</script>

<style scoped>
.mouse-scroll-animation {
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
  transition:
    border-color 0.5s,
    opacity 0.5s;
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

/* Mouse becomes transparent when showScroll is false */
.transparent-mouse {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
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
