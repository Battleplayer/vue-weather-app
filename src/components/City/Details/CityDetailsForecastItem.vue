<script setup lang="ts">
import { getDate, getTime } from '@/helper/date';
import temp from '@/helper/temp';
import { useRandomInfo } from '@/stores/randomInfo';
import { storeToRefs } from 'pinia';

const info = useRandomInfo();
const { temperatureScale } = storeToRefs(info);

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});
const {
  dt,
  weather,
  main: { temp: temperature, humidity },
  wind
} = props.item;
</script>

<template>
  <div class="forecast-list--item">
    <div class="time">
      <p>{{ getDate(dt) }}</p>
      <p>{{ getTime(dt) }}</p>
    </div>

    <img :src="`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`" alt="weather icon" />
    <div class="info">
      <img src="@/assets/temperature.svg" alt="temperature" /> &nbsp;
      <span>{{ temp(temperatureScale.value, temperature) }}&deg;</span>
    </div>
    <div class="info">
      <img src="@/assets/humidity.svg" alt="humidity" /> &nbsp;
      <span>{{ humidity }}%</span>
    </div>
    <div class="info">
      <!--        <img src="@/assets/wind.svg" alt="wind" />-->
      <img src="@/assets/wind_dir.svg" :style="{ transform: `rotate(${wind.deg}deg)` }" alt="wind direction" /> &nbsp;
      <b>{{ wind.speed }}m/s</b>
    </div>
  </div>
</template>

<style scoped lang="scss">
.forecast-list--item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--project-main-bcg);
  background-color: var(--project-color-light);
  border-radius: var(--project-border-radius);
  font-weight: 700;
  padding: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 1024px) {
    flex-direction: row;
    flex-grow: 1;
    margin-right: 20px;
    justify-content: space-around;
  }

  .time {
    font-size: 13px;
    text-align: center;

    p {
      font-weight: 700 !important;
    }
  }

  .info {
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
