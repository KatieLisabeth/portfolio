import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('globalStore', () => {
  const skills = ref([
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'Vue.js', level: 85 }
  ])

  const words = ref(['passionStatement1', 'passionStatement2', 'passionStatement3'])

  const profile = ref('profile')

  const work = ref([
    {
      title: 'Front-end Developer',
      companyName: 'Futureproofed part of Sweco',
      icon: '/src/assets/images/futureproofed.png',
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
      icon: '/src/assets/images/wellbeing.png',
      iconBg: '#fc4c4c',
      date: 'Nov 2022 - Jan 2023',
      points: ['work.wellbeing.point1', 'work.wellbeing.point2', 'work.wellbeing.point3']
    },
    {
      title: 'Junior Front-end Developer',
      companyName: 'One Punch Agency',
      icon: '/src/assets/images/onepunch.png',
      iconBg: '#fc4c4c',
      date: 'Aug 2022 - Nov 2022',
      points: [
        'work.onePunch.point1',
        'work.onePunch.point2'
      ]
    },
    {
      title: 'Developer Analyst VRT',
      companyName: 'VRT',
      icon: '/src/assets/images/vrt.png',
      iconBg: '#fc4c4c',
      date: 'Jun 2021 - May 2022',
      points: [
        'work.vrt.point1',
        'work.vrt.point2',
        'work.vrt.point3',
        'work.vrt.point4'
      ]
    }
  ])
  const about = ref([
    {
      link: '/src/assets/images/me.png',
      title: 'about.me.title',
      description: 'about.me.description',
      boxClass: ''
    },
    {
      link: '/src/assets/images/stack.png',
      title: 'about.stack.title',
      description: 'about.stack.description',
      boxClass: ''
    },
    {
      link: '/src/assets/images/skills.png',
      title: 'about.skills.title',
      description: 'about.skills.description',
      boxClass: 'box-big1'
    },
    {
      link: '/src/assets/images/love.png',
      title: 'about.passion.title',
      description: 'about.passion.description',
      boxClass: 'box-big3'
    },
    {
      link: '/src/assets/images/mail.png',
      title: 'about.contact.title',
      description: 'about.contact.description',
      boxClass: 'box-big2'
    }
  ])

  return { skills, work, about, profile, words }
})
