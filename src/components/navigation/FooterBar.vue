<template>
  <footer
    class="footer"
    :style="{
      backgroundColor: themeStore.currentTheme.primary,
      color: themeStore.currentTheme.text
    }"
  >
    <div class="footer-content">
      <div class="footer-left">
        <p>Kateryna Lisabeth © 2024 - Licensed under MIT. Built with Vue & TypeScript</p>
      </div>
      <div class="footer-right">
        <a
          v-for="social in socialLinks"
          :key="social.icon"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="social.icon" :alt="social.name" class="social-icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import gitHubIcon from '@/assets/icons/gith.svg'
import linkedInIcon from '@/assets/icons/linkedin.svg'
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kateryna-lisabeth-48a8a093/',
    icon: linkedInIcon
  },
  { name: 'GitHub', url: 'https://github.com/KatieLisabeth', icon: gitHubIcon }
]
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 10px 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.5s ease,
    color 0.5s ease;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left {
  font-size: 14px;
  line-height: 1.5;
}

.footer-right {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 24px;
  height: 24px;
  transition:
    transform 0.2s ease-in-out,
    filter 0.3s ease;
  filter: grayscale(100%);
}

.social-icon:hover {
  filter: grayscale(0%);
  transform: scale(1.15);
}
</style>
