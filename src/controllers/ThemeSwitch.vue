<template>
  <div :class="[themeClass, 'theme-switch']" @click="toggleTheme">
    <!-- Sun or Moon icon based on theme -->
    <div class="icon">
      <img v-if="!isDarkTheme" src="@/assets/icons/moon.svg" alt="Moon icon" />
      <img v-else src="@/assets/icons/sun.svg" alt="Sun icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/useThemeStore'
import { computed } from 'vue'

defineProps({
  isDarkTheme: Boolean
})

const themeStore = useThemeStore()
const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark' : 'light'
})

const emit = defineEmits(['updateTheme'])

const toggleTheme = () => {
  emit('updateTheme')
}
</script>

<style scoped>
.theme-switch {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 5px;
}

.icon {
  margin-right: 10px;
}

.icon img {
  width: 24px;
  height: 24px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.light .icon img {
  width: 24px;
  height: 24px;
  filter: grayscale(0%);
}
.icon img:hover {
  filter: grayscale(0%);
}
</style>
