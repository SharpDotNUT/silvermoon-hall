<script setup lang="ts">
import './assets/main.css';
</script>

<template>
  <NuxtRouteAnnouncer />
  <div class="fixed top-0 left-0 w-full h-full flex flex-col">
    <AppBar />
    <NuxtPage />
  </div>
</template>
