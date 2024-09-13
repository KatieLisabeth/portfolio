import { onMounted, onUnmounted, ref } from 'vue'

export const useScroll = (sectionIds: string[]) => {
  const isVisible = ref<Record<string, boolean>>({})
  const showScrollAnimation = ref(true)

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value[entry.target.id] = entry.isIntersecting
        })
      },
      { threshold: 0.1 } // Adjust the threshold for when to consider the section visible
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    const handleScroll = () => {
      showScrollAnimation.value = window.scrollY <= 400
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  })

  return { isVisible, showScrollAnimation }
}
