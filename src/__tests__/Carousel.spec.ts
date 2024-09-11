import MovingCarousel from '@/components/Carousel.vue'
import { svgIcons } from '@/mixins/icons'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

describe('MovingCarousel', () => {
  // Filter out undefined values from svgIcons
  const images: string[] = Object.values(svgIcons).filter(
    (image): image is string => image !== undefined
  )

  it('renders the correct number of images', () => {
    const wrapper = mount(MovingCarousel, {
      props: { images } // Pass test images as prop
    })

    // The images are duplicated for seamless scrolling
    const imgElements = wrapper.findAll('img')
    expect(imgElements.length).toBe(images.length * 2) // Double the number of images
  })

  it('sets the correct image src attributes', () => {
    const wrapper = mount(MovingCarousel, {
      props: { images }
    })

    const imgElements = wrapper.findAll('img')
    // Check that the src attributes are correctly assigned to the full paths
    images.forEach((image, index) => {
      expect(imgElements[index].attributes('src')).toBe(image)
    })
  })

  it('moves the carousel to the left', async () => {
    const wrapper = mount(MovingCarousel, {
      props: { images }
    })

    // Spy on the `moveLeft` function
    const moveLeftSpy = vi.spyOn(wrapper.vm, 'moveLeft')

    // Trigger the movement manually by calling `moveLeft`
    wrapper.vm.moveLeft()

    // Expect the spy to be called at least once
    expect(moveLeftSpy).toHaveBeenCalled()

    // Ensure the position decreases as expected
    expect(wrapper.vm.position).toBeLessThan(0)

    moveLeftSpy.mockRestore() // Clean up the spy
  })

  it('automatically moves the carousel after mounting', async () => {
    const wrapper = mount(MovingCarousel, {
      props: { images }
    })

    const initialPosition = wrapper.vm.position

    // Wait for some time to let the interval move the carousel
    await new Promise((resolve) => setTimeout(resolve, 200)) // Wait for some movement

    // Check that the position has changed
    expect(wrapper.vm.position).toBeLessThan(initialPosition)
  })
})
