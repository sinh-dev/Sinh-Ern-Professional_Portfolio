<template>
  <section id="projects" class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
          {{ sectionTitle }}
        </h2>
        <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
        
        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          <button 
            v-for="filter in projectFilters" 
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'glass-button text-xs sm:text-sm px-3 sm:px-4 py-2',
              activeFilter === filter ? 'bg-white/30' : 'bg-white/10'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="glass-card p-4 sm:p-6 group hover:scale-105 transform transition-all duration-300"
        >
          <!-- Project Image Placeholder -->
          <div class="aspect-video bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
            <svg class="w-8 h-8 sm:w-12 sm:h-12 text-white/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 10 5.16-.05 9-4.45 9-10V7l-10-5z"/>
            </svg>
          </div>
          
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2">{{ project.title }}</h3>
          <p class="text-white/60 text-xs sm:text-sm mb-3">{{ project.stack }}</p>
          <p class="text-white/80 text-sm mb-4 line-clamp-3 leading-relaxed">{{ project.description }}</p>
          
          <div class="flex gap-2 sm:gap-3">
            <a 
              :href="project.github" 
              class="flex-1 glass-button text-center text-xs sm:text-sm py-2 hover:bg-white/20 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              v-if="project.demo"
              :href="project.demo" 
              class="flex-1 glass-button text-center text-xs sm:text-sm py-2 hover:bg-white/20 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Projects section data
const sectionTitle = ref('Projects')

const projectFilters = ref(['All', 'Full Stack', 'Frontend', 'Backend'])
const activeFilter = ref('All')

const projects = ref([
  {
    id: 1,
    title: 'Student Performance & Analytics Tracker',
    stack: 'Laravel + Vue.js + MySQL',
    category: 'Full Stack',
    description: 'Role-based access for admins, teachers, and students. Performance analytics with charts, attendance calendar, predictive analytics, CSV/Google Sheets import/export.',
    github: 'https://github.com/sinh-dev',
    demo: 'https://demo.example.com'
  },
  {
    id: 2,
    title: 'PNC Canteen Management System',
    stack: 'TypeScript OOP',
    category: 'Backend',
    description: 'Classes for Canteen, User, Student, Staff, Customer, MenuItem, Order, Payment. Efficient order processing and reporting.',
    github: 'https://github.com/sinh-dev'
  },
  {
    id: 3,
    title: 'School Leave Management System',
    stack: 'PHP MVC + MySQL + Bootstrap 5',
    category: 'Full Stack',
    description: 'Roles: Students, Teachers, Education Team. Leave request workflows, approval system, email notifications.',
    github: 'https://github.com/sinh-dev'
  },
  {
    id: 4,
    title: 'Library Management System',
    stack: 'TypeScript OOP',
    category: 'Backend',
    description: 'Book lending, return tracking, overdue management. Structured with UML-based class architecture.',
    github: 'https://github.com/sinh-dev'
  },
  {
    id: 5,
    title: 'Blog App with Category & Post Management',
    stack: 'Vue.js + Vue Router + REST API',
    category: 'Frontend',
    description: 'CRUD for categories & posts, props, emits, slots. Fully tested with Postman.',
    github: 'https://github.com/sinh-dev',
    demo: 'https://demo.example.com'
  },
  {
    id: 6,
    title: 'E-Commerce & POS System',
    stack: 'Laravel + Vue.js',
    category: 'Full Stack',
    description: 'Inventory management, sales tracking, real-time order updates. Admin dashboard with analytics.',
    github: 'https://github.com/sinh-dev'
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})

// Optional props for customization
defineProps({
  customProjects: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
