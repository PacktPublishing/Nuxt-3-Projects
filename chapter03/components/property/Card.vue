<template>
  <nuxt-link
    :to="`/properties/${property.id}`"
    class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
  >
    <img
      :src="property.image"
      alt="Property image"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <h2 class="text-lg font-bold text-gray-800 mb-2">
        {{ property.title }}
      </h2>

      <p class="text-gray-600 text-sm mb-4">{{ property.description }}</p>

      <div class="flex justify-between items-center">
        <span class="font-bold text-primary text-lg">
          ${{ property.price }}
        </span>

        <span class="text-gray-600 text-sm">
          {{ property.bedrooms }} BR | {{ property.bathrooms }} BA |
          {{ property.squareFeet }} sq ft
        </span>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
  property: Property
}>()
</script>

<style scoped></style>
