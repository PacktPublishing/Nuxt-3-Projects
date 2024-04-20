<template>
  <USelectMenu
    v-model="locale"
    :options="locales"
    value-attribute="name"
    option-attribute="name"
  />
</template>

<script setup lang="ts">
import useTranslation from '../composables/useTranslation'

const { locale, locales } = useTranslation()
</script>

<style scoped></style>
