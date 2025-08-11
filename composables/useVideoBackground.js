import { ref, watch, onMounted } from 'vue'

// Available video backgrounds
const videoOptions = [
  {
    id: 'video1',
    name: 'Background 1',
    src: '/background/web_background.mp4',
    description: 'Original background video'
  },
  {
    id: 'video2', 
    name: 'Background 2',
    src: '/background/web_background2.mp4',
    description: 'Alternative background video'
  }
]

const currentVideoId = ref('video1') // Default to first video

export function useVideoBackground() {
  // Initialize from localStorage
  const initializeVideoBackground = () => {
    if (process.client) {
      const savedVideo = localStorage.getItem('selectedVideoBackground')
      if (savedVideo && videoOptions.find(v => v.id === savedVideo)) {
        currentVideoId.value = savedVideo
      }
    }
  }

  // Get current video data
  const getCurrentVideo = () => {
    return videoOptions.find(video => video.id === currentVideoId.value) || videoOptions[0]
  }

  // Switch to specific video
  const setVideoBackground = (videoId) => {
    const video = videoOptions.find(v => v.id === videoId)
    if (video) {
      currentVideoId.value = videoId
      if (process.client) {
        localStorage.setItem('selectedVideoBackground', videoId)
      }
    }
  }

  // Toggle between available videos
  const toggleVideoBackground = () => {
    const currentIndex = videoOptions.findIndex(v => v.id === currentVideoId.value)
    const nextIndex = (currentIndex + 1) % videoOptions.length
    setVideoBackground(videoOptions[nextIndex].id)
  }

  // Get next video in sequence (for preview)
  const getNextVideo = () => {
    const currentIndex = videoOptions.findIndex(v => v.id === currentVideoId.value)
    const nextIndex = (currentIndex + 1) % videoOptions.length
    return videoOptions[nextIndex]
  }

  // Watch for changes and trigger updates
  watch(currentVideoId, (newVideoId) => {
    // Emit custom event for components to listen to
    if (process.client) {
      window.dispatchEvent(new CustomEvent('videoBackgroundChanged', {
        detail: { videoId: newVideoId, video: getCurrentVideo() }
      }))
    }
  })

  // Initialize on mount
  onMounted(() => {
    initializeVideoBackground()
  })

  return {
    currentVideoId,
    videoOptions,
    getCurrentVideo,
    setVideoBackground,
    toggleVideoBackground,
    getNextVideo,
    initializeVideoBackground
  }
}
