<template>
  <ButtonBackVue style="position: fixed; z-index: 999" class="mt-15" />

  <AlertWeb style="max-width: 400px; position: fixed; z-index: 9999" class="mt-15" />
  <LoadProgres
    style="position: fixed; z-index: 9999; align-self: center; justify-self: center"
    class="mt-15"
  />
  <v-app id="inspire" :class="mode">
    <NavBar :nav="drawer" />
    <AppBar :drawer="drawer" @drawer="change" />

    <v-main style="min-height: 100vh" class="pt-1">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
// import AlertWeb from '@/components/AlertWeb.vue';
// import LoadProgres from '@/components/LoadProgres.vue';
// import ButtonBackVue from '@/components/ButtonBack.vue';
import AppBar from '@/components/AppBar.vue';
import NavBar from '@/components/NavBar.vue';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const mode = computed(() => {
  if (store.state.mode) {
    return 'bg-light';
  } else {
    return 'bg-dark';
  }
});
const drawer = ref(null);

const change = (value) => {
  drawer.value = value;
};
</script>

<style></style>
