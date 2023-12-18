<script setup lang="ts">
import CityDetails from '@/components/City/Details/CityDetails.vue';
import CityLocation from '@/components/City/CityLocation.vue';
</script>

<template>
  <div class="main-grid">
    <div class="double">
      <CityDetails />
    </div>
    <CityLocation />
    <!--    todo implement when find API-->
    <!--    <div class="double">-->
    <!--      <CityOverview />-->
    <!--    </div>-->
    <!--    <CityForecast />-->
  </div>
</template>

<style scoped>
.main-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--project-gap) * 2);
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.double {
  grid-column: 1/3;
  @media screen and (max-width: 1024px) {
    grid-column: unset;
  }
}
</style>
