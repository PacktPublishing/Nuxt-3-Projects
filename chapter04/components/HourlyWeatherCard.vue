<template>
  <div
    class="flex flex-col items-center min-w-[125px] max-w-[125px] p-4 border-dashed border-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg"
  >
    <p class="font-light text-lg">
      {{ dayjs(hour.dt * 1000).format('HH:mm') }}
    </p>
    <p class="text-2xl font-black">{{ hour.temp.toFixed(0) }}°C</p>
    <img
      :src="`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`"
      alt="Weather Icon"
      class="w-12 h-12"
    />
    <p class="text-sm mt-1">
      {{ hour.weather[0].description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

defineProps<{ hour: HourlyWeather }>()
</script>

<style scoped></style>
