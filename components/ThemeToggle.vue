<template>
  <button
    @click="toggleTheme"
    class="theme-toggle glass-button p-3 rounded-full transition-all duration-300 hover:scale-110 group"
    :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sun Icon (Light Mode) -->
    <svg
      v-if="!isDarkMode"
      class="w-5 h-5 theme-text transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    
    <!-- Moon Icon (Dark Mode) -->
    <svg
      v-else
      class="w-5 h-5 theme-text transition-transform duration-300 group-hover:-rotate-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme'

const { isDarkMode, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle {
  position: relative;
  overflow: hidden;
}

.theme-toggle::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.theme-toggle:hover::before {
  left: 100%;
}

.dark .theme-toggle:hover::before {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

.light .theme-toggle:hover::before {
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
}
</style>
