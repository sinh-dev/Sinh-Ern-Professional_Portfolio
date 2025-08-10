import { ref, watch, onMounted } from 'vue'

const isDarkMode = ref(true) // Default to dark mode

export function useTheme() {
  // Initialize theme from localStorage or default to dark
  const initializeTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        isDarkMode.value = savedTheme === 'dark'
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        isDarkMode.value = prefersDark
      }
      applyTheme()
    }
  }

  // Apply theme to document
  const applyTheme = () => {
    if (process.client) {
      const html = document.documentElement
      if (isDarkMode.value) {
        html.classList.remove('light')
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
        html.classList.add('light')
      }
    }
  }

  // Toggle between dark and light mode
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    if (process.client) {
      localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    }
    applyTheme()
  }

  // Watch for theme changes
  watch(isDarkMode, () => {
    applyTheme()
  })

  // Listen for system theme changes
  const watchSystemTheme = () => {
    if (process.client) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', (e) => {
        // Only update if no manual preference is set
        if (!localStorage.getItem('theme')) {
          isDarkMode.value = e.matches
        }
      })
    }
  }

  // Initialize on mount
  onMounted(() => {
    initializeTheme()
    watchSystemTheme()
  })

  return {
    isDarkMode,
    toggleTheme,
    initializeTheme
  }
}
