<script setup>
import HeaderView from '@/components/HeaderView.vue';
import CertificatesLayout from '@/components/Portofolio/CertificatesLayout.vue';
import NavigationDrawerVue from '../components/NavigationDrawer.vue';
</script>

<template>
  <div>
    <NavigationDrawerVue />
    <HeaderView />

    <main>
      <CertificatesLayout class="rounded-xl" />
    </main>
  </div>
</template>
