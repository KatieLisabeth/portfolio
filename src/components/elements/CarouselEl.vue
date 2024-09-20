<template>
  <div class="carousel-wrapper">
    <div class="carousel-container" :style="{ transform: `translateX(${position}px)` }">
      <img
        v-for="(image, index) in repeatedImages"
        :key="index"
        :src="image"
        alt="Image"
        class="carousel-image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, type PropType } from 'vue'

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => []
  }
})

const repeatedImages = ref([...props.images, ...props.images])

const position = ref<number>(0)

const imageWidth = 120
const totalImages = repeatedImages.value.length

let intervalId: number | undefined

const moveLeft = () => {
  position.value -= 1
  if (position.value <= -(totalImages / 2) * imageWidth) {
    position.value = 0
  }
}

onMounted(() => {
  intervalId = window.setInterval(moveLeft, 50)
})

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.carousel-container {
  display: flex;
  will-change: transform;
}

.carousel-image {
  width: 100px;
  margin: 15px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.carousel-image:hover {
  filter: grayscale(0%);
}
@media (max-width: 768px) {
  .carousel-image {
    width: 50px;
  }
}
</style>
