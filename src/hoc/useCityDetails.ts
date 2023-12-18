import { getForecast, getForecastDays, getWeather } from '@/api/city';
import { useRandomInfo } from '@/stores/randomInfo';
import { useSelectedCity } from '@/stores/selectedCity';
import { useSavedCitiesList } from '@/stores/savedCitiesList';

export const useCityDetails = () => {
  const info = useRandomInfo();
  const { setLoadingStatus, setForecastLoadingStatus } = info;
  const selectedCity = useSelectedCity();
  const { selectTheCity, setForecast, set3Days, set10Days } = selectedCity;
  const citiesList = useSavedCitiesList();
  const { addTheCity } = citiesList;

  const getCityDetails = async (lat: number, lon: number, isGeolocation?: boolean) => {
    setLoadingStatus(true);
    setForecastLoadingStatus(true);
    Promise.all([getWeather(lat, lon), getForecast(lat, lon), getForecastDays(lat, lon, 3), getForecastDays(lat, lon, 10)])
      .then(([cityDetails, cityForecast, forecast3Days, forecast10Days]) => {
        selectTheCity(cityDetails);
        setForecast(cityForecast);
        set3Days(forecast3Days.list);
        set10Days(forecast10Days.list);
        addTheCity(cityDetails, isGeolocation);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoadingStatus(false);
        setForecastLoadingStatus(false);
      });
  };

  return { getCityDetails };
};
