import { onMounted, ref } from 'vue'

export const useScroll = (sectionIds: string[], scrollThreshold = 200) => {
  const isVisible = ref<Record<string, boolean>>({})
  const showScrollAnimation = ref(true)

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible.value[entry.target.id] = entry.isIntersecting
      })
    })

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    // Listen for scroll to hide the mouse animation after scrolling past threshold
    window.addEventListener('scroll', () => {
      showScrollAnimation.value = window.scrollY <= scrollThreshold
    })
  })

  return { isVisible, showScrollAnimation }
}
