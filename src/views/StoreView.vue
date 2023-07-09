<script setup>
import HeaderView from '@/components/HeaderView.vue';
import StoreLayout from '@/components/store/StoreLayout.vue';
import NavigationDrawerVue from '../components/NavigationDrawer.vue';
</script>
<template>
  <div>
    <NavigationDrawerVue />
    <v-app-bar elevation="2" class="bg-dark">
      <HeaderView />
    </v-app-bar>
    <main>
      <StoreLayout></StoreLayout>
    </main>
  </div>
</template>
