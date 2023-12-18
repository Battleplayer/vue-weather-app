export interface ForecastCity {
  cod: string; // Response code
  message: number; // Message code
  cnt: number; // Number of data points
  list: WeatherPoint[]; // List of weather data points
  city: City; // City information
}
export interface WeatherPoint {
  dt: number; // Time in Unix timestamp format
  main: {
    temp: number; // Temperature in Kelvin
    feels_like: number; // Feels-like temperature in Kelvin
    temp_min: number; // Minimum temperature in Kelvin
    temp_max: number; // Maximum temperature in Kelvin
    pressure: number; // Atmospheric pressure in hPa
    sea_level: number; // Sea level pressure in hPa
    grnd_level: number; // Ground level pressure in hPa
    humidity: number; // Relative humidity in percentage
    temp_kf: number; // Thermal difference in Kelvin
  };
  weather: WeatherDescription[]; // Array of weather descriptions
  clouds: { all: number }; // Percentage of cloud cover
  wind: { speed: number; deg: number; gust: number }; // Wind speed in m/s, direction in degrees, and gust in m/s
  visibility: number; // Visibility in meters
  pop: number; // Probability of precipitation in percentage
  rain?: { '3h': number }; // Optional precipitation amount in mm for the last 3 hours (present only if raining)
  sys: { pod: 'd' | 'n' }; // Day or night indicator
  dt_txt: string; // Date and time in string format
}

interface WeatherDescription {
  id: number; // Weather condition ID
  main: string; // Main weather condition (e.g., Rain, Clouds)
  description: string; // Detailed weather description
  icon: string; // Weather icon code
}

interface City {
  id: number; // City ID
  name: string; // City name
  coord: { lat: number; lon: number }; // City coordinates (latitude & longitude)
  country: string; // Country code
  population: number; // City population
  timezone: number; // Timezone offset in seconds
  sunrise: number; // Sunrise time in Unix timestamp format
  sunset: number; // Sunset time in Unix timestamp format
}
