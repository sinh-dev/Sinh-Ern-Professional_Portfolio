<template>
  <footer class="glass border-t border-white/10 py-6 sm:py-8 mt-16 sm:mt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center text-white/60">
        <p class="text-sm sm:text-base">
          &copy; {{ currentYear }} {{ name }}. Built with 
          <span class="text-blue-400">Nuxt 3</span> & 
          <span class="text-purple-400">Tailwind CSS</span>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

// Footer data
const name = ref('Sinh Ern')

const currentYear = computed(() => {
  return new Date().getFullYear()
})

// Optional props for customization
defineProps({
  customName: {
    type: String,
    default: ''
  },
  customText: {
    type: String,
    default: ''
  }
})
</script>
