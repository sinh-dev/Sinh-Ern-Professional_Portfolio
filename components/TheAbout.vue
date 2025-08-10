<template>
  <section id="about" class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">
          {{ sectionTitle }}
        </h2>
        <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <!-- Who I Am -->
        <div class="glass-card p-6 sm:p-8">
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
            {{ whoIAm.title }}
          </h3>
          <div class="space-y-4 sm:space-y-6">
            <p 
              v-for="(paragraph, index) in whoIAm.content" 
              :key="index"
              class="text-white/80 leading-relaxed text-sm sm:text-base"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
        
        <!-- Highlights -->
        <div class="glass-card p-6 sm:p-8">
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
            {{ highlights.title }}
          </h3>
          <ul class="space-y-3 sm:space-y-4 text-white/80">
            <li 
              v-for="(highlight, index) in highlights.items" 
              :key="index"
              class="flex items-start"
            >
              <span 
                class="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                :class="highlight.color"
              ></span>
              <span class="text-sm sm:text-base leading-relaxed">{{ highlight.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// About section data
const sectionTitle = ref('About Me')

const whoIAm = ref({
  title: 'Who I Am',
  content: [
    "I'm a web development student and aspiring full-stack developer with a strong background in both frontend and backend technologies. Over the past months, I've built and deployed multiple real-world projects, applying principles of MVC architecture, RESTful APIs, and responsive design.",
    "My focus is on delivering clean, maintainable code and intuitive user experiences that solve real-world problems."
  ]
})

const highlights = ref({
  title: 'Highlights',
  items: [
    {
      text: '2+ years of hands-on development in PHP, JavaScript, MySQL, and modern frameworks like Vue.js & Laravel',
      color: 'bg-blue-400'
    },
    {
      text: 'Experience in POS systems, school management tools, canteen management, and student performance tracking',
      color: 'bg-purple-400'
    },
    {
      text: 'Strong understanding of API integration, OOP concepts, and database optimization',
      color: 'bg-pink-400'
    }
  ]
})

// Optional props for customization
defineProps({
  customTitle: {
    type: String,
    default: ''
  }
})
</script>
