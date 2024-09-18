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
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
      <div class="footer-center">
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
      <div class="footer-right">
        <p>© Kateryna Lisabeth 2024 - Built with Vue & TypeScript</p>
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
  flex-wrap: wrap;
  gap: 20px; /* Adds spacing between elements */
}

.footer-left {
  flex: 1;
  text-align: left;
}

.footer-right {
  flex: 1;
  text-align: right;
}

.footer-center {
  display: flex;
  gap: 15px;
  justify-content: center; /* Aligns social icons in the center by default */
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

/* Media queries for responsive design */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .footer-left,
  .footer-right {
    text-align: left;
    flex: 0 0 auto;
  }

  .footer-center {
    order: 2;
    flex: 0 0 auto;
  }

  .footer-left,
  .footer-right {
    order: 1;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 15px;
  }

  .social-icon {
    width: 20px;
    height: 20px;
  }

  .footer-left,
  .footer-right {
    font-size: 12px;
  }

  .footer-left,
  .footer-right,
  .footer-center {
    flex: 0 0 auto;
  }

  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
