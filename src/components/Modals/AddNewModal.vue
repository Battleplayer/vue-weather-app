<script setup lang="ts">
import { useRandomInfo } from '@/stores/randomInfo';
import { storeToRefs } from 'pinia';
import Search from '@/components/Search.vue';

const info = useRandomInfo();
const { toggleModal } = info;
const { isModalVisible } = storeToRefs(info);

const handleClose = () => {
  toggleModal(false);
};
</script>

<template>
  <div class="bcg" v-if="isModalVisible">
    <div class="modal-container">
      <Search :close="handleClose" ref="searchRef" :focusInput="true" />
      <button class="close" @click="handleClose">Close modal</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bcg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.65);
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.modal-container {
  min-width: 30%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--project-main-bcg);
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.close {
  background-color: var(--project-color-light);
  border-top-right-radius: var(--project-gap);
  border-bottom-right-radius: var(--project-gap);
  font-weight: 500;
  padding: 3px 7px;
  margin-left: -7px;
}
</style>
