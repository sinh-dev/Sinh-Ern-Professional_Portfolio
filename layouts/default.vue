<template>
  <div class="min-h-screen gradient-bg">
    <!-- Navigation -->
    <TheNavigation />
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
// Import components
import TheNavigation from '~/components/TheNavigation.vue'
import TheFooter from '~/components/TheFooter.vue'

// SEO Head configuration
useHead({
  title: 'Sinh Ern - Full-Stack Web Developer',
  meta: [
    {
      name: 'description',
      content: 'Sinh Ern - Full-Stack Web Developer crafting responsive, scalable, and user-focused web applications with modern frameworks and clean code.'
    },
    {
      name: 'keywords',
      content: 'web developer, full-stack developer, Vue.js, Laravel, PHP, JavaScript, Nuxt.js, Tailwind CSS'
    },
    {
      property: 'og:title',
      content: 'Sinh Ern - Full-Stack Web Developer'
    },
    {
      property: 'og:description',
      content: 'Crafting responsive, scalable, and user-focused web applications with modern frameworks and clean code.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
})
</script>
