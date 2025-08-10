<template>
  <section id="home" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
    <!-- Parallax Background Elements -->
    <div class="absolute inset-0 parallax-bg">
      <div 
        class="absolute top-20 left-10 w-32 h-32 rounded-full dark:bg-white/5 light:bg-black/5 blur-xl parallax-float"
        :style="{ transform: parallaxTransform.bg1 }"
      ></div>
      <div 
        class="absolute top-40 right-20 w-24 h-24 rounded-full dark:bg-white/3 light:bg-black/3 blur-lg parallax-slow"
        :style="{ transform: parallaxTransform.bg2 }"
      ></div>
      <div 
        class="absolute bottom-32 left-1/4 w-16 h-16 rounded-full dark:bg-white/4 light:bg-black/4 blur-md parallax-float"
        :style="{ transform: parallaxTransform.bg3, animationDelay: '2s' }"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto text-center relative z-10">
      <div 
        class="glass-card p-8 sm:p-12 lg:p-16 mb-12 animate-float hover-lift animate-fadeInUp"
        :style="{ transform: mouseParallaxTransform }"
      >
        <!-- Profile Avatar -->
        <div 
          class="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 sm:mb-10 rounded-full dark:bg-gradient-to-br dark:from-white/25 dark:to-gray-600/25 light:bg-gradient-to-br light:from-black/25 light:to-gray-400/25 p-1 animate-pulse-glow"
          :style="{ transform: parallaxTransform.avatar }"
        >
          <div class="w-full h-full rounded-full dark:bg-black dark:border-white/40 light:bg-white light:border-black/40 border-2 flex items-center justify-center text-4xl sm:text-6xl font-bold theme-text enhanced-contrast">
            SE
          </div>
        </div>
        
        <h1 class="text-5xl sm:text-6xl lg:text-8xl font-bold theme-text mb-6 text-glow enhanced-contrast">
          <span class="gradient-text">{{ name }}</span>
        </h1>
        
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light theme-text-muted mb-6 sm:mb-8 tracking-wide enhanced-contrast">
          {{ title }}
        </h2>
        
        <p class="text-xl sm:text-2xl lg:text-3xl theme-text-muted mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 font-light enhanced-contrast">
          {{ tagline }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-8 justify-center">
          <a 
            href="#projects" 
            class="glass-button theme-text font-medium text-center group relative overflow-hidden hover-lift text-lg"
          >
            <span class="relative z-10 enhanced-contrast">{{ buttons.viewWork }}</span>
          </a>
          <a 
            :href="buttons.cvLink" 
            download 
            class="glass-button theme-text font-medium text-center group relative overflow-hidden hover-lift text-lg"
          >
            <span class="relative z-10 enhanced-contrast">{{ buttons.downloadCV }}</span>
          </a>
        </div>
      </div>
      
      <!-- Enhanced indicator dots -->
      <div class="flex justify-center space-x-4">
        <div 
          v-for="(dot, index) in 3" 
          :key="index"
          class="w-3 h-3 rounded-full dark:bg-white/40 light:bg-black/40 animate-pulse enhanced-contrast" 
          :style="{ animationDelay: (index * 0.5) + 's', transform: parallaxTransform[`dot${index}`] }"
        >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useParallax } from '~/composables/useParallax'

// Hero content data
const name = ref('Sinh Ern')
const title = ref('Full-Stack Web Developer')
const tagline = ref('Crafting responsive, scalable, and user-focused web applications with modern frameworks and clean code.')

const buttons = ref({
  viewWork: 'View My Work',
  downloadCV: 'Download CV',
  cvLink: '/cv.pdf'
})

// Parallax effects
const { 
  getParallaxTransform, 
  getEnhancedParallaxTransform, 
  getMouseParallaxTransform 
} = useParallax()

// Computed parallax transforms
const parallaxTransform = computed(() => ({
  bg1: 'translateY(0px)',
  bg2: 'translateX(0px)',
  bg3: 'translateY(0px)',
  avatar: 'translateY(0px)',
  dot0: 'translateY(0px)',
  dot1: 'translateY(0px)',
  dot2: 'translateY(0px)'
}))

const mouseParallaxTransform = computed(() => 'translate(0px, 0px)')

// Optional: Add props for customization
defineProps({
  customName: {
    type: String,
    default: ''
  },
  customTitle: {
    type: String,
    default: ''
  },
  customTagline: {
    type: String,
    default: ''
  }
})
</script>
