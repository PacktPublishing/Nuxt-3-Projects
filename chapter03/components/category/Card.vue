<template>
  <nuxt-link
    :to="`/categories/${category.name}`"
    class="relative group overflow-hidden rounded-lg"
  >
    <img
      :src="category.image"
      alt="Category image"
      class="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div
      class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-700 flex items-center justify-center"
    >
      <div class="text-center">
        <h3
          class="text-xl group-hover:text-2xl transition-all duration-700 font-bold text-white"
        >
          {{ category.name }}
        </h3>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { Category } from '~/types/index'

defineProps<{
  category: Category
}>()
</script>
