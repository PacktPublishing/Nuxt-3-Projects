<template>
  <section class="container py-12">
    <h2 class="text-3xl text-center font-bold text-gray-800 mb-6">
      Top Featured Properties
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <property-card
        v-for="property in featuredProperties"
        :key="property.id"
        :property="property"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import featuredProperties from '~/data/featuredProperties'
</script>

<style scoped></style>
