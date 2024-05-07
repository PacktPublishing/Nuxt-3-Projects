<template>
  <USelectMenu
    v-model="activeCity"
    :searchable="weatherStore.citiesLookup"
    placeholder="Search for a city..."
    @update:modelValue="emit('change', $event)"
  />
</template>

<script setup lang="ts">
const weatherStore = useWeatherStore()
const { activeCity } = storeToRefs(weatherStore)

const emit = defineEmits(['change'])
</script>
