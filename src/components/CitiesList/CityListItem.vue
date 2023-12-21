<script setup lang="ts">
import type SavedCity from '@/typing/SavedCity';
import { useSavedCitiesList } from '@/stores/savedCitiesList';
import { useRandomInfo } from '@/stores/randomInfo';
import { storeToRefs } from 'pinia';
import temp from '@/helper/temp';
import { useCityDetails } from '@/hoc/useCityDetails';
import { useSelectedCity } from '@/stores/selectedCity';

const props = defineProps({
  item: {
    type: Object as () => SavedCity,
    required: true
  }
});
const { name, country, temp: temperature, feels_like, id, icon, isGeolocation, lat, lon } = props.item;

const info = useRandomInfo();
const { temperatureScale } = storeToRefs(info);
const cities = useSavedCitiesList();
const { removeTheCity } = cities;
const { getCityDetails } = useCityDetails();
const city = useSelectedCity();
const { selectedCity } = storeToRefs(city);

const handleRemoveCity = (id: number) => {
  removeTheCity(id);
};
const handleSelect = (lat: number, lon: number) => {
  getCityDetails(lat, lon);
};
</script>

<template>
  <div
    role="button"
    @click="handleSelect(lat, lon)"
    class="city-item"
    :class="{ geo: isGeolocation, selected: id === selectedCity?.id }"
    :title="isGeolocation ? 'From geolocation' : ''"
  >
    <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" alt="weather" class="weather" />
    <div>
      <h4>{{ name }}</h4>
      <p>{{ country }}</p>
    </div>
    <span class="temp">
      {{ temp(temperatureScale.value, temperature) }}&deg; /
      <span>{{ temp(temperatureScale.value, feels_like) }}&deg;</span>
    </span>
    <button @click.stop="handleRemoveCity(id)" class="remove">X</button>
  </div>
</template>

<style scoped lang="scss">
.city-item {
  background-color: transparent;
  border: 1px solid var(--project-color-light);
  color: var(--project-color-white);
  text-align: center;
  border-radius: var(--project-border-radius);
  padding: calc(var(--project-gap) * 2) var(--project-gap);
  width: 180px;
  position: relative;
  transition: all 300ms ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: var(--project-gap);
  cursor: pointer;

  &.selected {
    background-color: var(--project-color-light);
    color: var(--project-main-bcg);
  }
  &:hover {
    background-color: var(--project-color-white);
    color: var(--project-field-bcg);
    .remove {
      scale: 2;
    }
  }

  h4 {
    font-weight: 700;
    font-size: 20px;
    margin: 0;
  }

  p {
    font-size: 12px;
  }
  .temp {
    font-size: 28px;
    span {
      font-size: 18px;
    }
  }

  .weather {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 32px;
    background-color: var(--project-color-light);
    border: 1px solid var(--project-main-bcg);
    color: var(--project-main-bcg);
    border-radius: 50%;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }

  .remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    cursor: pointer;
    position: absolute;
    top: -10px;
    right: 0;
    z-index: 3;
    background-color: var(--project-color-light);
    border: none;
    border-radius: 5px;
    transition: scale 300ms;
  }
}
.geo {
  border-color: firebrick;
  border-width: 2px;
  & > .remove {
    display: none;
  }
}
</style>
