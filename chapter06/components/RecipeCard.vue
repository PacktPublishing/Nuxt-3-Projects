<template>
  <nuxt-link
    :to="`/recipe/${recipe.slug}`"
    class="rounded overflow-hidden shadow-xl"
  >
    <nuxt-img
      format="webp"
      class="w-full h-[250px]"
      height="250"
      :src="recipe.image"
      alt="Recipe Image"
      placeholder
    />

    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ recipe.title }}</div>

      <p class="text-gray-700 text-base mb-4">
        {{ recipe.description }}
      </p>

      <recipe-info :recipe="recipe" />
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
  recipe: Recipe
}>()
</script>
