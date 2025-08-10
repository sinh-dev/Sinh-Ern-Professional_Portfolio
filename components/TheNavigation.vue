<template>
  <nav class="fixed top-0 w-full z-50 glass border-b dark:border-white/20 light:border-black/20 backdrop-blur-2xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="theme-text font-bold text-xl enhanced-contrast">
          Sinh Ern
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <div class="flex space-x-8">
            <a 
              v-for="item in navigationItems" 
              :key="item.href"
              :href="item.href" 
              class="theme-text-muted hover:theme-text transition-colors duration-300"
              @click="closeMenu"
            >
              {{ item.label }}
            </a>
          </div>
          
          <!-- Theme Toggle -->
          <ThemeToggle />
        </div>
        
        <!-- Mobile Menu Button & Theme Toggle -->
        <div class="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button 
            @click="toggleMobileMenu" 
            class="theme-text focus:outline-none z-50"
            aria-label="Toggle navigation menu"
          >
            <svg 
              :class="{ 'rotate-45': isMobileMenuOpen }"
              class="w-6 h-6 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                v-if="!isMobileMenuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div v-show="isMobileMenuOpen" class="md:hidden pb-4">
          <div class="flex flex-col space-y-4">
            <a 
              v-for="item in navigationItems" 
              :key="item.href"
              :href="item.href" 
              @click="closeMobileMenu" 
              class="theme-text-muted hover:theme-text transition-colors duration-300 py-2"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Navigation items
const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const closeMenu = () => {
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}
</script>
