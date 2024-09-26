<template>
  <div
    :class="[themeClass, { visible: isVisible, hidden: !isVisible && leftView }, 'container']"
    ref="aboutPage"
  >
    <div v-for="(card, index) in cards" :key="index" :class="['item', card.boxClass]">
      <div :class="[{ 'bounce-in': isVisible, 'bounce-out': !isVisible }, 'card-content']">
        <img v-if="card.link" :src="card.link" alt="grid image" class="link" />
        <h3 class="title">{{ card.title }}</h3>
        <p class="description">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'
import { useThemeStore } from '@/stores/useThemeStore'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
const contentStore = useContentStore()
const cards = contentStore.about

const isVisible = ref(false)
const leftView = ref(false)
const aboutPage = ref<HTMLElement | null>(null)
const themeStore = useThemeStore()

const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark-about' : 'light-about'
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (cards) => {
      cards.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        } else {
          isVisible.value = false
          leftView.value = true
        }
      })
    },
    { threshold: 0.1 }
  )
  if (aboutPage.value) {
    observer.observe(aboutPage.value)
  }
})
onBeforeUnmount(() => {
  if (aboutPage.value) {
    aboutPage.value = null
  }
})
</script>

<style scoped>
.container {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(300px, auto));
  max-width: 100%;
  height: auto;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.container.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.bounce-in {
  animation: bounceIn 1s ease-out;
}

.bounce-out {
  animation: bounceOut 0.6s ease forwards;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(-10px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

@keyframes bounceOut {
  0% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.8) translateY(-200px);
    opacity: 0;
  }
}

.item {
  padding: 5px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.box-big1 {
  grid-column: 3;
  grid-row: 1 / 3;
  img {
    width: 100%;
    height: auto;
  }
}

.box-big2 {
  grid-column: 3 / 4;
  img {
    width: 100%;
    height: auto;
  }
}

.box-big3 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  img {
    width: 100%;
    height: auto;
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--primary-color);
  border-radius: 20px;
  padding: 1rem;
  box-shadow:
    inset 3px 3px 8px #ffffff99,
    inset -3px -3px 8px #00000066,
    5px 5px 15px #00000033;
}

.card-content:hover {
  background: var(--hover-color);
}

.link {
  width: 300px;
  height: auto;
  margin-bottom: 15px;
}

.link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.title {
  font-size: 1.8rem;
  margin: 0;
  white-space: wrap;
  text-overflow: ellipsis;
  text-align: left;
  overflow: hidden;
  font-family: var(--font);
  color: var(--title-text);
}

.description {
  font-size: 1.2rem;
  margin: 0;
  white-space: normal;
  overflow-wrap: break-word;
  text-align: left;
  font-family: var(--font);
  color: var(--description-text);
}

@media (max-width: 1020px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 15px;
  }

  .box-big1 {
    grid-column: span 1;
  }

  .box-big2 {
    grid-column: span 1;
  }

  .box-big3 {
    grid-column: span 2;
  }

  .title {
    font-size: 1.3rem;
  }

  .description {
    font-size: 1rem;
  }
  .link img {
    width: 80%;
    height: 80%;
  }
}
@media (max-width: 970px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 15px;
  }
  .box-big2 {
    grid-column: span 2;
  }
  .box-big1,
  .box-big3 {
    grid-column: auto;
  }
  .title {
    font-size: 1.5rem;
  }

  .description {
    font-size: 1.1rem;
  }

  .link {
    width: 100%;
  }

  .link img {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 708px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .box-big1,
  .box-big2,
  .box-big3 {
    grid-column: 1;
    grid-row: auto;
  }
  .title {
    font-size: 1rem;
  }

  .description {
    font-size: 0.7rem;
  }

  .link {
    width: 100%;
  }

  .link img {
    width: 80%;
    height: auto;
  }
}
</style>
