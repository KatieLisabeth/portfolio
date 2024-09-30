<template>
  <div :class="[themeClass, 'container']">
    <h1>{{ $t('employment_history') }}</h1>

    <div class="timeline-container">
      <!-- Timeline  -->
      <TimelineEl :isWorkSessionVisible="isWorkSessionVisible" :items="timelineItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TimelineEl from '@/components/elements/TimelineEl.vue'
import { useContentStore } from '@/stores/useContentStore'
import { useThemeStore } from '@/stores/useThemeStore'
import { computed } from 'vue'

defineProps({
  isWorkSessionVisible: {
    type: Boolean,
    required: true
  }
})

const contentStore = useContentStore()
const timelineItems = contentStore.work

const themeStore = useThemeStore()
const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark-card' : 'light-card'
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 2rem;
}

.container h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  font-family: monospace;
}

.timeline-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #e8e8e8;
}

@media (max-width: 1400px) {
  .timeline-container::before {
    width: 3px;
  }
}

@media (max-width: 768px) {
  .timeline-container::before {
    left: 1rem;
  }
}

@media (max-width: 480px) {
  .timeline-container::before {
    display: none;
  }
}
</style>
