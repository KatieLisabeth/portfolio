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
        'work.wellbeing.point1',
        'work.wellbeing.point2',
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
        'work.onePunch.point1',
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
        'work.vrt.point1',
        'work.vrt.point2',
        'work.vrt.point3',
        'Contact: Ruben Causyn, Team Lead VRTNU/Radio - ruben.causyn@vrt.be'
      ]
    }
  ])
  const about = ref([
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
  ])

  return { skills, work, about, profile, words }
})
