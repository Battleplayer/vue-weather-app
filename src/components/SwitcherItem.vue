<script setup lang="ts">
import type SwitcherDataItem from '@/typing/SwitcherDataItem';

const props = defineProps<{
  data: Array<{ value: string; label: string }>;
  selected: SwitcherDataItem;
  handleSelect: (value: string) => void;
}>();

const handleClick = (value: string) => {
  props.handleSelect(value);
};
</script>

<template>
  <div class="switcher">
    <!-- @vue-ignore -->
    <button
      :class="{ selected: props.selected?.value === item.value }"
      v-for="item in data"
      :key="item.value"
      class="switcher-item"
      @click="handleClick(item.value)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<style scoped>
.switcher {
  display: flex;
  box-shadow: inset 0 0 0 1px var(--project-color-white);
  border-radius: var(--project-border-radius);
  align-self: center;
}

.switcher-item {
  padding: 10px 15px;
  margin: -1px;
  color: var(--project-color-light);
  background-color: transparent;
  border: none;
  border-radius: var(--project-border-radius);
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s all;

  &.selected {
    color: var(--project-main-bcg);
    background-color: var(--project-color-light);
  }
}
</style>
