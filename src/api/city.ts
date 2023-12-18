import type Location from '@/typing/Location';
import type City from '@/typing/City';
import type { ForecastCity } from '@/typing/ForecastCity';

const path = 'https://api.openweathermap.org/data/2.5';
const geopath = 'https://api.openweathermap.org/geo/1.0/direct';
const API_key = import.meta.env.VITE_WEATHER_KEY;
export const getWeather = async (lat: number, lng: number): Promise<City> => {
  try {
    const response = await fetch(`${path}/weather?lat=${lat}&lon=${lng}&appid=${API_key}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (e) {
    console.error('Error:', e);
    return {} as City;
  }
};

export const getForecast = async (lat: number, lon: number): Promise<ForecastCity> => {
  try {
    const response = await fetch(`${path}/forecast?lat=${lat}&lon=${lon}&appid=${API_key}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (e) {
    console.error('Error:', e);
    return {} as ForecastCity;
  }
};
export const getForecastDays = async (lat: number, lon: number, days: number): Promise<ForecastCity> => {
  try {
    const response = await fetch(`${path}/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&cnt=${days}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (e) {
    console.error('Error:', e);
    return {} as ForecastCity;
  }
};

export const searchTheCity = async (city: string, limit = 10): Promise<Array<Location>> => {
  try {
    const response = await fetch(`${geopath}?q=${city}&limit=${limit}&appid=${API_key}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((city) => ({
      country: city.country,
      name: city.name,
      state: city.state,
      lat: city.lat,
      lon: city.lon
    }));
  } catch (e) {
    console.error('Error:', e);
    return [];
  }
};
