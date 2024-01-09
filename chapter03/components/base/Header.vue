<template>
  <!-- Header -->
  <header
    class="absolute top-0 left-0 w-full border-b border-b-gray-800 z-20 p-6"
  >
    <div class="container flex justify-between items-center">
      <h1 class="text-white font-extralight uppercase text-2xl">Homescape</h1>
      <nav>
        <ul class="flex space-x-4">
          <li v-for="link in navLinks" :key="link.text">
            <a
              :href="link.href"
              class="text-white transition-colors font-semibold hover:text-primary"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const navLinks = ref([
  { text: 'Home', href: '#' },
  { text: 'Listings', href: '#' },
  { text: 'About Us', href: '#' },
  { text: 'Contact', href: '#' }
])
</script>

<style scoped></style>
