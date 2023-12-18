<script setup lang="ts">
const key = import.meta.env.VITE_GOOGLE_MAPS_KEY;
import { useSelectedCity } from '@/stores/selectedCity';
import { GoogleMap, Marker } from 'vue3-google-map';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const city = useSelectedCity();
const { selectedCity } = storeToRefs(city);

let center = {};

watch(selectedCity, () => {
  if (selectedCity?.value?.coord?.lat) {
    center = { lat: +selectedCity.value?.coord?.lat, lng: +selectedCity.value?.coord?.lon };
  }
});
</script>

<template>
  <div class="map">
    <h2 v-if="!selectedCity?.coord?.lat">No city selected</h2>
    <div v-if="selectedCity?.coord?.lat" :key="selectedCity?.coord?.lat">
      <GoogleMap :api-key="key" style="width: 100%; height: 400px" :center="center" :zoom="7">
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </div>
  </div>
</template>

<style scoped>
.map {
  background-color: var(--project-field-bcg);
  border-radius: var(--project-border-radius);
  padding: var(--project-gap);
  color: var(--project-color-white);
}
</style>
