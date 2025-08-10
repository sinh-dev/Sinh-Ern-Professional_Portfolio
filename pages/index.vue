<template>
  <div>
    <!-- Hero Section -->
    <TheHero />
    
    <!-- About Section -->
    <TheAbout />
    
    <!-- Skills Section -->
    <TheSkills />
    
    <!-- Projects Section -->
    <TheProjects />
    
    <!-- Experience Section -->
    <TheExperience />
    
    <!-- Contact Section -->
    <TheContact />
  </div>
</template>

<script setup>
// Import all section components
import TheHero from '~/components/TheHero.vue'
import TheAbout from '~/components/TheAbout.vue'
import TheSkills from '~/components/TheSkills.vue'
import TheProjects from '~/components/TheProjects.vue'
import TheExperience from '~/components/TheExperience.vue'
import TheContact from '~/components/TheContact.vue'

// Page-specific SEO
definePageMeta({
  title: 'Home - Sinh Ern Portfolio',
  description: 'Welcome to Sinh Ern\'s portfolio - A full-stack web developer specializing in Vue.js, Laravel, and modern web technologies.'
})

// Optional: Add page-specific head configuration
useHead({
  title: 'Sinh Ern - Full-Stack Web Developer Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Welcome to Sinh Ern\'s portfolio showcasing full-stack web development projects using Vue.js, Laravel, PHP, and modern frameworks.'
    }
  ]
})
</script>
