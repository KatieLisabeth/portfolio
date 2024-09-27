import gitHubIcon from '@/assets/icons/gith.svg'
import linkedInIcon from '@/assets/icons/linkedin.svg'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('globalStore', () => {
  const skills = ref([
    { name: 'HTML', level: 99 },
    { name: 'CSS/SCSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 75 },
    { name: 'React', level: 95 },
    { name: 'Vue.js', level: 95 },
    { name: 'MUI', level: 85 },
    { name: 'Bootstrap', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'SQL Databases', level: 75 },
    { name: 'Rest API', level: 95 },
    { name: 'Jest', level: 95 },
    { name: 'Git', level: 85 },
    { name: 'Web Services', level: 75 },
    { name: 'Jenkins', level: 95 },
    { name: 'CI/CD', level: 95 },
    { name: 'UI/UX', level: 85 },
    { name: 'Scrum Methodology', level: 85 },
    { name: 'Figma', level: 95 }
  ])
  const languages = ref([
    { name: 'english', level: 90 },
    { name: 'dutch', level: 70 }
  ])

  const words = ref(['passionStatement1', 'passionStatement2', 'passionStatement3'])

  const profile = ref('profile')

  const work = ref([
    {
      title: 'Front-end Developer',
      companyName: 'Futureproofed part of Sweco',
      icon: '@/assets/images/futureproofed.png',
      iconBg: '#fc4c4c',
      date: 'Apr 2023 - Jun 2024',
      points: [
        'work.sweco.point1',
        'work.sweco.point2',
        'work.sweco.point3',
        'work.sweco.point4',
        'work.sweco.point5'
      ]
    },
    {
      title: 'Junior Front-end',
      companyName: 'Wellbeing.ai',
      icon: '@/assets/images/wellbeing.png',
      iconBg: '#fc4c4c',
      date: 'Nov 2022 - Jan 2023',
      points: ['work.wellbeing.point1', 'work.wellbeing.point2', 'work.wellbeing.point3']
    },
    {
      title: 'Junior Front-end Developer',
      companyName: 'One Punch Agency',
      icon: '@/assets/images/onepunch.png',
      iconBg: '#fc4c4c',
      date: 'Aug 2022 - Nov 2022',
      points: ['work.onePunch.point1', 'work.onePunch.point2']
    },
    {
      title: 'Developer Analyst VRT',
      companyName: 'VRT',
      icon: '@/assets/images/vrt.png',
      iconBg: '#fc4c4c',
      date: 'Jun 2021 - May 2022',
      points: ['work.vrt.point1', 'work.vrt.point2', 'work.vrt.point3', 'work.vrt.point4']
    }
  ])
  const about = ref([
    {
      link: '@/assets/images/me.png',
      title: 'about.me.title',
      description: 'about.me.description',
      boxClass: ''
    },
    {
      link: '@/assets/images/stack.png',
      title: 'about.stack.title',
      description: 'about.stack.description',
      boxClass: ''
    },
    {
      link: '@/assets/images/skills.png',
      title: 'about.skills.title',
      description: 'about.skills.description',
      boxClass: 'box-big1'
    },
    {
      link: '@/assets/images/love.png',
      title: 'about.passion.title',
      description: 'about.passion.description',
      boxClass: 'box-big3'
    },
    {
      link: '@/assets/images/mail.png',
      title: 'about.contact.title',
      boxClass: 'box-big2',
      description: '',
      hasHtml: true
    }
  ])

  const projects = ref([
    {
      name: 'project1',
      image: '@/assets/images/image.png'
    },
    {
      name: 'project2',
      image: '@/assets/images/image.png'
    },
    {
      name: 'project3',
      image: '@/assets/images/image.png'
    },
    {
      name: 'project4',
      image: '@/assets/images/image.png'
    },
    {
      name: 'project5',
      image: '@/assets/images/image.png'
    },
    {
      name: 'project6',
      image: ''
    }
  ])
  const social = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kateryna-lisabeth-48a8a093/',
      icon: linkedInIcon
    },
    { name: 'GitHub', url: 'https://github.com/KatieLisabeth', icon: gitHubIcon }
  ]
  return { skills, work, about, profile, words, languages, projects, social }
})
