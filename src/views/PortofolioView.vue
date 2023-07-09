<script setup>
import HeaderView from '@/components/HeaderView.vue';
import PortofolioLayout from '@/components/Portofolio/PortofolioLayout.vue';
import NavigationDrawerVue from '../components/NavigationDrawer.vue';
</script>

<template>
  <div>
    <NavigationDrawerVue />
    <v-app-bar elevation="2" class="bg-dark">
      <HeaderView />
    </v-app-bar>

    <main>
      <PortofolioLayout class="ma-3 rounded-xl" />
    </main>
  </div>
</template>
