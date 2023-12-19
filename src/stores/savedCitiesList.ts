import { defineStore } from 'pinia';
import { type Ref, ref } from 'vue';
import type SavedCity from '@/typing/SavedCity';
import type City from '@/typing/City';
import { getLocalStorage, setLocalstorage } from '@/helper/localstorage';

export const useSavedCitiesList = defineStore('savedCitiesList', () => {
  const dataFromLs = getLocalStorage('savedCities') ?? [];
  const citiesList: Ref<Array<SavedCity>> = ref(dataFromLs);
  const addTheCity = (city: City, isGeolocation = false) => {
    const ids = citiesList.value.map((city) => city.id);
    if (ids.includes(city.id)) return;
    const newCity: SavedCity = {
      id: city.id,
      name: city.name,
      country: city.sys.country,
      temp: city.main.temp,
      feels_like: city.main.feels_like,
      last_update: Date.now(),
      icon: city.weather[0].icon,
      lat: city.coord.lat,
      lon: city.coord.lon,
      isGeolocation
    };

    citiesList.value.push(newCity);
    setLocalstorage('savedCities', citiesList.value);
  };

  const removeTheCity = (id: number) => {
    citiesList.value = citiesList.value.filter((city) => city.id !== id);
    setLocalstorage('savedCities', citiesList.value);
  };

  return { citiesList, addTheCity, removeTheCity };
});
