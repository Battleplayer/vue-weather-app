<script setup lang="ts">
import SwitcherDataItem from '@/components/SwitcherItem.vue';
import { storeToRefs } from 'pinia';
import { useRandomInfo } from '@/stores/randomInfo';
import GeolocationMark from '@/components/GeolocationMark.vue';
import SearchCityInput from '@/components/SearchCityInput.vue';
import tempDataArray from '@/helper/tempDataArray';

const date = new Date().toDateString();
const info = useRandomInfo();
const { temperatureScale } = storeToRefs(info);
const { setTemperatureScale } = info;

const handleSwitch = (value: string) => {
  const newScaleValue = tempDataArray.find((el) => el.value === value) || tempDataArray[0];
  if (value === temperatureScale.value.value) return;
  setTemperatureScale(newScaleValue);
};
</script>

<template>
  <header>
    <img src="@/assets/logo.svg" alt="Home logo" />
    <div class="date">
      <h4>Hi, User</h4>
      <p>Today is {{ date }}</p>
    </div>
    <SearchCityInput />
    <GeolocationMark />
    <SwitcherDataItem :data="tempDataArray" :selected="temperatureScale" :handle-select="handleSwitch" />
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  max-width: 1400px;
  background-color: var(--project-main-bcg);
  display: flex;
  color: var(--project-color-white);
  gap: var(--project-gap);
  padding: 20px;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 10px;
  }

  img {
    width: 40px;
  }
}

.date {
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: var(--project-gap);
}
</style>
