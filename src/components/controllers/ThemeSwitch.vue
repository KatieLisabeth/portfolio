<template>
  <div class="theme-switch" @click="toggleTheme">
    <!-- Dynamically show Sun or Moon icon based on theme -->
    <div class="icon">
      <img v-if="!isDarkTheme" src="@/assets/icons/sun.svg" alt="Sun icon" />
      <img v-else src="@/assets/icons/moon.svg" alt="Moon icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

defineProps({
  isDarkTheme: Boolean
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
  cursor: pointer; /* Make the cursor a pointer when hovering over the switch */
}

.icon {
  margin-right: 10px;
}

.icon img {
  width: 24px;
  height: 24px;
}
</style>
