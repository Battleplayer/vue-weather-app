<script setup lang="ts">
import Switcher from '@/components/SwitcherItem.vue';
import { ref } from 'vue';
import type SwitcherDataItem from '@/typing/SwitcherDataItem';
import { useRandomInfo } from '@/stores/randomInfo';
import { useSelectedCity } from '@/stores/selectedCity';
import { storeToRefs } from 'pinia';
import Loader from '@/components/PreLoader.vue';
import ForecastRow from '@/components/SelectedCity/Forecast/ForecastCityRow.vue';

const daysArray: SwitcherDataItem[] = [
  { value: '3', label: '3 days' },
  { value: '10', label: '10 days' }
];

const info = useRandomInfo();
const city = useSelectedCity();
const { isForecastLoading } = storeToRefs(info);
const { forecast3Days, forecast10Days } = storeToRefs(city);

const selectedDays = ref(daysArray[0]);
const handleSelectDay = (value: string) => {
  selectedDays.value = daysArray.find((el) => el.value === value);
};
</script>

<template>
  <div class="forecast">
    <div class="forecast-header">
      <h2>Forecast</h2>
      <Switcher :handle-select="handleSelectDay" :selected="selectedDays" :data="daysArray" />
    </div>
    <div v-if="isForecastLoading" class="wrapper">
      <Loader />
    </div>

    <div class="forecast-list" v-else>
      <ForecastRow :item="item" :key="item.dt" v-for="item in selectedDays.value === '3' ? forecast3Days : forecast10Days" />
    </div>
  </div>
</template>

<style scoped>
.forecast {
  padding: var(--project-gap);
  border-radius: var(--project-border-radius);
  background-color: var(--project-field-bcg);

  .forecast-header {
    margin-bottom: var(--project-gap);
    display: flex;
    justify-content: space-between;
  }

  .forecast-list {
    display: flex;
    flex-direction: column;
    gap: calc(var(--project-gap) / 2.5);
  }

  .wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
