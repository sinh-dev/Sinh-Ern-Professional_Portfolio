<template>
  <section id="home" class="min-h-screen relative overflow-hidden">
    <!-- Video Background Overlay for better text visibility -->
    <div class="absolute inset-0 dark:bg-black/30 light:bg-white/20 z-0 pointer-events-none"></div>
    
    <!-- Subtle floating elements -->
    <div class="absolute inset-0 z-1 pointer-events-none">
      <div 
        class="absolute top-20 left-10 w-32 h-32 rounded-full dark:bg-white/5 light:bg-black/5 blur-2xl animate-pulse"
        style="animation-duration: 4s;"
      ></div>
      <div 
        class="absolute bottom-40 right-20 w-24 h-24 rounded-full dark:bg-white/8 light:bg-black/8 blur-xl animate-pulse"
        style="animation-duration: 6s; animation-delay: 2s;"
      ></div>
    </div>

    <!-- Main Hero Content -->
    <div class="min-h-screen flex items-center relative z-10">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        <!-- Desktop Split Layout -->
        <div class="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:min-h-[80vh]">
          
          <!-- Left Content Panel -->
          <div class="glass-card p-10 xl:p-12 backdrop-blur-2xl animate-fadeInUp" style="background: rgba(0, 0, 0, 0.15);">
            <!-- Greeting -->
            <div class="mb-6">
              <p class="text-lg theme-text-muted video-enhanced-text mb-2">{{ greeting }}</p>
              <h1 class="text-4xl xl:text-5xl 2xl:text-6xl font-bold theme-text mb-4 text-glow video-enhanced-text">
                <span class="gradient-text">{{ name }}</span>
              </h1>
              <h2 class="text-xl xl:text-2xl font-light theme-text-muted tracking-wide video-enhanced-text">
                {{ title }}
              </h2>
            </div>

            <!-- Social Links -->
            <div class="flex space-x-4 mb-8">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url" 
                target="_blank"
                class="w-12 h-12 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="w-5 h-5 theme-text" />
              </a>
            </div>

            <!-- Description -->
            <p class="text-base xl:text-lg theme-text-muted leading-relaxed mb-8 video-enhanced-text">
              {{ description }}
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                class="glass-button theme-text font-medium text-center hover-lift px-6 py-3"
              >
                <span class="video-enhanced-text">{{ buttons.viewWork }}</span>
              </a>
              <a 
                :href="buttons.cvLink" 
                download 
                class="glass-button theme-text font-medium text-center hover-lift px-6 py-3 border border-white/20"
              >
                <span class="video-enhanced-text">{{ buttons.downloadCV }}</span>
              </a>
            </div>
          </div>

          <!-- Right Image Panel -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <!-- Profile Image -->
              <div class="profile-image-container">
                <img 
                  :src="profileImage" 
                  :alt="name"
                  class="profile-image"
                />
                <div class="profile-image-overlay"></div>
              </div>
              
              <!-- Floating Badge -->
              <div class="floating-badge glass-card">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-sm theme-text font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile/Tablet Layout -->
        <div class="lg:hidden flex flex-col items-center text-center min-h-[90vh] justify-center">
          
          <!-- Profile Image Mobile -->
          <div class="mb-8">
            <div class="profile-image-container-mobile">
              <img 
                :src="profileImage" 
                :alt="name"
                class="profile-image-mobile"
              />
              <div class="profile-image-overlay-mobile"></div>
            </div>
          </div>

          <!-- Content Mobile -->
          <div class="glass-card p-8 backdrop-blur-2xl max-w-lg" style="background: rgba(0, 0, 0, 0.15);">
            <p class="text-base theme-text-muted video-enhanced-text mb-2">{{ greeting }}</p>
            <h1 class="text-3xl sm:text-4xl font-bold theme-text mb-3 text-glow video-enhanced-text">
              <span class="gradient-text">{{ name }}</span>
            </h1>
            <h2 class="text-lg sm:text-xl font-light theme-text-muted tracking-wide mb-6 video-enhanced-text">
              {{ title }}
            </h2>

            <!-- Social Links Mobile -->
            <div class="flex justify-center space-x-4 mb-6">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url" 
                target="_blank"
                class="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                :aria-label="social.name"
              >
                <component :is="social.icon" class="w-4 h-4 theme-text" />
              </a>
            </div>

            <!-- CTA Buttons Mobile -->
            <div class="flex flex-col gap-3">
              <a 
                href="#projects" 
                class="glass-button theme-text font-medium text-center hover-lift px-6 py-3"
              >
                <span class="video-enhanced-text">{{ buttons.viewWork }}</span>
              </a>
              <a 
                :href="buttons.cvLink" 
                download 
                class="glass-button theme-text font-medium text-center hover-lift px-6 py-3 border border-white/20"
              >
                <span class="video-enhanced-text">{{ buttons.downloadCV }}</span>
              </a>
            </div>
          </div>
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
