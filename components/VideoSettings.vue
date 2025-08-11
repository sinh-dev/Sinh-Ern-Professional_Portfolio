<template>
  <div class="video-settings">
    <!-- Settings Trigger -->
    <button
      @click="toggleSettings"
      class="settings-trigger glass-button p-2 rounded-lg hover:scale-105 transition-all duration-300"
      :aria-label="showSettings ? 'Close video settings' : 'Open video settings'"
    >
      <svg class="w-4 h-4 theme-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>

    <!-- Settings Panel -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0 scale-95 translate-y-1"
      enter-to-class="transform opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform opacity-100 scale-100 translate-y-0"
      leave-to-class="transform opacity-0 scale-95 translate-y-1"
    >
      <div v-if="showSettings" class="settings-panel glass-card">
        <div class="settings-header">
          <h3 class="text-lg font-semibold theme-text">Video Background</h3>
          <button
            @click="toggleSettings"
            class="close-btn theme-text-muted hover:theme-text transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="settings-content">
          <!-- Video Selection -->
          <div class="setting-group">
            <label class="setting-label theme-text">Choose Background Video</label>
            <div class="video-grid">
              <div
                v-for="video in videoOptions"
                :key="video.id"
                @click="selectVideo(video.id)"
                class="video-card"
                :class="{ 'video-card-active': video.id === currentVideoId }"
              >
                <div class="video-preview">
                  <video
                    :src="video.src"
                    muted
                    loop
                    class="w-full h-16 object-cover rounded-lg"
                    @mouseenter="playPreview"
                    @mouseleave="pausePreview"
                  ></video>
                  <div 
                    v-if="video.id === currentVideoId"
                    class="active-indicator"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="video-info">
                  <div class="font-medium theme-text text-sm">{{ video.name }}</div>
                  <div class="text-xs theme-text-muted">{{ video.description }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="setting-group">
            <div class="flex space-x-2">
              <button
                @click="toggleVideoBackground"
                class="glass-button px-4 py-2 text-sm theme-text rounded-lg hover:scale-105 transition-all duration-200"
              >
                Switch Video
              </button>
              <button
                @click="resetToDefault"
                class="glass-button px-4 py-2 text-sm theme-text-muted rounded-lg hover:scale-105 transition-all duration-200"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Backdrop -->
    <div
      v-if="showSettings"
      @click="toggleSettings"
      class="settings-backdrop"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useVideoBackground } from '~/composables/useVideoBackground'

const {
  currentVideoId,
  videoOptions,
  setVideoBackground,
  toggleVideoBackground
} = useVideoBackground()

const showSettings = ref(false)

const toggleSettings = () => {
  showSettings.value = !showSettings.value
}

const selectVideo = (videoId) => {
  setVideoBackground(videoId)
}

const resetToDefault = () => {
  setVideoBackground('video1')
}

const playPreview = (event) => {
  event.target.play()
}

const pausePreview = (event) => {
  event.target.pause()
}
</script>

<style scoped>
.video-settings {
  position: relative;
}

.settings-panel {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  width: 320px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 100;
  backdrop-filter: blur(20px);
}

.settings-header {
  @apply flex items-center justify-between p-4 border-b border-white/10;
}

.settings-content {
  @apply p-4 space-y-6;
}

.setting-group {
  @apply space-y-3;
}

.setting-label {
  @apply block text-sm font-medium;
}

.video-grid {
  @apply grid grid-cols-1 gap-3;
}

.video-card {
  @apply p-3 rounded-lg border border-white/10 cursor-pointer transition-all duration-200 hover:border-white/30 hover:bg-white/5;
}

.video-card-active {
  @apply border-white/40 bg-white/10;
}

.video-preview {
  @apply relative mb-2;
}

.active-indicator {
  @apply absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white;
}

.settings-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  background: rgba(0, 0, 0, 0.1);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .settings-panel {
    width: 280px;
    right: -20px;
  }
}
</style>
