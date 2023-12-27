<script setup lang="ts">
import { ref } from 'vue';
import type SwitcherDataItem from '@/typing/SwitcherDataItem';
import Switcher from '@/components/SwitcherItem.vue';

const dataArray: Array<SwitcherDataItem> = [
  { value: '1', label: 'text1' },
  { value: '2', label: 'text2' },
  { value: '3', label: 'text3' }
];
const selectedValue = ref(dataArray[1]);

const handleSelect = (value: string) => {
  selectedValue.value = dataArray.find((i) => i.value === value) || dataArray[0];
};
</script>

<template>
  <div class="overview">
    <div class="header">
      <h2>Overview</h2>
      <Switcher :data="dataArray" :selected="selectedValue" :handle-select="handleSelect" />
    </div>
  </div>
</template>

<style scoped>
.overview {
  background-color: var(--project-field-bcg);
  padding: var(--project-gap);
  border-radius: var(--project-border-radius);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
