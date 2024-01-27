<template>
  <div class="flex items-center justify-between px-6 py-4 bg-gray-100 rounded">
    <div class="flex items-center text-sm font-semibold text-gray-700">
      <span> ⏱️ {{ recipe.totalTime }} mins</span>
    </div>

    <div class="flex items-center text-sm font-semibold text-gray-700">
      <span>👨‍🍳 {{ recipe.difficulty }}</span>
    </div>

    <div class="flex items-center text-sm font-semibold text-gray-700">
      <span>⭐ {{ recipe.ratings }}/5</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  recipe: Recipe
}>()
</script>
