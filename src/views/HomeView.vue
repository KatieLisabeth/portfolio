<template>
  <div>
    <Carousel :images="images" />
  </div>
</template>

<script lang="ts">
import Carousel from '@/components/Carousel.vue' // Import the carousel component
import { svgIcons } from '@/mixins/icons'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ParentComponent',
  setup() {
    // Convert svgFiles object to an array of values (SVG paths)
    const images = ref<string[]>(Object.values(svgIcons))

    return {
      images
    }
  },
  components: {
    Carousel
  }
})
</script>
