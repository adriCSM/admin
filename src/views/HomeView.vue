<script setup>
import HeaderView from '@/components/HeaderView.vue';
import HomeLayoutVue from '@/components/layout/HomeLayout.vue';
import NavigationDrawerVue from '../components/NavigationDrawer.vue';
import CrouselLayout from '@/components/CrouselLayout.vue';
</script>

<template>
  <div>
    <NavigationDrawerVue />
    <HeaderView />
    <main>
      <CrouselLayout />
      <HomeLayoutVue />
    </main>
  </div>
</template>
