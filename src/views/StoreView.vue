<script setup>
import HeaderView from '@/components/HeaderView.vue';
import StoreLayout from '@/components/store/StoreLayout.vue';
</script>
<template>
  <v-app-bar elevation="2" class="bg-dark">
    <HeaderView />
  </v-app-bar>
  <main>
    <StoreLayout></StoreLayout>
  </main>
</template>
