<template>
  <footer
    class="footer"
    :style="{
      backgroundColor: themeStore.currentTheme.primary,
      color: themeStore.currentTheme.text
    }"
  >
    <div class="footer-left">
      <p>Kateryna Lisabeth © 2024 - Licensed under MIT. Built with Vue & TypeScript</p>
    </div>
    <div class="footer-right">
      <a v-for="social in socialLinks" :key="social.icon" :href="social.url" target="_blank">
        <img :src="social.icon" :alt="social.name" class="social-icon" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import gitHubIcon from '@/assets/icons/github.svg'
import linkedInIcon from '@/assets/icons/linkedin.svg'
import twitterIcon from '@/assets/icons/twitter.svg'
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()
const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com', icon: twitterIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: linkedInIcon },
  { name: 'GitHub', url: 'https://github.com', icon: gitHubIcon }
]
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #031b34;
  padding: 0 20px;
  color: #e0d7d7;
}

.footer-left {
  font-size: 14px;
}

.footer-right {
  display: flex;
  gap: 10px;
}

.social-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease-in-out;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.social-icon:hover {
  filter: grayscale(0%);
  transform: scale(1.1);
}
</style>
