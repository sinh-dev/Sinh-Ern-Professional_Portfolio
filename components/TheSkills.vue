<template>
  <section id="skills" class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
          {{ sectionTitle }}
        </h2>
        <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <!-- Frontend Skills -->
        <div class="glass-card p-4 sm:p-6">
          <h3 class="text-lg sm:text-xl font-bold text-white mb-4 text-center">
            {{ skillCategories.frontend.title }}
          </h3>
          <div class="space-y-3">
            <div 
              v-for="skill in skillCategories.frontend.skills" 
              :key="skill.name" 
              class="skill-item"
            >
              <div class="flex justify-between text-white/80 text-xs sm:text-sm mb-1">
                <span>{{ skill.name }}</span>
                <span>{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-white/20 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Backend Skills -->
        <div class="glass-card p-4 sm:p-6">
          <h3 class="text-lg sm:text-xl font-bold text-white mb-4 text-center">
            {{ skillCategories.backend.title }}
          </h3>
          <div class="space-y-3">
            <div 
              v-for="skill in skillCategories.backend.skills" 
              :key="skill.name" 
              class="skill-item"
            >
              <div class="flex justify-between text-white/80 text-xs sm:text-sm mb-1">
                <span>{{ skill.name }}</span>
                <span>{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-white/20 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Database Skills -->
        <div class="glass-card p-4 sm:p-6">
          <h3 class="text-lg sm:text-xl font-bold text-white mb-4 text-center">
            {{ skillCategories.database.title }}
          </h3>
          <div class="space-y-3">
            <div 
              v-for="skill in skillCategories.database.skills" 
              :key="skill.name" 
              class="skill-item"
            >
              <div class="flex justify-between text-white/80 text-xs sm:text-sm mb-1">
                <span>{{ skill.name }}</span>
                <span>{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-white/20 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-pink-400 to-red-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Tools Skills -->
        <div class="glass-card p-4 sm:p-6">
          <h3 class="text-lg sm:text-xl font-bold text-white mb-4 text-center">
            {{ skillCategories.tools.title }}
          </h3>
          <div class="space-y-3">
            <div 
              v-for="skill in skillCategories.tools.skills" 
              :key="skill.name" 
              class="skill-item"
            >
              <div class="flex justify-between text-white/80 text-xs sm:text-sm mb-1">
                <span>{{ skill.name }}</span>
                <span>{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-white/20 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-green-400 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Skills section data
const sectionTitle = ref('Skills')

const skillCategories = ref({
  frontend: {
    title: 'Frontend',
    skills: [
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'Nuxt.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  backend: {
    title: 'Backend',
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'Laravel', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 85 }
    ]
  },
  database: {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'Database Design', level: 85 },
      { name: 'Migrations', level: 80 }
    ]
  },
  tools: {
    title: 'Tools',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 80 },
      { name: 'Hosting', level: 75 }
    ]
  }
})

// Optional props for customization
defineProps({
  customSkills: {
    type: Object,
    default: () => ({})
  }
})
</script>
