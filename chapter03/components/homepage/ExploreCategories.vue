<template>
  <section class="container py-12">
    <h2 class="text-3xl text-center font-bold text-gray-800 mb-6">
      Explore Properties by Category
    </h2>

    <!-- Assume CategoryCard is a component to display properties of a specific category -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <category-card
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import categories from '~/data/categories'
</script>

<style scoped></style>
