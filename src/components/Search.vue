<script setup lang="ts">
const props = defineProps({
  close: {
    type: Function,
    required: false
  }
});
import debounce from '@/helper/debounce';
import { searchTheCity } from '@/api/city';
import { useCityDetails } from '@/hoc/useCityDetails';
import { type Ref, ref } from 'vue';
import type Location from '@/typing/Location';

const { getCityDetails } = useCityDetails();

const searchData = ref('');
const citySearchResults: Ref<Array<Location>> = ref([]);

const handleSearch = debounce(async function () {
  if (searchData.value.length < 2) return;
  citySearchResults.value = await searchTheCity(searchData.value);
}, 400);

const handleSelectCity = async (lat: number, lon: number) => {
  await getCityDetails(lat, lon);
  citySearchResults.value = [];
  searchData.value = '';
  if (props.close) {
    props.close();
  }
};
</script>

<template>
  <div class="search">
    <label for="search">
      <img src="@/assets/search.svg" alt="search icon" />
      <input id="search" type="search" placeholder="Search a city" v-model="searchData" @keyup="handleSearch" />
    </label>
    <div class="cities" v-if="citySearchResults.length > 0 && searchData.length > 1">
      <button
        class="cities--item"
        v-for="city in citySearchResults"
        :key="`${city.lat}-${city.lon}`"
        @click="handleSelectCity(city.lat, city.lon)"
      >
        {{ city.name }} - {{ city.country }}, {{ city.state }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  gap: calc(var(--project-gap) * 2);
  position: relative;

  .cities {
    position: absolute;
    left: 0;
    top: 105%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    &--item {
      width: 100%;
      padding: 5px 7px;
      border: 0;
      background-color: var(--project-color-light);
      font-weight: 500;
      font-style: italic;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;

      &:hover {
        background-color: var(--project-color-white);
      }
    }
  }

  input {
    padding: 8px 8px 8px 40px;
    color: var(--project-color-light);
    font-weight: 700;
    border-radius: 14px;
    background-color: var(--project-field-bcg);
    border: none;
  }

  label {
    position: relative;

    img {
      position: absolute;
      top: 4px;
      left: 8px;
      width: 24px;
      filter: brightness(0.4) invert(0.7);
    }
  }
}
</style>
