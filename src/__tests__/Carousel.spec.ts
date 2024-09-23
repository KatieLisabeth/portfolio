import MovingCarousel from '@/components/elements/CarouselEl.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

describe('Carousel Component', () => {
  it('renders the correct number of images', () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']
    const wrapper = mount(MovingCarousel, {
      props: { images }
    })

    const imgElements = wrapper.findAll('.carousel-image')
    expect(imgElements.length).toBe(images.length * 2)
  })

  it('applies the correct styles', () => {
    const images = ['image1.jpg', 'image2.jpg']
    const wrapper = mount(MovingCarousel, {
      props: { images }
    })

    const carouselContainer = wrapper.find('.carousel-container')
    expect(carouselContainer.attributes('style')).toContain('transform: translateX')
  })

  it('clears the interval on unmount', async () => {
    const images = ['image1.jpg', 'image2.jpg']
    vi.useFakeTimers()

    const wrapper = mount(MovingCarousel, {
      props: { images }
    })

    const clearIntervalSpy = vi.spyOn(window, 'clearInterval')

    wrapper.unmount()

    expect(clearIntervalSpy).toHaveBeenCalled()
    vi.clearAllTimers()
  })
})
