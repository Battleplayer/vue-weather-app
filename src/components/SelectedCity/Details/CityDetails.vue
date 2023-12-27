<script setup lang="ts">
import { useRandomInfo } from '@/stores/randomInfo';
import { storeToRefs } from 'pinia';

import { useSelectedCity } from '@/stores/selectedCity';
import CityDetailsForecast from '@/components/SelectedCity/Details/CityDetailsForecast.vue';
import Loader from '@/components/PreLoader.vue';
import CityDetailsInfo from '@/components/SelectedCity/Details/CityDetailsInfo.vue';

const info = useRandomInfo();
const city = useSelectedCity();
const { isLoading } = storeToRefs(info);
const { selectedCity } = storeToRefs(city);
</script>

<template>
  <div class="details">
    <Loader v-if="isLoading" />
    <template v-else>
      <h2 v-if="!selectedCity">Select a city</h2>
      <div v-else>
        <CityDetailsInfo />
        <CityDetailsForecast />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.details {
  background-color: var(--project-field-bcg);
  border-radius: var(--project-border-radius);
  padding: var(--project-gap);
  color: var(--project-color-white);
}
</style>
