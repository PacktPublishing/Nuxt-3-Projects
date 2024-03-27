<template>
  <UContainer>
    <UCard>
      <div>{{ $t('welcome') }}</div>

      <USelectMenu
        v-model="locale"
        :options="locales"
        value-attribute="name"
        option-attribute="name"
      />
    </UCard>
  </UContainer>
</template>

<script setup>
const { locale, locales } = useTranslation()
</script>
