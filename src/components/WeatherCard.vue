<template>
  <div class="weather-card">
    <div class="weather-icon">
      <img :src="'https://openweathermap.org/img/wn/' + weatherData?.weather[0].icon + '.png'" alt="Weather icon">
    </div>
    <div class="header">
      <h2>{{ weatherData.name }}</h2>
    </div>
    <div class="weather-details">
      <div class="temperature">{{ weatherData.main.temp }}°C</div>
      <div class="wind">Wind: {{ weatherData.wind.speed }} m/s, {{ getWindDirection(weatherData.wind.deg) }}</div>
      <div class="precipitation">Precipitation: {{ weatherData.weather[0].description }}</div>
      <div class="pressure">Pressure: {{ weatherData.main.pressure }} hPa</div>
    </div>
  </div>
</template>

<script lang="ts">
import {WeatherData} from 'components/models';

export default {
  props: {
    weatherData: Object as () => WeatherData

  },
  methods: {
    getWindDirection(deg: number) {
      if (deg > 337.5) return 'N';
      if (deg > 292.5) return 'NW';
      if (deg > 247.5) return 'W';
      if (deg > 202.5) return 'SW';
      if (deg > 157.5) return 'S';
      if (deg > 122.5) return 'SE';
      if (deg > 67.5) return 'E';
      if (deg > 22.5) return 'NE';
      return 'N';
    }
  }
};
</script>

<style scoped>
.weather-card {
  background-color: #8aabfa;
  padding: 20px;
  width: 600px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 20px;

  h2 {
    font-weight: 400;
    font-size: 36px;
  }
}

.weather-details {
  font-size: 16px;
}

.temperature {
  font-size: 24px;
  font-weight: bold;
}

.wind,
.precipitation,
.pressure {
  margin-top: 10px;
}
</style>
