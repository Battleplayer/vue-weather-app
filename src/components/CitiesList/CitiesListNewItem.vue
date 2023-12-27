<script setup lang="ts">
import { useRandomInfo } from '@/stores/randomInfo';

const info = useRandomInfo();
const { toggleModal } = info;
const handleAdd = () => {
  toggleModal(true);
};
</script>

<template>
  <button class="new" @click="handleAdd">
    <h4>
      World <br />
      forecast
    </h4>
    <p>Add the cities you are interested in</p>
    <span class="add">+</span>
  </button>
</template>

<style scoped lang="scss">
.new {
  border: 1px dashed var(--project-color-light);
  color: var(--project-color-white);
  text-align: center;
  border-radius: var(--project-border-radius);
  padding: var(--project-gap);
  width: 180px;
  position: relative;
  transition: all 300ms ease;
  background-color: transparent;
  cursor: pointer;
  gap: var(--project-gap);
  &:hover {
    background-color: var(--project-color-white);
    color: var(--project-field-bcg);
  }
  h4 {
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 20px;
  }
  p {
    font-size: 12px;
  }
  .add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 32px;
    background-color: var(--project-color-light);
    color: var(--project-main-bcg);
    border-radius: 50%;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
