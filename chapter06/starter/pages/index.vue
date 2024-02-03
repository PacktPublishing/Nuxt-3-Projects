<template>
  <!-- Hero Section -->
  <section
    class="hero bg-cover bg-center h-screen"
    style="background-image: url('/images/hero.png')"
  >
    <div class="bg-black bg-opacity-50 h-full">
      <div class="flex flex-col justify-center items-center h-full text-white">
        <h1 class="text-6xl font-bold mb-4">Welcome to Let's Cook!</h1>

        <div class="text-xl mb-8">
          Your Go-To Destination for Delicious Recipes
        </div>

        <a
          href="#recipes"
          class="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-orange-600 transition duration-300"
          >Explore Recipes</a
        >
      </div>
    </div>
  </section>

  <section id="recipes" class="my-16">
    <div class="container">
      <h2 class="text-center text-3xl font-black mb-4">Featured Recipes</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <recipe-card v-for="recipe in recipes" :recipe="recipe" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import recipes from '~/data/recipes'
</script>
