export {}

declare global {
  interface CityData {
    name: string
    lat: number
    lon: number
    country: string
    state: string
  }

  interface WeatherDataResponse {
    current: HourlyWeather
    hourly: Array<HourlyWeather>
    daily: Array<DailyWeather>
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
  }

  interface HourlyWeather {
    dt: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: Array<Weather>
    pop: number
  }

  interface DailyWeather {
    dt: number
    temp: {
      day: number
      night: number
    }
    weather: Array<Weather>
  }

  interface Weather {
    id: number
    main: string
    description: string
    icon: string
  }
}
