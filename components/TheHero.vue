<template>
  <section id="home" class="min-h-screen relative overflow-hidden">
    <!-- Video Background Overlay for better text visibility -->
    <div class="absolute inset-0 dark:bg-black/30 light:bg-white/20 z-0 pointer-events-none"></div>
    
    <!-- Subtle floating elements -->
    <div class="absolute inset-0 z-1 pointer-events-none">
      <div 
        class="absolute top-20 left-10 w-32 h-32 rounded-full dark:bg-white/5 light:bg-black/5 blur-2xl animate-pulse"
        style="animation-duration: 4s;"
      ></div>
      <div 
        class="absolute bottom-40 right-20 w-24 h-24 rounded-full dark:bg-white/8 light:bg-black/8 blur-xl animate-pulse"
        style="animation-duration: 6s; animation-delay: 2s;"
      ></div>
    </div>

    <!-- Main Hero Content -->
    <div class="min-h-screen flex items-center relative z-10">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        <!-- Desktop Split Layout -->
        <div class="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:min-h-[80vh]">
          
          <!-- Left Content Panel -->
          <div class="glass-card p-10 xl:p-12 backdrop-blur-2xl animate-fadeInUp" style="background: rgba(0, 0, 0, 0.15);">
            <!-- Greeting -->
            <div class="mb-6">
              <p class="text-lg theme-text-muted video-enhanced-text mb-2">{{ greeting }}</p>
              <h1 class="text-4xl xl:text-5xl 2xl:text-6xl font-bold theme-text mb-4 text-glow video-enhanced-text">
                <span class="gradient-text">{{ name }}</span>
              </h1>
              <h2 class="text-xl xl:text-2xl font-light theme-text-muted tracking-wide video-enhanced-text">
                {{ title }}
              </h2>
            </div>

            <!-- Social Links -->
            <div class="grid grid-cols-3 gap-4 mb-8 max-w-xs">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url" 
                target="_blank"
                class="w-12 h-12 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                :aria-label="social.name"
                :title="social.name"
              >
                <component :is="social.icon" class="w-5 h-5 theme-text" />
              </a>
            </div>

            <!-- Description -->
            <p class="text-base xl:text-lg theme-text-muted leading-relaxed mb-8 video-enhanced-text">
              {{ description }}
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                class="glass-button theme-text font-medium text-center hover-lift px-6 py-3"
              >
                <span class="video-enhanced-text">{{ buttons.viewWork }}</span>
              </a>
              <a 
                :href="buttons.cvLink" 
                download 
                class="glass-button theme-text font-medium text-center hover-lift px-6 py-3 border border-white/20"
              >
                <span class="video-enhanced-text">{{ buttons.downloadCV }}</span>
              </a>
            </div>
          </div>

          <!-- Right Image Panel -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <!-- Profile Image -->
              <div class="profile-image-container">
                <div v-if="profileImageExists" class="relative">
                  <img 
                    :src="profileImage" 
                    :alt="name"
                    class="profile-image"
                    @error="handleImageError"
                  />
                  <div class="profile-image-overlay"></div>
                </div>
                <div v-else class="profile-placeholder">
                  <div class="placeholder-content">
                    <div class="placeholder-avatar">
                      <span class="text-6xl font-bold theme-text">{{ name.charAt(0) }}</span>
                    </div>
                    <p class="text-sm theme-text-muted mt-4 text-center">Add your profile image to<br>/public/images/profile.jpg</p>
                  </div>
                </div>
              </div>
              
              <!-- Floating Badge -->
              <div class="floating-badge glass-card">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-sm theme-text font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile/Tablet Layout -->
        <div class="lg:hidden flex flex-col items-center text-center min-h-[90vh] justify-center">
          
          <!-- Profile Image Mobile -->
          <div class="mb-8">
            <div class="profile-image-container-mobile">
              <div v-if="profileImageExists" class="relative">
                <img 
                  :src="profileImage" 
                  :alt="name"
                  class="profile-image-mobile"
                  @error="handleImageError"
                />
                <div class="profile-image-overlay-mobile"></div>
              </div>
              <div v-else class="profile-placeholder-mobile">
                <div class="placeholder-content-mobile">
                  <div class="placeholder-avatar-mobile">
                    <span class="text-4xl font-bold theme-text">{{ name.charAt(0) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content Mobile -->
          <div class="glass-card p-8 backdrop-blur-2xl max-w-lg" style="background: rgba(0, 0, 0, 0.15);">
            <p class="text-base theme-text-muted video-enhanced-text mb-2">{{ greeting }}</p>
            <h1 class="text-3xl sm:text-4xl font-bold theme-text mb-3 text-glow video-enhanced-text">
              <span class="gradient-text">{{ name }}</span>
            </h1>
            <h2 class="text-lg sm:text-xl font-light theme-text-muted tracking-wide mb-6 video-enhanced-text">
              {{ title }}
            </h2>

            <!-- Social Links Mobile -->
            <div class="grid grid-cols-3 gap-3 mb-6 max-w-xs mx-auto">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url" 
                target="_blank"
                class="w-10 h-10 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                :aria-label="social.name"
                :title="social.name"
              >
                <component :is="social.icon" class="w-4 h-4 theme-text" />
              </a>
            </div>

            <!-- CTA Buttons Mobile -->
            <div class="flex flex-col gap-3">
              <a 
                href="#projects" 
                class="glass-button theme-text font-medium text-center hover-lift px-6 py-3"
              >
                <span class="video-enhanced-text">{{ buttons.viewWork }}</span>
              </a>
              <a 
                :href="buttons.cvLink" 
                download 
                class="glass-button theme-text font-medium text-center hover-lift px-6 py-3 border border-white/20"
              >
                <span class="video-enhanced-text">{{ buttons.downloadCV }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'

// Hero content data
const greeting = ref('Hi, I am')
const name = ref('Sinh Ern')
const title = ref('Full-Stack Web Developer')
const description = ref('Crafting responsive, scalable, and user-focused web applications with modern frameworks and clean code.')
const profileImage = ref('/images/profile.jpg') // You'll need to add your profile image
const profileImageExists = ref(true)

const buttons = ref({
  viewWork: 'View My Work',
  downloadCV: 'Download CV',
  cvLink: '/cv.pdf'
})

// Social media links with proper icons and contact info
const socialLinks = ref([
  {
    name: 'Email',
    url: 'mailto:sinh.ern.pfdev@gmail.com',
    icon: 'email'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sinh-ern-8b22b0345',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/sinh-dev',
    icon: 'github'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/zaaddyy.xingg?mibextid=ZbWKwL',
    icon: 'facebook'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/sinhernrlistic',
    icon: 'telegram'
  },
  {
    name: 'Phone',
    url: 'tel:+85587868299',
    icon: 'phone'
  }
])

// Handle image loading error
const handleImageError = () => {
  profileImageExists.value = false
}

// Optional: Add props for customization
defineProps({
  customName: {
    type: String,
    default: ''
  },
  customTitle: {
    type: String,
    default: ''
  },
  customTagline: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
/* Profile Image Styles */
.profile-image-container {
  position: relative;
  width: 500px;  /* Increased by 25% from 400px */
  height: 625px; /* Increased by 25% from 500px */
  max-width: 100%;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  filter: grayscale(20%);
  transition: all 0.5s ease;
}

.profile-image:hover {
  filter: grayscale(0%);
  transform: scale(1.02);
}

.profile-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.1) 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-radius: 20px;
  pointer-events: none;
}

/* Mobile Profile Image */
.profile-image-container-mobile {
  position: relative;
  width: 250px;  /* Adjusted for single frame layout */
  height: 300px; /* Taller aspect ratio for mobile portrait */
  margin: 0 auto;
}

.profile-image-mobile {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  filter: grayscale(20%);
  transition: all 0.5s ease;
}

.profile-image-overlay-mobile {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.1) 0%,
    transparent 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-radius: 16px;
  pointer-events: none;
}

/* Profile Image Placeholder */
.profile-placeholder {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.placeholder-content {
  text-align: center;
}

.placeholder-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.profile-placeholder-mobile {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.placeholder-content-mobile {
  text-align: center;
}

.placeholder-avatar-mobile {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

/* Floating Badge */
.floating-badge {
  position: absolute;
  bottom: 20px;
  right: 80px;
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Responsive adjustments */
@media (max-width: 1280px) {
  .profile-image-container {
    width: 437px; /* Increased by 25% from 350px */
    height: 562px; /* Increased by 25% from 450px */
  }
}

@media (max-width: 1024px) {
  .profile-image-container {
    width: 400px; /* Increased by 25% from 320px */
    height: 500px; /* Increased by 25% from 400px */
  }
}

@media (max-width: 768px) {
  .profile-image-container-mobile {
    width: 225px; /* Increased by 25% from 180px */
    height: 275px; /* Increased by 25% from 220px */
  }
}

@media (max-width: 640px) {
  .profile-image-container-mobile {
    width: 200px; /* Increased by 25% from 160px */
    height: 250px; /* Increased by 25% from 200px */
  }
}
</style>
