<script setup>
import HeaderView from '@/components/HeaderView.vue';
import StoreLayout from '@/components/store/StoreLayout.vue';
import NavigationDrawerVue from '../components/NavigationDrawer.vue';
</script>
<template>
  <div>
    <NavigationDrawerVue />
    <HeaderView />
    <main>
      <StoreLayout></StoreLayout>
    </main>
  </div>
</template>
