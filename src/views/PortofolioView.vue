<script setup>
import HeaderView from '@/components/HeaderView.vue';
import PortofolioLayout from '@/components/Portofolio/PortofolioLayout.vue';
</script>

<template>
  <div>
    <v-app-bar elevation="2" class="bg-dark">
      <HeaderView />
    </v-app-bar>
    <main>
      <PortofolioLayout class="ma-3 rounded-xl" />
    </main>
  </div>
</template>
