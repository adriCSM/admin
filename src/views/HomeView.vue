<script setup>
import HeaderView from '@/components/HeaderView.vue';
import HomeLayoutVue from '@/components/layout/HomeLayout.vue';
import NavigationDrawerVue from '../components/NavigationDrawer.vue';
</script>

<template>
  <div>
    <NavigationDrawerVue />
    <v-app-bar elevation="2" class="bg-dark">
      <HeaderView />
    </v-app-bar>
    <main>
      <HomeLayoutVue />
    </main>
  </div>
</template>
