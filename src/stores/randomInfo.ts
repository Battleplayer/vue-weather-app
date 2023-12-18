import { defineStore } from 'pinia';
import { type Ref, ref } from 'vue';

import type SwitcherDataItem from '@/typing/SwitcherDataItem';

export const useRandomInfo = defineStore('randomInfo', () => {
  const temperatureScale: Ref<SwitcherDataItem> = ref({ value: 'C', label: 'C' });
  const isLoading = ref(false);
  const isForecastLoading = ref(false);
  const isModalVisible = ref(false);

  const setTemperatureScale = (value: SwitcherDataItem) => {
    temperatureScale.value = value;
  };

  const setLoadingStatus = (value: boolean) => {
    isLoading.value = value;
  };
  const setForecastLoadingStatus = (value: boolean) => {
    isLoading.value = value;
  };
  const toggleModal = (value: boolean): void => {
    isModalVisible.value = value;
  };

  return {
    temperatureScale,
    setTemperatureScale,
    isLoading,
    setLoadingStatus,
    isForecastLoading,
    setForecastLoadingStatus,
    isModalVisible,
    toggleModal
  };
});
