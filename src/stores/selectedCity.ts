import { ref } from 'vue';
import { defineStore } from 'pinia';
import type City from '@/typing/City';
import type { ForecastCity, WeatherPoint } from '@/typing/ForecastCity';

export const useSelectedCity = defineStore('selectedCity', () => {
  const selectedCity: City = ref(null);
  const forecastForSelectedCity: ForecastCity = ref(null);
  const forecast3Days: Array<WeatherPoint> = ref(null);
  const forecast10Days: Array<WeatherPoint> = ref(null);
  const selectTheCity = (city: City) => {
    selectedCity.value = city;
  };

  const setForecast = (data: ForecastCity) => {
    forecastForSelectedCity.value = data;
  };
  const set3Days = (data: Array<WeatherPoint>) => {
    forecast3Days.value = data;
  };
  const set10Days = (data: Array<WeatherPoint>) => {
    forecast10Days.value = data;
  };

  return {
    selectedCity,
    selectTheCity,
    forecastForSelectedCity,
    setForecast,
    forecast3Days,
    set3Days,
    forecast10Days,
    set10Days
  };
});
