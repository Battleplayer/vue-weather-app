<script setup lang="ts">
import temp from '@/helper/temp';
import { useRandomInfo } from '@/stores/randomInfo';
import { useSelectedCity } from '@/stores/selectedCity';
import { storeToRefs } from 'pinia';

const info = useRandomInfo();
const city = useSelectedCity();
const { temperatureScale } = storeToRefs(info);
const { selectedCity } = storeToRefs(city);
</script>

<template>
  <div class="header">
    <div class="item item--first-row">
      <span class="item--header">
        <img :src="`https://openweathermap.org/img/wn/${selectedCity?.weather[0].icon}@2x.png`" alt="weather icon" />
      </span>
    </div>
    <div class="item item--first-row">
      <span class="item--header"> {{ selectedCity.name }} </span>
      <span class="item--sub"> {{ selectedCity.sys.country }} </span>
    </div>
    <div class="item item--first-row">
      <span class="item--header"> {{ temp(temperatureScale.value, selectedCity.main.temp) }}&deg; </span>
      <span class="item--sub"> Temperature </span>
    </div>
    <div class="item">
      <span class="item--header"> {{ selectedCity.main.humidity }}<span>%</span> </span>
      <span class="item--sub"> Humidity </span>
    </div>
    <div class="item">
      <span class="item--header"> {{ selectedCity.wind.speed }}<span>m/s</span> </span>
      <span class="itemsub"> Wind speed </span>
    </div>
    <div class="item">
      <span class="item--header"> {{ selectedCity.clouds.all }}<span>%</span> </span>
      <span class="itemsub"> Cloudiness </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
  }
}

.item {
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: calc(var(--project-gap) / 4);
  text-align: center;

  &--first-row {
    @media screen and (max-width: 1024px) {
      width: 30%;
    }
  }

  &--header {
    font-size: 36px;
    @media screen and (max-width: 1024px) {
      font-size: 30px;
    }
    @media screen and (max-width: 767px) {
      font-size: 22px;
    }

    span {
      font-size: 20px;
    }
  }

  &--sub {
    font-size: 14px;
  }
}
</style>
