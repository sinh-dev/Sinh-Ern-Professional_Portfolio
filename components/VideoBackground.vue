<template>
  <div class="video-background-container">
    <!-- Video Background -->
    <video
      ref="videoElement"
      :src="videoSrc"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      class="video-background"
      :class="{ 'video-paused': isPaused }"
      @loadeddata="onVideoLoaded"
      @error="onVideoError"
    ></video>

    <!-- Overlay for theme blending -->
    <div 
      class="video-overlay"
      :class="overlayClass"
    ></div>

    <!-- Fallback gradient background -->
    <div 
      v-if="showFallback" 
      class="fallback-background gradient-bg"
    ></div>

    <!-- Video Controls (optional) -->
    <div 
      v-if="showControls" 
      class="video-controls glass"
    >
      <button 
        @click="togglePlayPause"
        class="control-button theme-text"
        :aria-label="isPaused ? 'Play video' : 'Pause video'"
      >
        <svg v-if="isPaused" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
        <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
        </svg>
      </button>
      
      <button 
        @click="toggleMute"
        class="control-button theme-text"
        :aria-label="isMuted ? 'Unmute video' : 'Mute video'"
      >
        <svg v-if="isMuted" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </svg>
        <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      </button>
    </div>

    <!-- Content Slot -->
    <div class="video-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  videoSrc: {
    type: String,
    default: '/background/web_background.mp4'
  },
  showControls: {
    type: Boolean,
    default: false
  },
  opacity: {
    type: Number,
    default: 0.7
  },
  enableThemeBlending: {
    type: Boolean,
    default: true
  },
  autoPlay: {
    type: Boolean,
    default: true
  }
})

// Reactive state
const videoElement = ref(null)
const isPaused = ref(false)
const isMuted = ref(true)
const showFallback = ref(false)
const isLoaded = ref(false)

// Computed properties
const overlayClass = computed(() => {
  if (!props.enableThemeBlending) return ''
  
  return `dark:bg-black/30 light:bg-white/20`
})

// Video controls
const togglePlayPause = () => {
  if (!videoElement.value) return
  
  if (isPaused.value) {
    videoElement.value.play()
    isPaused.value = false
  } else {
    videoElement.value.pause()
    isPaused.value = true
  }
}

const toggleMute = () => {
  if (!videoElement.value) return
  
  videoElement.value.muted = !videoElement.value.muted
  isMuted.value = videoElement.value.muted
}

// Event handlers
const onVideoLoaded = () => {
  isLoaded.value = true
  showFallback.value = false
  
  if (props.autoPlay && videoElement.value) {
    videoElement.value.play().catch(error => {
      console.warn('Video autoplay failed:', error)
      isPaused.value = true
    })
  }
}

const onVideoError = (error) => {
  console.error('Video failed to load:', error)
  showFallback.value = true
}

// Intersection Observer for performance
const observeVideo = () => {
  if (!videoElement.value || !window.IntersectionObserver) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (isPaused.value && props.autoPlay) {
            videoElement.value?.play()
          }
        } else {
          if (!isPaused.value) {
            videoElement.value?.pause()
          }
        }
      })
    },
    { threshold: 0.1 }
  )

  observer.observe(videoElement.value)
  
  return observer
}

// Lifecycle
onMounted(() => {
  if (process.client) {
    // Set initial video properties
    if (videoElement.value) {
      videoElement.value.muted = isMuted.value
      
      // Set up intersection observer for performance
      const observer = observeVideo()
      
      // Cleanup on unmount
      onUnmounted(() => {
        observer?.disconnect()
      })
    }
  }
})
</script>

<style scoped>
.video-background-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  object-fit: cover;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.video-background.video-paused {
  opacity: 0.8;
}

.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transition: background-color 0.3s ease;
  pointer-events: none;
}

.fallback-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  pointer-events: none;
}

.video-controls {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 8px;
  padding: 8px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.control-button {
  @apply p-2 rounded-lg transition-all duration-300 hover:bg-white/20;
}

.video-content {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .video-controls {
    bottom: 10px;
    right: 10px;
    padding: 6px;
  }
  
  .control-button {
    @apply p-1.5;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .video-background {
    animation-play-state: paused !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .video-overlay {
    @apply bg-black/50;
  }
}
</style>
