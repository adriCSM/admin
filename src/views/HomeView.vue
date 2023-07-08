<script setup>
import HeaderView from '@/components/HeaderView.vue';
import HomeLayoutVue from '@/components/layout/HomeLayout.vue';
</script>

<template>
  <div>
    <v-app-bar elevation="2" class="bg-dark">
      <HeaderView />
    </v-app-bar>
    <main>
      <HomeLayoutVue />
    </main>
  </div>
</template>
