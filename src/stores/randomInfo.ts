import { defineStore } from 'pinia';
import { type Ref, ref } from 'vue';

import type SwitcherDataItem from '@/typing/SwitcherDataItem';
import tempDataArray from '@/helper/tempDataArray';

export const useRandomInfo = defineStore('randomInfo', () => {
  const temperatureScale: Ref<SwitcherDataItem> = ref(tempDataArray[0]);
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
