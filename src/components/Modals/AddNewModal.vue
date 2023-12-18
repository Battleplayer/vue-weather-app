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
      <Search :close="handleClose" />
      <button @click="handleClose">Close modal</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bcg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100vw;
  height: 100vh;
}

.modal-container {
  width: 30%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--project-field-bcg);
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
