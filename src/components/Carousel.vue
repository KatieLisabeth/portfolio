<template>
  <div class="carousel-wrapper">
    <div class="carousel-container" :style="{ transform: `translateX(${position}px)` }">
      <!-- Display images twice for smooth infinite scroll -->
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

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref, type PropType } from 'vue'

export default defineComponent({
  name: 'MovingCarousel',
  props: {
    images: {
      type: Array as PropType<string[]>,
      required: true,
      default: () => []
    }
  },
  setup(props) {
    // Duplicate the images array to create the seamless loop
    const repeatedImages = ref([...props.images, ...props.images])

    // State for the current carousel position (translateX)
    const position = ref<number>(0)

    // Width of each image + margin
    const imageWidth = 120
    const totalImages = repeatedImages.value.length

    // To store the interval ID
    let intervalId: number | undefined

    // Move the carousel to the left
    const moveLeft = () => {
      position.value -= 2 // Move by 2px to the left
      if (position.value <= -(totalImages / 2) * imageWidth) {
        // Reset position when half of the images have scrolled past
        position.value = 0
      }
    }

    // Start automatic scrolling when the component is mounted
    onMounted(() => {
      intervalId = window.setInterval(moveLeft, 90) // Move every 90ms
    })

    // Clear the interval when the component is unmounted to prevent memory leaks
    onBeforeUnmount(() => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    })

    // Return the reactive variables to be used in the template
    return {
      repeatedImages,
      position,
      moveLeft
    }
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
  transition: transform 0.1s linear;
}

.carousel-image {
  width: 100px;
  margin: 15px;
}
</style>
