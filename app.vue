<template>
  <div class="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat" style="background-image: url('/images/background.jpg')">
    <div class="min-h-screen bg-black/40 backdrop-blur-sm">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '~/composables/useTheme'

// Initialize theme on app startup
const { initializeTheme } = useTheme()
</script>

<style>
@import '~/assets/css/main.css';
</style>
