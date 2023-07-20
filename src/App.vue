<template>
  <v-app>
    <NavigationDrawerVue />
    <ButtonBackVue style="position: fixed; z-index: 999" class="mt-15" />

    <HeaderView style="position: fixed; z-index: 99" />
    <AlertWeb style="max-width: 400px; position: fixed; z-index: 9999" class="mt-15" />
    <LoadProgres
      style="position: fixed; z-index: 9999; align-self: center; justify-self: center"
      class="mt-15"
    />

    <router-view />
  </v-app>
</template>

<script setup>
import AlertWeb from '@/components/AlertWeb.vue';
import LoadProgres from '@/components/LoadProgres.vue';
import HeaderView from '@/components/HeaderView.vue';
import NavigationDrawerVue from '@/components/NavigationDrawer.vue';
import ButtonBackVue from '@/components/ButtonBack.vue';
</script>
<style>
main {
  height: auto;
  /* background-size: cover;
    background-repeat: no-repeat; */
  /* background-position-y: 100%; */
  /* background-color: #1d212b; */
  filter: brightness(90%);
}

.router-link-active {
  color: #0fe;
}
</style>
