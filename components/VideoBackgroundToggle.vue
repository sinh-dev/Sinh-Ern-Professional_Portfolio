<template>
  <div class="video-toggle-container">
    <!-- Toggle Button -->
    <button
      @click="handleToggle"
      class="video-toggle-btn glass-button p-3 rounded-full transition-all duration-300 hover:scale-110 group"
      :aria-label="`Switch to ${nextVideo.name}`"
      :title="`Current: ${currentVideo.name} • Click to switch to ${nextVideo.name}`"
    >
      <!-- Video Icon -->
      <svg class="w-5 h-5 theme-text transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      
      <!-- Loading indicator -->
      <div 
        v-if="isLoading" 
        class="absolute inset-0 flex items-center justify-center"
      >
        <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    </button>

    <!-- Video Selector Dropdown (Optional) -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div 
        v-if="showDropdown" 
        class="video-dropdown glass-card"
      >
        <div class="py-2">
          <div 
            v-for="video in videoOptions" 
            :key="video.id"
            @click="selectVideo(video.id)"
            class="video-option"
            :class="{ 'video-option-active': video.id === currentVideoId }"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="font-medium theme-text">{{ video.name }}</div>
                <div class="text-sm theme-text-muted">{{ video.description }}</div>
              </div>
              <div 
                v-if="video.id === currentVideoId"
                class="w-2 h-2 bg-green-400 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVideoBackground } from '~/composables/useVideoBackground'

const props = defineProps({
  showDropdown: {
    type: Boolean,
    default: false
  }
})

const { 
  currentVideoId, 
  videoOptions, 
  getCurrentVideo, 
  getNextVideo, 
  toggleVideoBackground, 
  setVideoBackground 
} = useVideoBackground()

// State
const isLoading = ref(false)
const showDropdown = ref(false)

// Computed
const currentVideo = computed(() => getCurrentVideo())
const nextVideo = computed(() => getNextVideo())

// Methods
const handleToggle = async () => {
  if (props.showDropdown) {
    showDropdown.value = !showDropdown.value
  } else {
    await switchVideo()
  }
}

const switchVideo = async () => {
  isLoading.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 300)) // Brief delay for UX
    toggleVideoBackground()
  } finally {
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }
}

const selectVideo = async (videoId) => {
  if (videoId !== currentVideoId.value) {
    isLoading.value = true
    showDropdown.value = false
    
    try {
      await new Promise(resolve => setTimeout(resolve, 200))
      setVideoBackground(videoId)
    } finally {
      setTimeout(() => {
        isLoading.value = false
      }, 500)
    }
  } else {
    showDropdown.value = false
  }
}

// Close dropdown when clicking outside
const closeDropdown = () => {
  showDropdown.value = false
}

// Add click outside listener
if (process.client) {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.video-toggle-container')) {
      closeDropdown()
    }
  })
}
</script>

<style scoped>
.video-toggle-container {
  position: relative;
}

.video-toggle-btn {
  position: relative;
  overflow: hidden;
}

.video-toggle-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.video-toggle-btn:hover::before {
  left: 100%;
}

.video-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
  min-width: 240px;
  max-width: 300px;
  z-index: 100;
  backdrop-filter: blur(15px);
}

.video-option {
  @apply px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-white/10 rounded-lg mx-2;
}

.video-option-active {
  @apply bg-white/5 border border-white/20;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .video-dropdown {
    min-width: 200px;
    right: 0;
    left: auto;
    transform: none;
  }
}
</style>
