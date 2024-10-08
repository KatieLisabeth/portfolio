<template>
  <footer :class="[themeClass, 'footer']">
    <div class="footer-content">
      <div class="footer-left">
        <p>Privacy Policy</p>
      </div>
      <div class="footer-right">
        <p>© Kateryna Lisabeth 2024 - {{ $t('built_with') }} Vue & TypeScript</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/useThemeStore'
import { computed } from 'vue'

const themeStore = useThemeStore()
const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark' : 'light'
})
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 10px 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  background-color: var(--primary-color);
  color: var(--primary-text);
  font-family: monospace;
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
  gap: 20px;
}

.footer-left {
  flex: 1;
  text-align: left;
}

.footer-right {
  flex: 1;
  text-align: right;
}

.social-icon {
  width: 24px;
  height: 24px;
  transition:
    transform 0.2s ease-in-out,
    filter 0.3s ease;
  filter: var(--dark);
}

.social-icon:hover {
  filter: grayscale(0%);
  transform: scale(1.15);
}

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
