<template>
  <div :class="[themeClass, 'container']">
    <h1>Work Experience</h1>
    <MovingHorizon />
    <div class="timeline-container">
      <!-- Timeline  -->
      <TimelineEl :isWorkSessionVisible="isWorkSessionVisible" :items="timelineItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MovingHorizon from '@/components/animation/MovingHorizon.vue'
import TimelineEl from '@/components/elements/TimelineEl.vue'
import { useThemeStore } from '@/store'
import { computed, ref } from 'vue'

defineProps({
  isWorkSessionVisible: {
    type: Boolean,
    required: true
  }
})

const timelineItems = ref([
  {
    title: 'Front-end Developer',
    companyName: 'Tech Solutions Inc.',
    icon: 'https://via.placeholder.com/50',
    iconBg: '#a22156',
    date: 'Jan 2021 - Present',
    points: [
      'Developed and maintained the front-end for various client projects.',
      'Worked closely with the design team to implement responsive UI/UX.',
      'Optimized performance for the web applications, improving load times by 30%.'
    ]
  },
  {
    title: 'Software Engineer',
    companyName: 'Innovative Softwares',
    icon: 'https://via.placeholder.com/50',
    iconBg: '#E6DEDD',
    date: 'Feb 2019 - Dec 2020',
    points: [
      'Built and deployed highly scalable SaaS solutions using modern web technologies.',
      'Collaborated with cross-functional teams to deliver robust software applications.',
      'Mentored junior developers and conducted code reviews to ensure high-quality code.'
    ]
  },
  {
    title: 'Junior Developer',
    companyName: 'Web Dev Studios',
    icon: 'https://via.placeholder.com/50',
    iconBg: '#D9D9D9',
    date: 'Jun 2017 - Jan 2019',
    points: [
      'Assisted in the development of e-commerce websites and web applications.',
      'Fixed bugs and optimized code for better performance.',
      'Learned and implemented new web technologies in client projects.'
    ]
  }
])

// Theme-related logic
const themeStore = useThemeStore()
const themeClass = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? 'dark-card' : 'light-card'
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 1rem;
}

.container h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}

.timeline-container {
  width: 100%;
  height: 100%;
  position: relative;
}

/* Timeline vertical line */
.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #e8e8e8;
}

@media (max-width: 1400px) {
  .timeline-container::before {
    width: 3px; /* Slightly thicker vertical line */
  }
}

/* Media Query for screens smaller than 768px */
@media (max-width: 768px) {
  .timeline-container::before {
    left: 1rem;
  }
}

/* Media Query for screens smaller than 480px */
@media (max-width: 480px) {
  .timeline-container::before {
    display: none; /* Hide the vertical line on small screens */
  }
}
</style>
