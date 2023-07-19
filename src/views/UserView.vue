<script setup>
import HeaderView from '@/components/HeaderView.vue';
import NavigationDrawerVue from '../components/NavigationDrawer.vue';
import UserLayoutVue from '@/components/layout/UserLayout.vue';
</script>
<template>
  <div>
    <NavigationDrawerVue />

    <HeaderView />

    <main>
      <UserLayoutVue />
    </main>
  </div>
</template>
