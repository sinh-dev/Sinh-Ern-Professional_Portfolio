<template>
  <section id="home" class="min-h-screen relative overflow-hidden">
    <!-- Main Hero Content -->
    <div class="min-h-screen relative">
      
      <!-- Desktop Unified Layout -->
      <div class="hidden lg:flex lg:min-h-screen">
        <!-- Unified Section -->
        <div class="unified-hero-section">
          <!-- Single Large Glassmorphism Frame -->
          <div class="unified-glass-frame">
            <div class="unified-content-layout">
              
              <!-- Left Content Area -->
              <div class="left-content-area">
                <!-- Profile Image -->
                <div class="profile-image-wrapper">
                  <div class="profile-image-container-new">
                    <div v-if="profileImageExists" class="relative">
                      <img 
                        :src="profileImage" 
                        :alt="name"
                        class="profile-image-new"
                        @error="handleImageError"
                      />
                    </div>
                    <div v-else class="profile-placeholder-new">
                      <div class="placeholder-content-new">
                        <div class="placeholder-avatar-new">
                          <span class="text-4xl font-bold text-gray-800">{{ name.charAt(0) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Text Content -->
                <div class="text-content">
                  <!-- Greeting -->
                  <p class="greeting-text">{{ greeting }}</p>
                  
                  <!-- Name -->
                  <h1 class="name-text">
                    {{ name }}
                  </h1>
                  
                  <!-- Title -->
                  <h2 class="title-text">
                    {{ title }}
                  </h2>

                  <!-- Description -->
                  <p class="description-text">
                    {{ description }}
                  </p>

                  <!-- CTA Buttons -->
                  <div class="cta-buttons">
                    <a 
                      href="#projects" 
                      class="btn-primary"
                    >
                      {{ buttons.viewWork }}
                    </a>
                    <a 
                      :href="buttons.cvLink" 
                      download 
                      class="btn-secondary"
                    >
                      {{ buttons.downloadCV }}
                    </a>
                  </div>
                </div>
              </div>

              <!-- Right Content Area -->
              <div class="right-content-area">
                <!-- Contact Message -->
                <h3 class="contact-message-unified">Feel free to reach me out...</h3>
                
                <!-- Social Links Grid -->
                <div class="social-grid-unified">
                  <a 
                    :href="socialLinks[2].url" 
                    target="_blank"
                    class="social-button-unified"
                    :aria-label="socialLinks[2].name"
                    :title="socialLinks[2].name"
                  >
                    <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a 
                    :href="socialLinks[1].url" 
                    target="_blank"
                    class="social-button-unified"
                    :aria-label="socialLinks[1].name"
                    :title="socialLinks[1].name"
                  >
                    <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a 
                    :href="socialLinks[3].url" 
                    target="_blank"
                    class="social-button-unified"
                    :aria-label="socialLinks[3].name"
                    :title="socialLinks[3].name"
                  >
                    <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a 
                    :href="socialLinks[5].url" 
                    target="_blank"
                    class="social-button-unified"
                    :aria-label="socialLinks[5].name"
                    :title="socialLinks[5].name"
                  >
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <a 
                    :href="socialLinks[0].url" 
                    target="_blank"
                    class="social-button-unified"
                    :aria-label="socialLinks[0].name"
                    :title="socialLinks[0].name"
                  >
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a 
                    :href="socialLinks[4].url" 
                    target="_blank"
                    class="social-button-unified"
                    :aria-label="socialLinks[4].name"
                    :title="socialLinks[4].name"
                  >
                    <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                </div>

                <!-- Available Badge -->
                <div class="available-badge-unified">
                  <div class="flex items-center justify-center space-x-2">
                    <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span class="text-xs text-white/90 font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile/Tablet Layout -->
      <div class="lg:hidden flex flex-col space-y-8 min-h-[90vh] justify-center animate-fadeInUp mobile-hero-section" style="animation-delay: 0.3s;">
        
        <!-- Profile Image Mobile -->
        <div class="flex justify-center animate-fadeInUp" style="animation-delay: 0.1s;">
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
                  <span class="text-4xl font-bold text-gray-800">{{ name.charAt(0) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content Mobile -->
        <div class="bg-white/90 backdrop-blur-xl p-6 rounded-2xl max-w-lg mx-auto shadow-xl text-center">
          <p class="text-gray-600 mb-2">{{ greeting }}</p>
          <h1 class="text-3xl sm:text-4xl font-bold text-black mb-3">
            {{ name }}
          </h1>
          <h2 class="text-lg sm:text-xl text-gray-500 tracking-wide mb-4">
            {{ title }}
          </h2>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            {{ description }}
          </p>

          <!-- CTA Buttons Mobile -->
          <div class="flex flex-col gap-3 mb-6">
            <a 
              href="#projects" 
              class="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              {{ buttons.viewWork }}
            </a>
            <a 
              :href="buttons.cvLink" 
              download 
              class="border-2 border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors"
            >
              {{ buttons.downloadCV }}
            </a>
          </div>
        </div>

        <!-- Contact Card Mobile -->
        <div class="contact-card-mobile max-w-sm mx-auto">
          <div class="contact-card-inner">
            <h3 class="contact-message-mobile">Feel free to reach me out...</h3>
            
            <!-- Social Links Mobile -->
            <div class="grid grid-cols-3 gap-3 max-w-xs mx-auto mb-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url" 
                target="_blank"
                class="contact-social-button-mobile"
                :aria-label="social.name"
                :title="social.name"
              >
                <svg v-if="social.icon === 'email'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <svg v-else-if="social.icon === 'linkedin'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <svg v-else-if="social.icon === 'github'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <svg v-else-if="social.icon === 'facebook'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <svg v-else-if="social.icon === 'telegram'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <svg v-else-if="social.icon === 'phone'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
            
            <!-- Available Badge Mobile -->
            <div class="available-badge-mobile">
              <div class="flex items-center justify-center space-x-2">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-xs text-white/80 font-medium">Available for work</span>
              </div>
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
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap');

/* Unified Layout Styles */
.unified-hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  overflow: hidden;
}





/* Single Large Glassmorphism Frame */
.unified-glass-frame {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1);
  padding: 50px;
  position: relative;
  overflow: hidden;
  max-width: 1400px;
  width: 100%;
}

.unified-glass-frame::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 30%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border-radius: 32px;
  pointer-events: none;
}

/* Unified Content Layout */
.unified-content-layout {
  display: flex;
  align-items: center;
  gap: 60px;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* Content Areas */
.left-content-area {
  flex: 2;
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
}

.right-content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
  max-width: 320px;
}

.profile-image-wrapper {
  flex-shrink: 0;
  margin-top: -100px;
}

.profile-image-container-new {
  position: relative;
  width: 350px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  background: transparent;
}

.profile-image-new {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-image-new:hover {
  transform: scale(1.05);
}

.profile-placeholder-new {
  width: 100%;
  height: 100%;
  background: transparent;
  border: 2px dashed rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-content-new {
  text-align: center;
}

.placeholder-avatar-new {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  border: 2px solid rgba(0, 0, 0, 0.2);
}

/* Text Content */
.text-content {
  flex: 1;
  text-align: left;
}

.greeting-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  font-weight: 400;
}

.name-text {
  font-family: 'Inter', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  line-height: 1.1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.title-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
  font-weight: 400;
}

.description-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 500px;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  background: white;
  color: #1e40af;
  padding: 14px 32px;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid white;
}

.btn-primary:hover {
  background: transparent;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  padding: 14px 32px;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: white;
  color: #1e40af;
  border-color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
}

/* Unified Right Content Styles */
.contact-message-unified {
  font-family: 'Dancing Script', cursive;
  font-size: 2.4rem;
  color: white;
  line-height: 1.3;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 0;
}

/* Social Grid Unified */
.social-grid-unified {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  max-width: 220px;
  width: 100%;
}

.social-button-unified {
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.social-button-unified:hover {
  background: white;
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

/* Available Badge Unified */
.available-badge-unified {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Mobile Hero Section */
.mobile-hero-section {
  position: relative;
}

/* Mobile Profile Image */
.profile-image-container-mobile {
  position: relative;
  width: 280px;
  height: 400px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: transparent;
}

.profile-image-mobile {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-image-mobile:hover {
  transform: scale(1.05);
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

/* Mobile Contact Card */
.contact-card-mobile {
  width: 100%;
}

.contact-card-mobile .contact-card-inner {
  background: rgba(15, 15, 15, 0.95);
  border-radius: 20px;
  padding: 24px 20px;
  text-align: center;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.25);
}

.contact-message-mobile {
  font-family: 'Dancing Script', cursive;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  font-weight: 500;
}

.contact-social-button-mobile {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.contact-social-button-mobile:hover {
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.available-badge-mobile {
  margin-top: 16px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive adjustments */
@media (max-width: 1280px) {
  .unified-hero-section {
    padding: 40px;
  }
  
  .unified-glass-frame {
    padding: 40px;
    max-width: 1200px;
  }
  
  .unified-content-layout {
    gap: 50px;
  }
  
  .left-content-area {
    gap: 30px;
  }
  
  .profile-image-container-new {
    width: 300px;
    height: 450px;
  }
  
  .name-text {
    font-size: 3.5rem;
  }
  
  .contact-message-unified {
    font-size: 2rem;
  }
  
  .social-grid-unified {
    max-width: 200px;
    gap: 12px;
  }
  
  .social-button-unified {
    width: 52px;
    height: 52px;
  }
}

@media (max-width: 1024px) {
  .unified-hero-section {
    padding: 30px;
  }
  
  .unified-glass-frame {
    padding: 30px;
    max-width: 1000px;
  }
  
  .unified-content-layout {
    gap: 40px;
    flex-direction: column;
    text-align: center;
  }
  
  .left-content-area {
    flex-direction: column;
    gap: 30px;
  }
  
  .right-content-area {
    max-width: 100%;
  }
  
  .profile-image-container-new {
    width: 280px;
    height: 420px;
  }
  
  .name-text {
    font-size: 3rem;
  }
  
  .contact-message-unified {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .profile-image-container-mobile {
    width: 250px;
    height: 350px;
  }
}

@media (max-width: 640px) {
  .profile-image-container-mobile {
    width: 220px;
    height: 320px;
  }
}
</style>
