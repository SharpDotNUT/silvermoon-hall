<script setup lang="ts">
import AppBar from './components/AppBar.vue'
</script>

<template>
  <div class="relative flex flex-col h-screen overflow-hidden">
    <AppBar class="z-100" />
    <RouterView class="h-full overflow-auto" />
  </div>
</template>

<style scoped></style>
