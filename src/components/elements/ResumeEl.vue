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
            <a href="mailto:katie_lisabeth@yahoo.com">{{ $t('write_email') }}</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/kateryna-lisabeth-48a8a093/" target="_blank">{{
              $t('visit_linkedin')
            }}</a>
          </p>
          <p>
            <a href="https://github.com/KatieLisabeth" target="_blank">{{ $t('visit_github') }}</a>
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
        <div class="skills-container">
          <h2>{{ $t('language_title').toUpperCase() }}</h2>
          <div v-for="(language, index) in languages" :key="index" class="skill">
            <h4>{{ $t(`languages.${language.name}`) }}</h4>
            <div class="skill-bar">
              <div class="skill-level" :style="{ width: language.level + '%' }"></div>
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
        <div v-for="(item, index) in items" :key="index" class="timeline-item" ref="timelineRefs">
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
const languages = contentStore.languages

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

.col1 {
  max-width: 300px;
  flex: 0 0 300px;
  padding: 15px;
  background-color: #f2f2f2;
  color: #524f4f;
  h2 {
    text-align: center;
    font-weight: 800;
  }
}

/* Second column */
.col2 {
  flex-grow: 1;
  padding: 10px;
  background-color: #e8e8e8;
  color: #524f4f;
  h2 {
    margin: 0.5rem 0 2rem 0;
    font-weight: 800;
  }
}
.date {
  color: #514848;
  font-size: 14px;
  margin-bottom: 10px;
  font-family: monospace;
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
  font-family: monospace;
}
.skills-container {
  width: 100%;
  max-width: 600px;
  margin: 15px auto;
}

.skill {
  margin-bottom: 15px;
}

.skill h4 {
  margin: 0 0 5px;
  font-size: 14px;
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
