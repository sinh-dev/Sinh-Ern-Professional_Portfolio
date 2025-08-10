<template>
  <div 
    class="parallax-container relative overflow-hidden"
    :class="containerClass"
  >
    <!-- Background Parallax Elements -->
    <div 
      v-if="showBackgroundElements"
      class="absolute inset-0 pointer-events-none"
    >
      <div 
        v-for="(element, index) in backgroundElements" 
        :key="index"
        class="absolute rounded-full blur-xl opacity-30"
        :class="element.class"
        :style="{
          ...element.style,
          transform: getElementTransform(element, index)
        }"
      ></div>
    </div>

    <!-- Main Content with Parallax -->
    <div 
      class="relative z-10"
      :style="{ transform: contentTransform }"
    >
      <slot />
    </div>

    <!-- Floating Decorative Elements -->
    <div 
      v-if="showFloatingElements"
      class="absolute inset-0 pointer-events-none"
    >
      <div 
        v-for="(element, index) in floatingElements" 
        :key="`float-${index}`"
        class="absolute"
        :class="element.class"
        :style="{
          ...element.style,
          transform: getFloatingTransform(element, index),
          animationDelay: `${index * 0.5}s`
        }"
      >
        <div class="w-full h-full rounded-full dark:bg-white/10 light:bg-black/10 animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useParallax } from '~/composables/useParallax'

const props = defineProps({
  containerClass: {
    type: String,
    default: ''
  },
  parallaxSpeed: {
    type: Number,
    default: 0.5
  },
  mouseParallax: {
    type: Boolean,
    default: true
  },
  showBackgroundElements: {
    type: Boolean,
    default: true
  },
  showFloatingElements: {
    type: Boolean,
    default: false
  },
  customElements: {
    type: Array,
    default: () => []
  }
})

const { 
  getParallaxTransform, 
  getEnhancedParallaxTransform, 
  getMouseParallaxTransform 
} = useParallax()

// Default background elements
const defaultBackgroundElements = [
  {
    class: 'w-32 h-32 dark:bg-white/5 light:bg-black/5',
    style: { top: '10%', left: '10%' },
    speed: 0.3,
    options: { direction: 'both', rotation: true }
  },
  {
    class: 'w-24 h-24 dark:bg-white/3 light:bg-black/3',
    style: { top: '20%', right: '15%' },
    speed: -0.2,
    options: { direction: 'x', scale: true }
  },
  {
    class: 'w-20 h-20 dark:bg-white/4 light:bg-black/4',
    style: { bottom: '20%', left: '20%' },
    speed: 0.4,
    options: { direction: 'y', rotation: true }
  },
  {
    class: 'w-16 h-16 dark:bg-white/6 light:bg-black/6',
    style: { bottom: '10%', right: '25%' },
    speed: 0.25,
    options: { direction: 'both' }
  }
]

// Floating elements for decoration
const defaultFloatingElements = [
  {
    class: 'w-3 h-3 parallax-float',
    style: { top: '15%', left: '80%' }
  },
  {
    class: 'w-2 h-2 parallax-float',
    style: { top: '60%', left: '10%' }
  },
  {
    class: 'w-4 h-4 parallax-float',
    style: { bottom: '30%', right: '10%' }
  }
]

const backgroundElements = computed(() => 
  props.customElements.length > 0 ? props.customElements : defaultBackgroundElements
)

const floatingElements = computed(() => defaultFloatingElements)

const contentTransform = computed(() => 
  props.mouseParallax ? getMouseParallaxTransform(0.2) : ''
)

const getElementTransform = (element, index) => {
  if (element.speed && element.options) {
    return getEnhancedParallaxTransform(element.speed, element.options)
  }
  return getParallaxTransform(element.speed || props.parallaxSpeed)
}

const getFloatingTransform = (element, index) => {
  const baseSpeed = 0.1 + (index * 0.05)
  return getParallaxTransform(baseSpeed)
}
</script>

<style scoped>
.parallax-container {
  min-height: 100vh;
}

@media (prefers-reduced-motion: reduce) {
  .parallax-container * {
    animation: none !important;
    transform: none !important;
  }
}
</style>
