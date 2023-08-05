<template>
  <ButtonBackVue style="position: fixed; z-index: 999" class="mt-15" />

  <AlertWeb style="max-width: 400px; position: fixed; z-index: 9999" class="mt-15" />
  <LoadProgres
    style="position: fixed; z-index: 9999; align-self: center; justify-self: center"
    class="mt-15"
  />
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" elevation="3" v-if="isLogin">
      <NavBar />
    </v-navigation-drawer>
    <v-app-bar
      class="mt-2"
      flat
      color="transparent"
      height="auto"
      style="position: sticky; z-index: 99; top: 0"
      v-if="isLogin"
      scroll-behavior="elevate hide "
      scroll-threshold="50"
    >
      <AppBar :drawer="drawer" @drawer="change" />
    </v-app-bar>

    <v-main style="height: 100vh">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
// import AlertWeb from '@/components/AlertWeb.vue';
// import LoadProgres from '@/components/LoadProgres.vue';
// import ButtonBackVue from '@/components/ButtonBack.vue';
// import vuetify from '@/plugins/vuetify';
import AppBar from '@/components/AppBar.vue';
import NavBar from '@/components/NavBar.vue';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const drawer = ref(null);

const change = (value) => {
  drawer.value = value;
};

const isLogin = computed(() => {
  if (store.state.auth.loggedIn) {
    store.dispatch('profile/myProfile');
  }
  return store.state.auth.loggedIn;
});
</script>

<style>
.router-link-active {
  color: #0fe;
}
.custom-app-bar {
  margin: 10px; /* Atur margin 10px */
}
</style>
