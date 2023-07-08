<script setup>
import HeaderView from '@/components/HeaderView.vue';

import UserLayoutVue from '@/components/layout/UserLayout.vue';
</script>
<template>
  <div>
    <v-app-bar elevation="2" class="bg-dark">
      <HeaderView />
    </v-app-bar>
    <main>
      <UserLayoutVue />
    </main>
  </div>
</template>
