import { ref, onMounted, onUnmounted } from 'vue'

export function useParallax() {
  const scrollY = ref(0)
  const isIntersecting = ref({})

  // Update scroll position
  const updateScrollY = () => {
    scrollY.value = window.scrollY
  }

  // Parallax transform calculation
  const getParallaxTransform = (speed = 0.5, direction = 'y') => {
    const offset = scrollY.value * speed
    
    if (direction === 'y') {
      return `translateY(${offset}px)`
    } else if (direction === 'x') {
      return `translateX(${offset}px)`
    } else if (direction === 'both') {
      return `translate(${offset * 0.3}px, ${offset}px)`
    }
    
    return `translateY(${offset}px)`
  }

  // Enhanced parallax with rotation and scale
  const getEnhancedParallaxTransform = (speed = 0.5, options = {}) => {
    const {
      direction = 'y',
      rotation = false,
      scale = false,
      invert = false
    } = options

    const baseOffset = scrollY.value * speed * (invert ? -1 : 1)
    const rotationValue = rotation ? scrollY.value * 0.1 : 0
    const scaleValue = scale ? 1 + (scrollY.value * 0.0002) : 1

    let transform = ''
    
    if (direction === 'y') {
      transform += `translateY(${baseOffset}px) `
    } else if (direction === 'x') {
      transform += `translateX(${baseOffset}px) `
    } else if (direction === 'both') {
      transform += `translate(${baseOffset * 0.3}px, ${baseOffset}px) `
    }
    
    if (rotation) {
      transform += `rotate(${rotationValue}deg) `
    }
    
    if (scale) {
      transform += `scale(${scaleValue}) `
    }

    return transform.trim()
  }

  // Intersection Observer for performance optimization
  const observeElement = (element, threshold = 0.1) => {
    if (!process.client) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting.value[entry.target.dataset.parallaxId] = entry.isIntersecting
        })
      },
      { threshold }
    )

    observer.observe(element)
    return observer
  }

  // Mouse parallax effect
  const mouseParallax = ref({ x: 0, y: 0 })
  
  const updateMouseParallax = (event) => {
    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window
    
    mouseParallax.value = {
      x: (clientX / innerWidth - 0.5) * 50,
      y: (clientY / innerHeight - 0.5) * 50
    }
  }

  const getMouseParallaxTransform = (intensity = 1) => {
    return `translate(${mouseParallax.value.x * intensity}px, ${mouseParallax.value.y * intensity}px)`
  }

  // Scroll-triggered animations
  const getScrollProgress = (elementTop, elementHeight) => {
    const windowHeight = window.innerHeight
    const scrollTop = scrollY.value
    
    const elementBottom = elementTop + elementHeight
    const viewportTop = scrollTop
    const viewportBottom = scrollTop + windowHeight
    
    if (elementBottom < viewportTop || elementTop > viewportBottom) {
      return 0 // Element not in viewport
    }
    
    const visibleTop = Math.max(elementTop, viewportTop)
    const visibleBottom = Math.min(elementBottom, viewportBottom)
    const visibleHeight = visibleBottom - visibleTop
    
    return Math.min(visibleHeight / windowHeight, 1)
  }

  onMounted(() => {
    if (process.client) {
      window.addEventListener('scroll', updateScrollY, { passive: true })
      window.addEventListener('mousemove', updateMouseParallax, { passive: true })
      updateScrollY()
    }
  })

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('scroll', updateScrollY)
      window.removeEventListener('mousemove', updateMouseParallax)
    }
  })

  return {
    scrollY,
    isIntersecting,
    mouseParallax,
    getParallaxTransform,
    getEnhancedParallaxTransform,
    getMouseParallaxTransform,
    getScrollProgress,
    observeElement
  }
}
