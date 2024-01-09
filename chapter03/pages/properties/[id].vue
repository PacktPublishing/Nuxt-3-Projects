<template>
  <div v-if="property">
    <!-- Hero Section -->
    <section
      class="relative h-[60vh] flex items-center justify-center rounded-lg"
    >
      <img
        :src="property.image"
        alt="Property Image"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-50" />
    </section>

    <!-- Property Details Card -->
    <section
      class="relative container bg-white rounded-lg shadow-lg z-20 -mt-20 p-4 lg:p-8 mb-12 max-w-5xl"
    >
      <h2 class="text-3xl font-bold text-center mb-2">{{ property.title }}</h2>

      <p class="text-gray-700 text-center text-lg">
        {{ property.description }}
      </p>

      <div class="text-gray-700 text-center mb-8">
        Listed {{ $fromNow(property.listedDate) }}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div class="bg-zinc-100 rounded-lg py-4">
          <div class="text-2xl font-bold text-center">
            {{ property.bedrooms }}
          </div>
          <p class="text-center text-gray-700">Bedrooms</p>
        </div>
        <div class="bg-zinc-100 rounded-lg py-4">
          <div class="text-2xl font-bold text-center">
            {{ property.bathrooms }}
          </div>
          <p class="text-center text-gray-700">Bathrooms</p>
        </div>

        <div class="bg-zinc-100 rounded-lg py-4">
          <div class="text-2xl font-bold text-center">
            {{ property.squareFeet }} sq ft
          </div>
          <p class="text-center text-gray-700">Square Feet</p>
        </div>
        <div class="bg-zinc-100 rounded-lg py-4">
          <div class="text-2xl font-black text-center text-primary">
            ${{ property.price.toLocaleString() }}
          </div>

          <p class="text-center text-gray-700">Price</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import properties from '~/data/properties'

definePageMeta({
  validate: async route => {
    // check if property exists
    return !!properties.find(item => item.id === route.params.id)
  }
})

const route = useRoute()
const property = properties.find(item => item.id === route.params.id)
</script>
