<template>
  <ul :class="[themeClass, 'cards']">
    <li
      v-for="(project, index) in cards"
      :key="index"
      :class="['card', getCardClass(index)]"
      @click="handleCardClick(index)"
    >
      <h1>{{ $t(`projects.${project.name}.title`) }}</h1>
      <img :src="project.image" alt="project image" />
      <p>{{ $t(`projects.${project.name}.text`) }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/useThemeStore'
import { computed, onMounted, ref, type PropType } from 'vue'
interface TCard {
  name: string
  image: string
}
const props = defineProps({
  cards: {
    type: Array as PropType<TCard[]>,
    default: () => [],
    required: true
  }
})

const currentIndex = ref(0)

const handleCardClick = (index: number) => {
  currentIndex.value = index
}

const getCardClass = (index: number) => {
  if (index === currentIndex.value) return 'card--current'
  if (index === (currentIndex.value + 1) % props.cards.length) return 'card--next'
  return 'card--out'
}

onMounted(() => {
  currentIndex.value = 0
})
const themeStore = useThemeStore()
const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark-cards' : 'light-cards'
})
</script>

<style scoped>
.cards {
  position: relative;
  list-style-type: none;
  padding: 0;
  max-width: 40em;
  margin: 15% auto 0;
}

.card {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: var(--card-color2);
  box-shadow:
    inset 3px 3px 8px #ffffff99,
    inset -3px -3px 8px #00000066,
    5px 5px 15px #00000033;
  border-radius: 30px;
  padding: 60px;

  transform: translateY(0) rotate(4deg) translateX(25px) scale(1);
  transform-origin: 0 0;
  height: 400px;
  transition:
    transform 0.6s cubic-bezier(0.8, 0.2, 0.1, 0.8) 0.1s,
    background 0.4s linear;
  cursor: pointer;
  user-select: none;
  margin-bottom: 2rem;
}

.card:last-child {
  margin-bottom: 0;
}

.card h1 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: var(--card-header);
}

.card p {
  font-size: 1rem;
  line-height: 1;
  font-family: 'Courier New', Courier, monospace;
  color: var(--card-text);
  font-weight: 800;
}
.card img {
  width: 100px;
  margin: 15px;
}

.card--next {
  z-index: 5;
  transform: translateY(-25px) rotate(4deg) translateX(25px) scale(1);
}

.card--out {
  animation: card-out 0.6s cubic-bezier(0.8, 0.2, 0.1, 0.8);
  transform: translateY(-50px) rotate(8deg) translateX(55px) scale(0.95);
  z-index: 1;
  background: var(--card-color3);
}

@keyframes card-out {
  0% {
    z-index: 20;
    transform: translateY(0px) rotate(-4deg);
  }
  50% {
    transform: translateY(-120%) rotate(-5deg) translateX(-40px);
  }
  80% {
    z-index: 1;
  }
  100% {
    transform: translateY(-50px) rotate(8deg) translateX(55px) scale(0.95);
  }
}

.card--current {
  cursor: auto;
  user-select: auto;
  position: relative;
  z-index: 10;
  opacity: 1;
  background: var(--card-color1);
  transform: rotate(-1deg) translateX(0%) scale(1);
}

h1 {
  margin: 0;
}
</style>
