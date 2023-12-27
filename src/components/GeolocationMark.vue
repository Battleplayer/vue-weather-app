<script setup lang="ts">
import { onMounted } from 'vue';
import { useCityDetails } from '@/hoc/useCityDetails';

onMounted(() => {
  getCurrentLocation();
});

const { getCityDetails } = useCityDetails();
const getCurrentLocation = () => {
  async function success(position: GeolocationPosition) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    await getCityDetails(lat, lon, true);
  }

  function error() {
    console.log("Can't get you location");
  }

  if (!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
</script>

<template>
  <button title="Get current location" class="geolocation" @click="getCurrentLocation">
    <img src="../assets/geolocation.svg" alt="geolocation icon" />
  </button>
</template>

<style scoped lang="scss">
.geolocation {
  background-color: transparent;
  padding: 7px;
  border: none;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    filter: brightness(0.4) invert(0.7);
  }
}
</style>
