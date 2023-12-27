<script setup lang="ts">
import AddNewItem from '@/components/CitiesList/CitiesListNewItem.vue';
import { useSavedCitiesList } from '@/stores/savedCitiesList';
import { storeToRefs } from 'pinia';
import CityListItem from '@/components/CitiesList/CitiesListItem.vue';

const cities = useSavedCitiesList();
const { citiesList } = storeToRefs(cities);
</script>

<template>
  <div class="cities">
    <AddNewItem />
    <CityListItem v-for="item in citiesList" :key="item.id" :item="item" />
  </div>
</template>

<style scoped>
.cities {
  margin: 20px 0;
  display: flex;
  gap: var(--project-gap);
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    justify-content: space-around;
  }
}
</style>
