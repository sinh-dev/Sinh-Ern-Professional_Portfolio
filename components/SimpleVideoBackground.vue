<template>
  <div class="simple-video-wrapper">
    <!-- Fixed Video Background -->
    <video
      ref="videoElement"
      autoplay
      muted
      loop
      playsinline
      class="fixed-video-bg"
      :class="{ 'video-transitioning': isTransitioning }"
      @error="onVideoError"
      @loadeddata="onVideoLoaded"
    >
      <source :src="currentVideo.src" type="video/mp4">
    </video>

    <!-- Theme Overlay -->
    <div class="video-theme-overlay dark:bg-black/15 light:bg-white/10"></div>

    <!-- Fallback Background -->
    <div v-if="showFallback" class="fallback-bg gradient-bg"></div>

    <!-- Video Info Toast (optional) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0 translate-y-2"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 translate-y-2"
    >
      <div 
        v-if="showVideoInfo" 
        class="video-info-toast glass-card"
      >
        <div class="flex items-center space-x-3">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span class="theme-text text-sm font-medium">{{ currentVideo.name }}</span>
        </div>
      </div>
    </Transition>

    <!-- Content -->
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useVideoBackground } from '~/composables/useVideoBackground'

const { getCurrentVideo, currentVideoId } = useVideoBackground()

// Reactive state
const videoElement = ref(null)
const showFallback = ref(false)
const isTransitioning = ref(false)
const showVideoInfo = ref(false)

// Computed current video
const currentVideo = computed(() => getCurrentVideo())

// Video event handlers
const onVideoError = () => {
  showFallback.value = true
  console.warn('Video background failed to load, using fallback')
}

const onVideoLoaded = () => {
  showFallback.value = false
  isTransitioning.value = false
  
  // Set video playback speed to 0.5x for slower motion
  if (videoElement.value) {
    videoElement.value.playbackRate = 0.5
  }
  
  // Show video info briefly when changed
  showVideoInfo.value = true
  setTimeout(() => {
    showVideoInfo.value = false
  }, 2000)
}

// Handle video background changes
const handleVideoChange = (event) => {
  isTransitioning.value = true
  
  if (videoElement.value) {
    // Fade out current video
    videoElement.value.style.opacity = '0.5'
    
    // Load new video source
    setTimeout(() => {
      videoElement.value.load()
      videoElement.value.style.opacity = '1'
      // Ensure playback speed is set after loading
      videoElement.value.playbackRate = 0.5
    }, 300)
  }
}

// Lifecycle
onMounted(() => {
  if (process.client) {
    window.addEventListener('videoBackgroundChanged', handleVideoChange)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('videoBackgroundChanged', handleVideoChange)
  }
})
</script>

<style scoped>
.simple-video-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.fixed-video-bg {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 85vw;
  height: 100vh;
  object-fit: cover;
  z-index: -10;
  pointer-events: none;
  transition: opacity 0.5s ease;
  border-radius: 0;
}

.video-transitioning {
  opacity: 0.7;
}

.video-theme-overlay {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 85vw;
  height: 100vh;
  z-index: -9;
  pointer-events: none;
  transition: background-color 0.3s ease;
  border-radius: 0;
}

.fallback-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -10;
  pointer-events: none;
}

.video-info-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  padding: 12px 20px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  pointer-events: none;
}
</style>
