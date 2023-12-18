import { defineStore } from 'pinia';
import { ref } from 'vue';
import City from '@/typing/City';

export const useDefaultCity = defineStore('defaultCity', () => {
  const defaultCity: City = ref(null);

  function setDefaultCity(city: City) {
    defaultCity.value = city;
  }

  return { defaultCity, setDefaultCity };
});
