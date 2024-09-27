<template>
  <div class="contact-links">
    <a :href="`mailto:${email}`" target="_blank" rel="noopener noreferrer">
      <img :src="emailIcon" alt="Email Icon" class="icon" />
    </a>
    <a :href="linkedin" target="_blank" rel="noopener noreferrer">
      <img :src="linkedinIcon" alt="LinkedIn Icon" class="icon" />
    </a>
    <a :href="github" target="_blank" rel="noopener noreferrer">
      <img :src="githubIcon" alt="GitHub Icon" class="icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  email: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  emailIcon: {
    type: String,
    default: '/src/assets/icons/email.svg'
  },
  linkedinIcon: {
    type: String,
    default: '/src/assets/icons/linkedin.png'
  },
  githubIcon: {
    type: String,
    default: '/src/assets/icons/gith.svg'
  }
})
</script>

<style scoped>
.contact-links {
  display: flex;
  gap: 10px;
  align-items: center;
}

.icon {
  width: 30px;
  height: 30px;
}
</style>
