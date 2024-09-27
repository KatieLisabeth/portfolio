<template>
  <div class="container">
    <div class="header">
      <h1>Kateryna Lisabeth</h1>
      <p>FRONT-END DEVELOPER</p>
    </div>
    <div class="columns">
      <div class="col1">
        <div>
          <h2>{{ $t('details_title').toUpperCase() }}</h2>
          <p>Vilvoorde, Belgium</p>
          <p>
            <a href="mailto:katie_lisabeth@yahoo.com">katie_lisabeth@yahoo.com</a>
          </p>
        </div>
        <div class="skills-container">
          <h2>{{ $t('skills_title').toUpperCase() }}</h2>
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
        <h2>{{ $t('profile_title').toUpperCase() }}</h2>
        <p>
          {{ $t(profile) }}
        </p>
        <h2>{{ $t('employment_history').toUpperCase() }}</h2>
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
                {{ getFirstWord($t(point)) }}
                {{
                  getRestOfWords(
                    $t(point, {
                      swecoEmail: 'serge.degheldere@swecobelgium.be',
                      wellbeingEmail: 'laurent.van.tornhout@wellbeing.ai',
                      onePunchEmail: 'chatchai@onepunch.agency',
                      vrtEmail: 'ruben.causyn@vrt.be'
                    })
                  )
                }}
              </li>
            </ul>
          </div>
        </div>
        <h2>{{ $t('courses_title').toUpperCase() }}</h2>
        <span class="date">Jan 2020 - Aug 2020</span>
        <p>HYF Belgium - Fullstack developer</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useContentStore } from '@/stores/useContentStore'

const contentStore = useContentStore()

const skills = contentStore.skills
const items = contentStore.work
const profile = contentStore.profile

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

.header {
  text-align: center;
  background-color: #d4d3d3;
  color: #524f4f;
}

.columns {
  display: flex;
}

/* First column */
.col1 {
  max-width: 300px;
  flex: 0 0 300px;
  padding: 10px;
  background-color: #f2f2f2;
  color: #524f4f;
  h2 {
    text-align: center;
  }
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
