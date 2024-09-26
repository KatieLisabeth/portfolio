<template>
  <header :style="{ backgroundColor: currentTheme.primary, color: currentTheme.text }">
    <NavBar :isDarkTheme="isDarkTheme" @updateTheme="updateTheme" />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <FooterBar />
  </footer>
</template>

<script setup lang="ts">
import FooterBar from '@/components/navigation/FooterBar.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import { useThemeStore } from '@/stores/useThemeStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

const isDarkTheme = ref(currentTheme.value === themeStore.themes.dark)

// Watch for changes in the current theme to apply styles to the body
watch(currentTheme, (newTheme) => {
  isDarkTheme.value = newTheme === themeStore.themes.dark
  document.body.style.backgroundColor = newTheme.primary
  document.body.style.color = newTheme.text
})

const updateTheme = () => {
  themeStore.toggleTheme()
  themeStore.saveThemeToSessionStorage()
}

onMounted(() => {
  themeStore.loadThemeFromSessionStorage()
  document.body.style.backgroundColor = currentTheme.value.primary
  document.body.style.color = currentTheme.value.text
})
</script>
