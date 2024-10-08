<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    :class="getItemClasses(index)"
    ref="timelineRefs"
  >
    <div class="timeline-icon" :style="{ background: item.iconBg }">
      <img :src="item.icon" :alt="item.companyName" class="icon-image" />
    </div>

    <div class="timeline-content">
      <span class="date">{{ item.date }}</span>
      <h3 class="title">{{ item.title }}</h3>
      <p class="company">{{ item.companyName }}</p>

      <ul class="points">
        <li v-for="(point, idx) in item.points" :key="`point-${idx}`">
          <h3>{{ getFirstWord($t(point)) }}</h3>
          {{
            getRestOfWords(
              $t(point, {
                swecoEmail: 'serge.degheldere@swecobelgium.be',
                wellbeingEmail: 'laurent.van.tornhout@wellbeing.ai',
                onePunchEmail: 'chatchai@onepunch.agency',
                vrtEmail: 'ruben.causyn@vrt.be'
              })
            )
          }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIsMobile } from '@/utils/viewport'
import { onBeforeUnmount, onMounted, ref, watch, type PropType } from 'vue'

const isMobile = useIsMobile(768)
const timelineRefs = ref<(HTMLElement | null)[]>([])
const isVisible = ref<boolean[]>([])

let observer: IntersectionObserver
interface Item {
  title: string
  companyName: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

const props = defineProps({
  items: {
    type: Array as PropType<Item[]>,
    required: true,
    default: () => []
  },
  isWorkSessionVisible: {
    type: Boolean,
    required: true
  }
})
const getItemClasses = (index: number) => {
  return [
    'timeline-item',
    index % 2 === 0 ? 'left' : 'right',
    {
      'slide-in': !isMobile.value && props.isWorkSessionVisible && isVisible.value[index]
    }
  ]
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = timelineRefs.value.findIndex((el) => el === entry.target)
        if (index !== -1) {
          isVisible.value[index] = entry.isIntersecting
        }
      })
    },
    { threshold: 0.1 }
  )
})
const getFirstWord = (text: string): string => {
  return text.split(' ')[0]
}

const getRestOfWords = (text: string): string => {
  return text.split(' ').slice(1).join(' ')
}

onBeforeUnmount(() => {
  timelineRefs.value.forEach((el) => {
    if (el) observer.unobserve(el)
  })
})

watch(
  () => props.isWorkSessionVisible,
  (newVal) => {
    if (newVal) {
      timelineRefs.value.forEach((el) => {
        if (el) {
          observer.observe(el)
        }
      })
    } else {
      timelineRefs.value.forEach((el) => {
        if (el) {
          observer.unobserve(el)
        }
      })
    }
  }
)
</script>

<style scoped>
.timeline-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  transform: translateY(2px) scale(1);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.timeline-item .points {
  list-style: none;
  font-family: monospace;
  font-weight: 800;
  font-size: 1rem;
  h3 {
    font-weight: 800;
    font-size: 1rem;
  }
}

.timeline-item.left .timeline-content {
  margin-right: auto;
  text-align: right;
  width: 45%;
}

.timeline-item.right .timeline-content {
  margin-left: auto;
  text-align: left;
  width: 45%;
}

.timeline-icon {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: -0.5rem;
  transform: translateX(-50%);
  z-index: 2;
}

.icon-image {
  width: 100%;
  height: 100%;
  object-fit: fit;
  border-radius: 50%;
}

.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  color: var(--hover-color);
}

.date {
  color: #af9c9c;
  font-size: 14px;
  margin-bottom: 10px;
  font-family: monospace;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  font-family: monospace;
}

.company {
  font-size: 16px;
  font-weight: 600;
  color: #bbb;
  font-family: monospace;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-item.slide-in.left .timeline-content {
  animation: slideInFromLeft 1s ease-in-out;
  animation-fill-mode: forwards;
}

.timeline-item.slide-in.right .timeline-content {
  animation: slideInFromRight 1s ease-in-out;
  animation-fill-mode: forwards;
}

@media (max-width: 1400px) {
  .timeline-item {
    padding: 3rem;
    transform: none;
    justify-content: space-between;
  }

  .timeline-item.left .timeline-content,
  .timeline-item.right .timeline-content {
    width: 45%;
  }

  .timeline-icon {
    height: 60px;
    width: 60px;
  }

  .icon-image {
    width: 100%;
    height: 100%;
  }

  .timeline-container::before {
    width: 4px;
  }
}

@media (max-width: 768px) {
  .timeline-item.left .timeline-content,
  .timeline-item.right .timeline-content {
    text-align: left;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }

  .timeline-item {
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    left: 2rem;
  }

  .timeline-icon {
    left: -3rem;
    margin-bottom: 5rem;
    transform: none;
  }
}

@media (max-width: 480px) {
  .timeline-item .points {
    h3 {
      font-size: 1rem;
    }
  }

  .timeline-item {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    left: 0;
  }
  .timeline-item .points {
    padding: 0;
  }

  .timeline-icon {
    left: 0;
    top: auto;
    margin: 1rem;
    position: relative;
    transform: none;
  }
}
</style>
