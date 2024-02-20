<template>
  <h1>Weather App</h1>
  <CityInput @search="getWeather"></CityInput>
  <WeatherCard v-if="weatherData" :weather-data="weatherData"></WeatherCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { WeatherData } from '../components/models';
import WeatherCard from '../components/WeatherCard.vue';
import CityInput from '../components/CityInput.vue';

const apiKey = '65426d5fd84fb4ed3b2f7a7a1263c1c8';
const defaultCity = 'Lviv';

export default defineComponent({
  name: 'MainLayout',
  components: { WeatherCard, CityInput },
  data() {
    return {
      weatherData: null as WeatherData | null // Початкове значення для weatherData
    };
  },
  mounted() {
    this.getWeather(defaultCity);
  },
  methods: {
    getWeather(city: string) {
      axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
          this.weatherData = response.data; // Оновлення weatherData після отримання відповіді
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
</script>

<style scoped>
h1 {
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  margin: 15px 0;
}
</style>

