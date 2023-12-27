<script setup lang="ts">
import { searchTheCity } from '@/api/searchCityService';

const props = defineProps({
  close: {
    type: Function,
    required: false
  },
  focusInput: {
    type: Boolean,
    required: false,
    default: false
  }
});
import debounce from '@/helper/debounce';

import { useCityDetails } from '@/hoc/useCityDetails';
import { onMounted, type Ref, ref } from 'vue';
import type Location from '@/typing/Location';

const { getCityDetails } = useCityDetails();

const searchRef = ref(null);

const searchData = ref('');
const citySearchResults: Ref<Array<Location>> = ref(null);

const handleSearch = debounce(async function () {
  if (searchData.value.length < 2) return;
  citySearchResults.value = await searchTheCity(searchData.value);
}, 400);

const handleSelectCity = async (lat: number, lon: number) => {
  await getCityDetails(lat, lon);
  citySearchResults.value = null;
  searchData.value = '';
  if (props.close) {
    props.close();
  }
};

onMounted(() => {
  if (props.focusInput) {
    searchRef.value.focus();
  }
});
</script>

<template>
  <div class="search">
    <label>
      <img src="@/assets/search.svg" alt="search icon" />
      <input ref="searchRef" type="search" placeholder="Search a city" v-model="searchData" @keyup="handleSearch" />
    </label>

    <p class="cities cities--no-data" v-if="citySearchResults?.length === 0 && searchData.length > 1">No city found</p>
    <div class="cities" v-if="citySearchResults?.length > 0 && searchData.length > 1">
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
  z-index: 3;
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
    background-color: rgba(255, 255, 255, 0.75);
    padding: 5px;
    &--no-data {
      font-weight: 500;
      padding: 10px;
      background-color: var(--project-color-terra-rosa);
    }

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
