<template>
  <div class="container">
    <header>
      <h1>Centered Header</h1>
    </header>
    <div class="columns">
      <div class="col1">
        <div class="skills-container">
          <div v-for="(skill, index) in skills" :key="index" class="skill">
            <h4>{{ skill.name }}</h4>
            <div class="skill-bar">
              <div class="skill-level" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col2">
        <!-- Specific text for second column -->
        <h2>PROFIEL</h2>
        <p>
          Als zeer gemotiveerde en betrouwbare front-end ontwikkelaar ben ik volledig toegewijd aan
          het leveren van resultaatgerichte oplossingen. Ik beschik over het vermogen om zelfstandig
          aan de slag te gaan met kleinere projecten en heb tegelijkertijd de teamgeest om effectief
          samen te werken aan omvangrijkere codebases. Met mijn gedegen ervaring in de ontwikkeling
          van Software as a Service (SaaS) sta ik klaar om direct waarde toe te voegen aan uw team.
        </p>
        <h2>EMPLOYMENT HISTORY</h2>
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="['timeline-item', index % 2 === 0 ? 'left' : 'right']"
          ref="timelineRefs"
        >
          <div class="timeline-content">
            <h3 class="title">
              {{ item.title }} -
              <span class="company">{{ item.companyName }}</span>
            </h3>

            <span class="date">{{ item.date }}</span>
            <ul class="points">
              <li v-for="(point, idx) in item.points" :key="`point-${idx}`">
                {{ getFirstWord(point) }} {{ getRestOfWords(point) }}
              </li>
            </ul>
          </div>
        </div>
        <h2>COURSES</h2>
      </div>
    </div>

    <a :href="pdfUrl" download="Kateryna_Lisabeth-Resume.pdf" class="download-button"
      >Download Resume</a
    >
  </div>
</template>

<script setup lang="ts">
import pdfUrl from '@/assets/pdfs/EN.pdf'
import { ref } from 'vue'
const skills = ref([
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'Vue.js', level: 85 }
])
const items = ref([
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
const getFirstWord = (text: string): string => {
  return text.split(' ')[0]
}

const getRestOfWords = (text: string): string => {
  return text.split(' ').slice(1).join(' ')
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
}

/* Centered header styling */
header {
  text-align: center;
  margin-bottom: 20px;
  background-color: #f2f2f2;
}

/* Flexbox for columns */
.columns {
  display: flex;
}

/* First column */
.col1 {
  max-width: 300px;
  flex: 0 0 300px;
  padding: 10px;
  background-color: #f2f2f2;
}

/* Second column */
.col2 {
  flex-grow: 1;
  padding: 10px;
  background-color: #e8e8e8;
  color: #524f4f;
}
.date {
  color: #514848;
  font-size: 14px;
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  font-family: 'Courier New', Courier, monospace;
}
.skills-container {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}

.skill {
  margin-bottom: 15px;
}

.skill h4 {
  margin: 0 0 5px;
  font-size: 18px;
  color: #333;
}

.skill-bar {
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  height: 5px;
  width: 100%;
}

.skill-level {
  height: 100%;
  background-color: #524f4f;
  border-radius: 10px 0 0 10px;
}
/* Responsive for smaller screens */
@media (max-width: 768px) {
  .columns {
    flex-direction: column;
  }

  .col1,
  .col2 {
    max-width: 100%;
    flex: none;
  }
}
</style>
