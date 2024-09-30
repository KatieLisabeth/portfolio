<template>
  <div class="container">
    <h2 class="script">{{ displayedText }}<span class="cursor">|</span></h2>
  </div>
</template>

<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const contentStore = useContentStore()
const { t } = useI18n()

const words = contentStore.words

const currentWordIndex = ref(0)
const displayedText = ref('')
let typingInterval: number | undefined
let deletingInterval: number | undefined

// Function to "type"
const typeLetters = async (word: string) => {
  let currentLetterIndex = 0
  displayedText.value = ''
  if (typingInterval) clearInterval(typingInterval)

  await nextTick()
  typingInterval = window.setInterval(() => {
    if (currentLetterIndex < word.length) {
      displayedText.value += word[currentLetterIndex]
      currentLetterIndex++
    } else {
      clearInterval(typingInterval)
      setTimeout(() => deleteLetters(word), 2000)
    }
  }, 150)
}

// Letter wiping effect
const deleteLetters = async (word: string) => {
  let currentLetterIndex = word.length
  if (deletingInterval) clearInterval(deletingInterval)

  await nextTick() // Ensure any DOM updates are flushed before starting the interval

  deletingInterval = window.setInterval(() => {
    if (currentLetterIndex > 0) {
      displayedText.value = word.slice(0, currentLetterIndex - 1)
      currentLetterIndex--
    } else {
      clearInterval(deletingInterval)
      currentWordIndex.value = (currentWordIndex.value + 1) % words.length
      const translatedWord = t(words[currentWordIndex.value])
      typeLetters(translatedWord)
    }
  }, 100)
}

onMounted(() => {
  const translatedWord = t(words[currentWordIndex.value])
  typeLetters(translatedWord)
})

// Cleanup
onBeforeUnmount(() => {
  clearInterval(typingInterval)
  clearInterval(deletingInterval)
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  height: 100px;
  width: 100%;
  white-space: normal;
  overflow: hidden;
}

.script {
  font-size: 1.7rem;
  font-weight: bold;
  font-family: monospace;
  transition: color 0.1s ease;
  color: var(--primary-text);
  text-align: left;
  word-break: break-word;
  overflow-wrap: break-word;
  width: 100%;
  display: inline-block;
  position: relative;
}

.cursor {
  display: inline-block;
  margin-left: 5px;
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
@media (max-width: 768px) {
  .script {
    font-size: 1rem;
  }
}
</style>
