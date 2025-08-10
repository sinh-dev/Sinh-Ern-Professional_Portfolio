<template>
  <div class="min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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
