<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/views/layout/Header.vue';
import AddNewModal from '@/components/Modals/AddNewModal.vue';
</script>

<template>
  <div id="main-container">
    <Header />
    <RouterView />
  </div>
  <AddNewModal />
</template>

<style scoped></style>
