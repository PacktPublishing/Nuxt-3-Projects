import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
  const activeCity = ref<CityData>()
  const weatherData = ref<WeatherDataResponse>()

  const config = useRuntimeConfig()
  const apiKey = config.public.weatherApiKey

  const citiesLookup = async (query: string): Promise<CityData[]> => {
    const response: Array<CityData> = await $fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`
    )

    return response.map(city => ({
      ...city,
      label: `${city.name}, ${city.country}`
    }))
  }

  const getWeatherData = async () => {
    try {
      weatherData.value = await $fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${activeCity.value?.lat}&lon=${activeCity.value?.lon}&appid=${apiKey}&units=metric`
      )
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  return { activeCity, weatherData, citiesLookup, getWeatherData }
})
