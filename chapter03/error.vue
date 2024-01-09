<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <base-overlay-bg />

    <div class="relative text-center">
      <div class="text-9xl font-black text-amber-600">404</div>

      <p class="text-gray-300 text-xl mt-4 mb-8">
        Oops, the page you're looking for doesn't exist.
      </p>

      <router-link to="/">
        <base-btn> Go Home </base-btn>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
