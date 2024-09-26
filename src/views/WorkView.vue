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
import { useThemeStore } from '@/stores/useThemeStore'
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
    companyName: 'Futureproofed part of Sweco',
    icon: '/src/assets/images/futureproofed.png',
    iconBg: '#fc4c4c',
    date: 'Apr 2023 - Jun 2024',
    points: [
      'Contribution: Developed internal tool for cities and business, building sustainability roadmaps using a SaaS software approach.',
      'Development: Created dynamic cloud-based applications with Vue and TypeScript, utilizing SCSS for styling and Bootstrap.',
      'Delivery: Released updates through GitHub deployment.',
      'Aftercare: Provided iterative support and fine-tuning within a Scrum framework.',
      'Contact: Serge de Gheldere, CEO Futureproofed - serge.degheldere@swecobelgium.be'
    ]
  },
  {
    title: 'Junior Front-end',
    companyName: 'Wellbeing.ai',
    icon: '/src/assets/images/wellbeing.png',
    iconBg: '#fc4c4c',
    date: 'Nov 2022 - Jan 2023',
    points: [
      'Contribution: Developed internal tool to streamline business client report management, leveraging a SaaS model for optimal efficiency.',
      'Development: coded and styled dynamic components utilizing React, TypeScript, and SCSS, integrated seamlessly with web services.',
      'Contact: Laurent Tornhout, CEO at Wellbeing.ai - laurent.van.tornhout@wellbeing.ai'
    ]
  },
  {
    title: 'Junior Front-end Developer',
    companyName: 'One Punch Agency',
    icon: '/src/assets/images/onepunch.png',
    iconBg: '#fc4c4c',
    date: 'Aug 2022 - Nov 2022',
    points: [
      'Development: dynamic React components with Chakra-UI integration, enhancing web service interactions.',
      'Contact: Chatchai Sribunruang, CEO OnePunchAgency - chatchai@onepunch.agency'
    ]
  },
  {
    title: 'Developer Analyst VRT',
    companyName: 'VRT',
    icon: '/src/assets/images/vrt.png',
    iconBg: '#fc4c4c',
    date: 'Jun 2021 - May 2022',
    points: [
      'Development: Developed dynamic components using React , Typescript and CSS, integrated with web services. Ensured software reliability through comprehensive unit and end-to-end testing protocols.',
      'Delivery: Streamlined software deployment process by releasing new versions via Jenkins.',
      'Aftercare: Provided interactive support and optimization within a Scrum framework.',
      'Contact: Ruben Causyn, Team Lead VRTNU/Radio - ruben.causyn@vrt.be'
    ]
  }
])

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
  font-weight: 700;
  font-family: 'Courier New', Courier, monospace;
}

.timeline-container {
  width: 100%;
  height: 100%;
  position: relative;
}

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
    width: 3px;
  }
}

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
