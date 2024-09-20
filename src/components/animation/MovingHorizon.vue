<template>
  <div class="container">
    <canvas ref="canvasRef" class="horizon-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx = null
let points = []
let startY = -0.7
const camera = { x: 0, y: 0, z: 0.8 }
let d = 0.5
let animationFrameId = null
let timeoutId = null

const normalize = (max, fraction) => max * (fraction + 0.8)

const generatePoints = (delta) => {
  points = []
  for (let i = -6; i <= 6; i += 0.1) {
    for (let j = startY + delta; j <= startY + 4 + delta; j += 0.1) {
      points.push([i, j, j - Math.sin(i + j * 4) / 8])
    }
  }
  timeoutId = window.setTimeout(() => generatePoints(delta + 0.1), 100000)
}

const update = () => {
  if (canvasRef.value) {
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight
  }

  if (ctx) {
    camera.z -= 0.00001
    camera.y -= 0.0001

    const projectedPoints = points.map((point) => {
      let z = point[2] + camera.z
      let x = (point[0] * -d) / z
      let y = ((point[1] + camera.y) * -d) / z

      // Wrap points when they go off the canvas
      if (x < -0.5) x += window.innerWidth
      if (x > 0.5) x -= window.innerWidth
      if (y < -0.5) y += window.innerHeight
      if (y > 0.5) y -= window.innerHeight

      return [normalize(window.innerWidth, x), normalize(window.innerHeight, y), z]
    })

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    projectedPoints.forEach((point) => {
      ctx.fillStyle = '#fcaa4E'
      ctx.beginPath()
      ctx.arc(point[0], point[1], Math.max(2 / point[2], 0), 0, 2 * Math.PI)
      ctx.fill()
    })
  }

  animationFrameId = requestAnimationFrame(update)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (canvas) {
    ctx = canvas.getContext('2d')
    generatePoints(0)
    update()
  }
})

onBeforeUnmount(() => {
  // Clean up the requestAnimationFrame loop
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }

  // Clean up the setTimeout
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Ensure no scrollbar from canvas content */
  z-index: -1; /* Place it behind any content */
  /* position: absolute;
  width: 100vw;
  height: 100vh; */
}

.horizon-canvas {
  position: relative;
  background: transparent;
  z-index: -1;
}
</style>
