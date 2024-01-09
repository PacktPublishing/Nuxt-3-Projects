<template>
  <section class="container py-12">
    <h2 class="text-3xl text-center font-bold text-gray-800 mb-6">
      Recently Listed Properties
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <property-card
        v-for="property in recentlyListedProperties"
        :key="property.id"
        :property="property"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import recentlyListedProperties from '~/data/recentlyListedProperties'
</script>

<style scoped></style>
