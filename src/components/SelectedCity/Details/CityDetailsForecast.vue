<script setup lang="ts">
import { useSelectedCity } from '@/stores/selectedCity';
import { storeToRefs } from 'pinia';
import CityDetailsForecastItem from '@/components/SelectedCity/Details/CityDetailsForecastItem.vue';

const city = useSelectedCity();
const { forecastForSelectedCity } = storeToRefs(city);
</script>

<template>
  <div class="forecast-list">
    <CityDetailsForecastItem :item="item" v-for="item in forecastForSelectedCity.list" :key="item.dt" />
  </div>
</template>

<style scoped lang="scss">
.forecast-list {
  display: flex;
  overflow-x: scroll;
  gap: 7px;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    max-height: 600px;
    overflow-x: auto;
  }
}
</style>
