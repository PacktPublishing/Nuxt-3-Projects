<template>
  <div class="h-full w-full flex flex-row relative">
    <div class="flex flex-col justify-between w-2/3 p-16 bg-slate-800">
      <!-- <img src="/logo.png" class="w-32 object-contain" /> -->

      <h1 class="text-[64px] font-black text-white">
        {{ title }}
      </h1>

      <div class="text-2xl leading-10 font-black text-slate-100 mb-4">
        {{ description }}
      </div>

      <p class="text-2xl font-bold text-primary mb-0">{{ siteConfig.url }}</p>
    </div>

    <img :src="image" alt="Card Image" class="w-1/3 h-full object-cover" />
  </div>
</template>

<script lang="ts" setup>
const siteConfig = useSiteConfig()

withDefaults(
  defineProps<{
    title: string
    description: string
    image?: string
  }>(),
  { image: '/images/hero.png' }
)
</script>
