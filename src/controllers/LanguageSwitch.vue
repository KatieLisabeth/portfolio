<template>
  <div class="language-switch">
    <select v-model="currentLocale">
      <option v-for="(lang, key) in availableLanguages" :value="key" :key="key">
        {{ flagMapper[key] }} {{ lang }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const availableLanguages = {
  'en-US': 'English',
  'nl-NL': 'Nederlands'
}

const flagMapper = {
  'en-US': '🇺🇸',
  'nl-NL': '🇳🇱'
}

const { locale } = useI18n()
const currentLocale = ref(locale.value)

// Watch for changes in currentLocale and update the i18n locale
watch(currentLocale, (newLocale) => {
  locale.value = newLocale
})
</script>

<style scoped>
.language-switch {
  position: relative;
  display: inline-block;
}
select {
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  background-color: transparent;
  color: var(--text-color);
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

select:focus,
select:active {
  border: none;
  box-shadow: 0 0 5px var(--primary-color);
  outline: none;
}

.dropdown-toggle {
  padding: 10px;
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: transparent;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 5px 0 0 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li.active {
  background-color: transparent;
  color: transparent;
}

.dropdown-menu li:hover {
  background-color: var(--hover-color);
  color: transparent;
}

.language-change-message {
  margin-top: 10px;
  color: var(--primary-color);
  font-weight: bold;
  animation: fadeOut 3s forwards; /* Optional animation */
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
