import type City from '@/typing/City';
import type { ForecastCity } from '@/typing/ForecastCity';
import { toast } from 'vue3-toastify';

const path = 'https://api.openweathermap.org/data/2.5';
const API_key = import.meta.env.VITE_WEATHER_KEY;
export const getWeather = async (lat: number, lng: number): Promise<City> => {
  try {
    const response = await fetch(`${path}/weather?lat=${lat}&lon=${lng}&appid=${API_key}`);
    if (!response.ok) {
      toast.error(`Error: ${response.status} - ${response.statusText}`);
      return {};
    }
    return await response.json();
  } catch (e) {
    toast.error(`Error: ${e.message}`);
    return {} as City;
  }
};

export const getForecast = async (lat: number, lon: number): Promise<ForecastCity> => {
  try {
    const response = await fetch(`${path}/forecast?lat=${lat}&lon=${lon}&appid=${API_key}`);
    if (!response.ok) {
      toast.error(`Error: ${response.status} - ${response.statusText}`);
      return {};
    }
    return await response.json();
  } catch (e) {
    toast.error(`Error: ${e.message}`);
    return {} as ForecastCity;
  }
};
export const getForecastDays = async (lat: number, lon: number, days: number): Promise<ForecastCity> => {
  try {
    const response = await fetch(`${path}/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&cnt=${days}`);
    if (!response.ok) {
      toast.error(`Error: ${response.status} - ${response.statusText}`);
      return {};
    }
    return await response.json();
  } catch (e) {
    toast.error(`Error: ${e.message}`);
    return {} as ForecastCity;
  }
};
