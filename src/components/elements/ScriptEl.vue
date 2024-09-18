<template>
  <div class="container">
    <h2 class="script" :style="{ color: themeStore.currentTheme.text }">
      {{ displayedText
      }}<span class="cursor" :style="{ color: themeStore.currentTheme.text }">|</span>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store'
import { onBeforeUnmount, onMounted, ref } from 'vue'
const themeStore = useThemeStore()

const words = [
  "I'm passionate developer with a deep love for coding",
  'I specialize in creating responsive, user-friendly websites, seamlessly blending animation and design to bring ideas to life.',
  "I thrive on harnessing the power of frontend frameworks and backend logic, and I'm driven by the endless opportunities for learning and growth in the tech world.",
]

const currentWordIndex = ref(0) // Tracks the current word index
const displayedText = ref('') // Displays the typing effect text
let typingInterval: number | undefined
let deletingInterval: number | undefined

// Function to "type"
const typeLetters = (word: string) => {
  let currentLetterIndex = 0
  displayedText.value = ''
  if (typingInterval) clearInterval(typingInterval)
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
const deleteLetters = (word: string) => {
  let currentLetterIndex = word.length
  if (deletingInterval) clearInterval(deletingInterval)
  deletingInterval = window.setInterval(() => {
    if (currentLetterIndex > 0) {
      displayedText.value = word.slice(0, currentLetterIndex - 1)
      currentLetterIndex--
    } else {
      clearInterval(deletingInterval)
      currentWordIndex.value = (currentWordIndex.value + 1) % words.length
      typeLetters(words[currentWordIndex.value])
    }
  }, 100)
}

onMounted(() => {
  typeLetters(words[currentWordIndex.value])
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
  width: 100%;
  white-space: normal;
  overflow: hidden;
}

.script {
  font-size: 2rem;
  font-weight: bold;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
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
</style>
