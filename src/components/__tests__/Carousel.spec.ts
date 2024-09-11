import MovingCarousel from '@/components/Carousel.vue'
import { svgIcons } from '@/mixins/icons'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'

describe('MovingCarousel', () => {
  const images = ref<string[]>(Object.values(svgIcons))

  it('renders the correct number of images', () => {
    const wrapper = mount(MovingCarousel, {
      props: { images }
    })

    // The images are duplicated for infinite scroll
    const imgElements = wrapper.findAll('img')
    expect(imgElements.length).toBe(images.value.length * 2) // Double the number of images
  })

  it('sets the correct image src attributes', () => {
    const wrapper = mount(MovingCarousel, {
      props: { images }
    })

    const imgElements = wrapper.findAll('img')
    // Check that the src attributes are correctly assigned
    images.value.forEach((image, index) => {
      expect(imgElements[index].attributes('src')).toBe(image)
    })
  })

  it('moves the carousel to the left', async () => {
    const wrapper = mount(MovingCarousel, {
      props: { images }
    })

    // Get the initial position value
    const initialPosition = wrapper.vm.position

    // Call moveLeft to shift the carousel
    wrapper.vm.moveLeft()

    // The position should now be less than the initial value
    expect(wrapper.vm.position).toBeLessThan(initialPosition)
  })

  it('does not render an image if src is undefined', () => {
    const brokenImages = ['img1.svg', undefined, 'img3.svg'] // One undefined src

    const wrapper = mount(MovingCarousel, {
      props: { images: brokenImages }
    })

    const imgElements = wrapper.findAll('img')

    // Check that only valid images are rendered (2 valid images, doubled for infinite scroll)
    expect(imgElements.length).toBe(4)

    // Check the src attributes
    expect(imgElements[0].attributes('src')).toBe('img1.svg')
    expect(imgElements[1].attributes('src')).toBe('img1.svg') // Repeated
    expect(imgElements[2].attributes('src')).toBe('img3.svg')
    expect(imgElements[3].attributes('src')).toBe('img3.svg') // Repeated
  })
})
