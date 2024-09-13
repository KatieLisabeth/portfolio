<template>
  <div
    class="about-card"
    ref="aboutCard"
    :class="{ visible: isVisible, hidden: !isVisible && leftView }"
  >
    <!-- First row with bounce in animation -->
    <div class="first-row" :class="{ 'bounce-in': isVisible, 'bounce-out': !isVisible }">
      <h1>About me</h1>
      <p>
        Highly motivated and reliable Front-end developer with a passion for programming and
        problem-solving, committed to delivering results-oriented solutions. Skilled in working
        independently on smaller projects and collaborating effectively within larger teams.
        Experienced in developing Software as a Service (SaaS) applications, with a focus on
        creating efficient, scalable, and user-centric products.
      </p>
    </div>

    <!-- Second row divided into 4 columns -->
    <div class="second-row">
      <div class="column" v-for="(item, index) in userData" :key="index">
        <h3>{{ item.header }}</h3>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'


const userData = [
  {
    header: 'Stacks',
    text: 'HTML, CSS, SaaS, JavaScript, TypeScript, React, Vue, Bootstrap, Tailwind, Node.js, REST APIs, GraphQL'
  },
  {
    header: 'Frameworks',
    text: 'Vue.js, Nuxt.js, React, Next.js, Express, Tailwind CSS, Bootstrap, Vite'
  },
  {
    header: 'Hard Skills',
    text: 'Version Control (Git), Unit Testing, Integration Testing, Responsive Design, Performance Optimization, Webpack, Docker, CI/CD pipelines'
  },
  {
    header: 'Soft Skills',
    text: 'Team Collaboration, Problem-Solving, Time Management, Communication, Adaptability, Attention to Detail, Self-Motivation, Leadership'
  }
]

const isVisible = ref(false)
const leftView = ref(false)

const aboutCard = ref<HTMLElement | null>(null)


onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
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

  if (aboutCard.value) {
    observer.observe(aboutCard.value)
  }
})

onBeforeUnmount(() => {
  if (aboutCard.value) {
    aboutCard.value = null
  }
})
</script>

<style scoped>
.about-card {
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #8b868c;
  border-radius: 8px;
  box-shadow:
    inset 3px 3px 8px #ffffff99,
    inset -3px -3px 8px #00000066,
    5px 5px 15px #00000033;
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

.about-card.visible {
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

.first-row {
  padding: 20px;
  font-size: 1.2rem;
  color: #e0d7d7;
  text-align: left;
  flex: 1;
}

.second-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  flex: 1;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow:
    inset 3px 3px 8px #ffffff99,
    inset -3px -3px 8px #00000066,
    5px 5px 15px #00000033;
}

.column h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-weight: 700;
  color: #e0d7d7;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.column p {
  font-size: 1rem;
  color: #e0d7d7;
  text-align: left;
}

@media (max-width: 1024px) {
  .second-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .second-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-card {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .second-row {
    grid-template-columns: 1fr;
  }

  .first-row {
    padding: 10px;
  }
}
</style>
