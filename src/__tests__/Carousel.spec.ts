import CarouselComponent from '@/components/elements/CarouselEl.vue'
import { useThemeStore } from '@/stores/useThemeStore'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('CarouselComponent', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render correct number of images', () => {
    const wrapper = mount(CarouselComponent, {
      props: {
        images: ['img1.jpg', 'img2.jpg', 'img3.jpg']
      }
    })

    // There should be double the number of images (repeated images)
    expect(wrapper.findAll('.carousel-image').length).toBe(6)
  })

  it('should apply dark theme class when theme is dark', () => {
    const themeStore = useThemeStore()
    themeStore.currentTheme = themeStore.themes.dark

    const wrapper = mount(CarouselComponent, {
      props: {
        images: ['img1.jpg', 'img2.jpg', 'img3.jpg']
      }
    })

    expect(wrapper.classes()).toContain('dark')
  })

  it('should apply light theme class when theme is light', () => {
    const themeStore = useThemeStore()
    themeStore.currentTheme = themeStore.themes.light

    const wrapper = mount(CarouselComponent, {
      props: {
        images: ['img1.jpg', 'img2.jpg', 'img3.jpg']
      }
    })

    expect(wrapper.classes()).toContain('light')
  })

  it('should stop interval on unmount', async () => {
    vi.useFakeTimers()

    const wrapper = mount(CarouselComponent, {
      props: {
        images: ['img1.jpg', 'img2.jpg', 'img3.jpg']
      }
    })

    wrapper.unmount()

    vi.useRealTimers()
  })
})
