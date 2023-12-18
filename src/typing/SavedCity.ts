export default interface SavedCity {
  id: number;
  name: string;
  country: string;
  temp: number;
  feels_like: number;
  last_update: number;
  icon: string;
  isGeolocation: boolean;
}
