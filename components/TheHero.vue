<template>
  <section id="home" class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
    <div class="max-w-4xl mx-auto text-center">
      <div class="glass-card p-6 sm:p-8 lg:p-12 mb-8 animate-float">
        <!-- Profile Avatar -->
        <div class="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1">
          <div class="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-2xl sm:text-4xl font-bold text-white">
            SE
          </div>
        </div>
        
        <h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 text-shadow">
          <span class="gradient-text">{{ name }}</span>
        </h1>
        
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mb-4 sm:mb-6">
          {{ title }}
        </h2>
        
        <p class="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          {{ tagline }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            class="glass-button text-white font-medium hover:scale-105 transform transition-all duration-300 text-center"
          >
            {{ buttons.viewWork }}
          </a>
          <a 
            :href="buttons.cvLink" 
            download 
            class="glass-button text-white font-medium hover:scale-105 transform transition-all duration-300 text-center"
          >
            {{ buttons.downloadCV }}
          </a>
        </div>
      </div>
      
      <!-- Floating icons -->
      <div class="flex justify-center space-x-4 sm:space-x-6 text-white/60">
        <div 
          v-for="(icon, index) in floatingIcons" 
          :key="index"
          class="animate-float w-6 h-6 sm:w-8 sm:h-8" 
          :style="{ animationDelay: index + 's' }"
        >
          <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM8.5 17.5L12 14l3.5 3.5L12 21l-3.5-3.5z"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Hero content data
const name = ref('Sinh Ern')
const title = ref('Full-Stack Web Developer')
const tagline = ref('Crafting responsive, scalable, and user-focused web applications with modern frameworks and clean code.')

const buttons = ref({
  viewWork: 'View My Work',
  downloadCV: 'Download CV',
  cvLink: '/cv.pdf'
})

const floatingIcons = ref([1, 2, 3]) // Simple array for demo icons

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
