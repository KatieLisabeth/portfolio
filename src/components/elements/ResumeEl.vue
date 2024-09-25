<template>
  <div class="pdf-container">
    <!-- Overlay button -->
    <button class="overlay-button" @click="redirectToHome">Go Back</button>

    <!-- PDF iframe -->
    <iframe :src="pdfUrl" width="100%" height="100%" frameborder="20" allowfullscreen></iframe>
  </div>
</template>

<script setup lang="ts">
import pdfUrl from '@/assets/pdfs/EN.pdf'
import { useRouter } from 'vue-router'

const router = useRouter()
const redirectToHome = () => {
  router.push('/') // Vue Router navigation to home
}
</script>

<style scoped>
.pdf-container {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 9999; /* Ensure it's on top */
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-button {
  position: absolute;
  top: 15px;
  right: 180px;
  z-index: 10000; /* Ensure the button is on top of the iframe */
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.overlay-button:hover {
  background-color: #0056b3;
}

iframe {
  position: relative;
  z-index: 9998;
}
</style>
