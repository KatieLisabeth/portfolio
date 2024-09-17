<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    :class="[
      index % 2 === 0 ? 'left' : 'right',
      'timeline-item',
      { visible: localIsVisible[index] }
    ]"
    ref="el => timelineRefs[index] = el"
  >
    <!-- Icon on the timeline (centered) -->
    <div class="timeline-icon" :style="{ background: item.iconBg }">
      <img :src="item.icon" :alt="item.companyName" class="icon-image" />
    </div>

    <!-- Content card -->
    <div class="timeline-content">
      <span class="date">{{ item.date }}</span>
      <h3 class="title">{{ item.title }}</h3>
      <p class="company">{{ item.companyName }}</p>

      <ul class="points">
        <li v-for="(point, idx) in item.points" :key="`point-${idx}`">
          {{ point }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type PropType } from 'vue'

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
  isVisible: {
    type: Boolean,
    required: true
  }
})

const localIsVisible = ref(Array(props.items.length).fill(false))

watch(
  () => props.isVisible,
  (newVal) => {
    if (newVal) {
      localIsVisible.value = Array(props.items.length).fill(true)
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
  padding: 2rem;
  transform: translateY(20px) scale(0.95);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}
.timeline-item.visible {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.timeline-item.left .timeline-content {
  margin-right: auto;
  text-align: right;
  animation: fadeInLeft 1s ease-in-out;
  animation-fill-mode: forwards;
}

.timeline-item.right .timeline-content {
  margin-left: auto;
  text-align: left;
  animation: fadeInRight 0.5s ease-in-out;
  animation-fill-mode: forwards;
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
  top: 0;
  transform: translateX(-50%);
  z-index: 2;
}

.icon-image {
  width: 50%;
  height: 50%;
  object-fit: contain;
}

.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #e8e8e8;
}

.date {
  color: #d6c1c1;
  font-size: 14px;
  margin-bottom: 10px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.company {
  font-size: 16px;
  font-weight: 600;
  color: #bbb;
}

/* Fade in animations */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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
    width: 60%;
    height: 60%;
  }

  .timeline-container::before {
    width: 3px;
  }
}

/* Media Query for screens smaller than 768px */
@media (max-width: 768px) {
  .timeline-item.left .timeline-content,
  .timeline-item.right .timeline-content {
    text-align: left;
    width: 90%;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }

  .timeline-item {
    justify-content: flex-start;
    flex-direction: column; /* Stack the icon and content vertically */
    align-items: center;
  }

  .timeline-icon {
    left: 0;
    margin-bottom: 5rem;
    transform: none;
  }
}

/* Media Query for screens smaller than 480px */
@media (max-width: 480px) {
  .timeline-item {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px 0;
    margin: 0;
  }

  .timeline-icon {
    left: 0;
    top: auto;
    margin: 0;
    position: relative;
    transform: none;
  }
}
</style>
