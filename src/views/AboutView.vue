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
import { useThemeStore } from '@/store'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const cards = [
  {
    link: '/src/assets/images/me.png',
    title: 'Hi, I’m Katie Lisabeth',
    description:
      'With 3 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.',
    boxClass: ''
  },
  {
    link: '/src/assets/images/stack.png',
    title: 'Tech Stack',
    description:
      'I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications',
    boxClass: ''
  },
  {
    link: '/src/assets/images/skills.png',
    title: 'Soft skills',
    description:
      'I excel in communication, teamwork, and problem-solving by collaborating effectively with others to break down complex challenges and deliver solutions. I’m adaptable, detail-oriented, and constantly learning, balancing creativity with accountability and time management to build quality software while maintaining empathy for users and colleagues.',
    boxClass: 'box-big1'
  },
  {
    link: '/src/assets/images/love.png',
    title: 'My Passion for Coding',
    description:
      "I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.",
    boxClass: 'box-big3'
  },
  {
    link: '/src/assets/images/mail.png',
    title: 'Contact me',
    description: 'katie_lisabeth@yahoo.com',
    boxClass: 'box-big2'
  }
]
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
  box-sizing: border-box;
  overflow: hidden;
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

@media (max-width: 860px) {
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

@media (max-width: 600px) {
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
}
</style>
