<template>
  <section id="experience" class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
          {{ sectionTitle }}
        </h2>
        <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
      </div>
      
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>
        
        <div class="space-y-8 sm:space-y-12">
          <!-- Education -->
          <div class="relative pl-16 sm:pl-20">
            <div class="absolute left-4 sm:left-6 w-4 h-4 bg-blue-400 rounded-full -translate-x-1/2"></div>
            <div class="glass-card p-4 sm:p-6">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                <h3 class="text-lg sm:text-xl font-bold text-white">{{ education.title }}</h3>
                <span class="text-white/60 text-sm mt-1 lg:mt-0">{{ education.institution }}</span>
              </div>
              <p class="text-white/80 mb-3 text-sm sm:text-base">{{ education.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in education.skills" 
                  :key="skill"
                  class="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-white/80 text-xs"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Experience -->
          <div class="relative pl-16 sm:pl-20">
            <div class="absolute left-4 sm:left-6 w-4 h-4 bg-purple-400 rounded-full -translate-x-1/2"></div>
            <div class="glass-card p-4 sm:p-6">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                <h3 class="text-lg sm:text-xl font-bold text-white">{{ experience.title }}</h3>
                <span class="text-white/60 text-sm mt-1 lg:mt-0">{{ experience.period }}</span>
              </div>
              <ul class="text-white/80 space-y-2 text-sm sm:text-base">
                <li 
                  v-for="(achievement, index) in experience.achievements" 
                  :key="index"
                  class="flex items-start"
                >
                  <span class="text-blue-400 mr-2 flex-shrink-0 mt-1">•</span>
                  <span>{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Experience section data
const sectionTitle = ref('Experience & Education')

const education = ref({
  title: 'Web Development Diploma',
  institution: 'PNC',
  description: 'Specialized courses in Laravel, Vue.js, Node.js, APIs, MySQL',
  skills: ['Laravel', 'Vue.js', 'Node.js', 'MySQL', 'APIs']
})

const experience = ref({
  title: 'Academic Projects & Development',
  period: '2022 - Present',
  achievements: [
    'Built and deployed multiple real-world academic projects applying full-stack development principles',
    'Collaborated in 5-member teams using Git for version control',
    'Designed ERDs and implemented database-driven applications',
    'Focused on performance, scalability, and usability'
  ]
})

// Optional props for customization
defineProps({
  customExperience: {
    type: Object,
    default: () => ({})
  },
  customEducation: {
    type: Object,
    default: () => ({})
  }
})
</script>
