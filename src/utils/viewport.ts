import { onBeforeUnmount, onMounted, ref } from 'vue'

export const useIsMobile = (maxWidth: number) => {
  const isMobile = ref(false)

  const handleViewportChange = (event: MediaQueryListEvent) => {
    isMobile.value = event.matches
  }

  onMounted(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`)
    isMobile.value = mediaQuery.matches
    mediaQuery.addEventListener('change', handleViewportChange)
  })

  onBeforeUnmount(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`)
    mediaQuery.removeEventListener('change', handleViewportChange)
  })

  return isMobile
}
