<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  selected: {
    type: Object,
    required: true
  },
  handleSelect: {
    type: Function,
    required: true
  }
});

const handleClick = (value) => {
  props.handleSelect(value);
};
</script>

<template>
  <div class="switcher">
    <button
      v-for="item in data"
      :key="item.value"
      class="switcher-item"
      :class="{ selected: selected.value === item.value }"
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
