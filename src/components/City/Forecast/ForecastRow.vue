<script setup lang="ts">
import type { WeatherPoint } from '@/typing/ForecastCity';
import temp from '@/helper/temp';
import { useRandomInfo } from '@/stores/randomInfo';
import { storeToRefs } from 'pinia';

const props = defineProps({
  item: {
    type: Object as () => WeatherPoint,
    required: true
  }
});
const info = useRandomInfo();
const { temperatureScale } = storeToRefs(info);
const { weather, main } = props.item;
</script>

<template>
  <div class="forecast-day">
    <img :src="`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`" alt="weather icon" />
    <span class="temp">
      {{ temp(temperatureScale.value, main?.temp) }}&deg;
      <span>/ {{ temp(temperatureScale.value, main?.feels_like) }}&deg; </span>
    </span>

    <span class="date">
      {{ item.dt_txt }}
      <!--      todo return when api will work-->
      <!--      <span class="day"> {{ getDay(dt) }}&nbsp;</span>-->
      <!--      <span class="month"> {{ getMonth(dt) }}, </span>-->
      <!--      <span class="week">-->
      <!--        {{ getDayOfWeek(dt) }}-->
      <!--      </span>-->
    </span>
  </div>
</template>

<style scoped lang="scss">
.forecast-day {
  padding: var(--project-gap);
  border-radius: var(--project-border-radius);
  display: flex;
  align-items: center;

  background-color: var(--project-main-bcg);
  color: var(--project-color-white);
  gap: 10px;

  .temp {
    font-size: 24px;

    span {
      font-size: 16px;
    }
  }

  .date {
    margin-left: auto;
    font-size: 24px;

    .month,
    .week {
      font-size: 20px;
    }
  }
}
</style>
