<template>
  <div class="container">
    <div v-for="(card, index) in cards" :key="index" :class="['item', card.boxClass]">
      <div class="card-content">
        <img v-if="card.link" :src="card.link" alt="grid image" class="link" />
        <h3 class="title">{{ card.title }}</h3>
        <p class="description">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardGrid',
  data() {
    return {
      cards: [
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
          link: '/src/assets/images/contact.png',
          title: 'Contact me',
          description: 'katie_lisabeth@yahoo.com',
          boxClass: 'box-big2'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, minmax(300px, auto));
  max-width: 100%;
  height: auto;
  padding: 1rem;
  box-sizing: border-box;
}

.item {
  background: #4d4d4d81;
  padding: 5px;
  border-radius: 12px;
  border: 3px solid #848484;
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
  background: rgba(45, 45, 45, 0.8);
  border-radius: 20px;
  padding: 1rem;
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
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  overflow: hidden;
}

.description {
  font-size: 1.2rem; /* Slightly larger font for the description */
  margin: 0;
  white-space: normal;
  overflow-wrap: break-word;
  text-align: left;
}

/* Responsive adjustments */
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
