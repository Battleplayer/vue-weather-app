import type Location from '@/typing/Location';
import { toast } from 'vue3-toastify';

const geopath = 'https://api.openweathermap.org/geo/1.0/direct';
const API_key = import.meta.env.VITE_WEATHER_KEY;
export const searchTheCity = async (city: string, limit = 10): Promise<Array<Location>> | null => {
  try {
    const response = await fetch(`${geopath}?q=${city}&limit=${limit}&appid=${API_key}`);
    if (!response.ok) {
      toast.error(`Error: ${response.status} - ${response.statusText}`);
      return null;
    }

    const data: Array<Location> = await response.json();
    return data.map((city) => ({
      country: city.country,
      name: city.name,
      state: city.state,
      lat: city.lat,
      lon: city.lon
    }));
  } catch (e) {
    toast.error(`Error: ${e.message}`);
    return null;
  }
};
