<template>
  <div class="theme-switch" @click="toggleTheme">
    <!-- Sun or Moon icon based on theme -->
    <div class="icon">
      <img v-if="!isDarkTheme" src="@/assets/icons/moon.svg" alt="Moon icon" />
      <img v-else src="@/assets/icons/sun.svg" alt="Sun icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
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
.icon img:hover {
  filter: grayscale(0%);
}
</style>
