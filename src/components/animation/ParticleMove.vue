<template>
  <div class="particles-container">
    <canvas ref="particlesCanvas" class="particles-canvas"></canvas>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/store'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

// Access the theme store
const themeStore = useThemeStore()

// Get the particle color based on the current theme
const particleColor = computed(() => {
  return themeStore.currentTheme === themeStore.themes.dark ? '#86d9ca' : '#473131'
})

const particlesCanvas = ref(null)
const particles = []
const particleCount = 100
const maxDistance = 100
let animationFrameId

// Particle class definition
class Particle {
  constructor(canvas, color) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.size = Math.random() * 4 + 1
    this.color = color

    // Reduce the speed to slow down the particles
    this.speedX = Math.random() * 0.5 - 0.25
    this.speedY = Math.random() * 0.5 - 0.25
  }

  // Draw the particle
  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.closePath()
    this.ctx.fill()
  }

  // Update particle position and handle bouncing off walls
  update() {
    this.x += this.speedX
    this.y += this.speedY

    // Reverse direction if the particle hits the canvas edges
    if (this.x < 0 || this.x > this.canvas.width) {
      this.speedX = -this.speedX
    }

    if (this.y < 0 || this.y > this.canvas.height) {
      this.speedY = -this.speedY
    }

    this.draw()
  }

  // Update the color of the particle dynamically
  updateColor(newColor) {
    this.color = newColor
  }
}

// Initialize and start the particle animation
const startParticles = () => {
  const canvas = particlesCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  // Set canvas size to the container size
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  // Initialize particles only if not already initialized
  if (particles.length === 0) {
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas, particleColor.value))
    }
  }

  // Function to connect particles
  const connectParticles = () => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          ctx.strokeStyle = `rgba(${hexToRgb(particleColor.value)}, ${1 - distance / maxDistance})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }
  }

  // Helper function to convert hex color to RGB format
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r}, ${g}, ${b}`
  }

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((particle) => particle.update())
    connectParticles()
    animationFrameId = requestAnimationFrame(animate)
  }

  animate()
}

// Update the color of particles without resetting everything
const updateParticleColors = (newColor) => {
  particles.forEach((particle) => {
    particle.updateColor(newColor)
  })
}

// Cleanup when the component is unmounted
onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
})

onMounted(() => {
  startParticles()

  // Watch for theme changes and update particle colors
  watch(
    () => themeStore.currentTheme,
    () => {
      updateParticleColors(particleColor.value)
    }
  )
})
</script>

<style scoped>
.particles-container {
  width: 100%;
  height: 100vh;
  background-color: transparent;
  overflow: hidden;
  z-index: -1;
}

.particles-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
