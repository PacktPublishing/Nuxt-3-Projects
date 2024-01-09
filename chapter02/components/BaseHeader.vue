<template>
  <header class="bg-secondary text-white p-6">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-xl font-light uppercase">Kareem Dabbeet</div>

      <nav class="hidden md:block">
        <ul class="flex gap-x-4">
          <li v-for="item in headerLinks" :key="item.name">
            <button
              class="transition hover:text-primary"
              @click="useScrollTo(item.link)"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const headerLinks = [
  { name: 'About', link: 'about' },
  { name: 'showcase', link: 'showcase' },
  { name: 'Contact', link: 'contact' }
]
</script>

<style scoped></style>
