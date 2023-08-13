<template>
  <AlertWeb style="max-width: 400px; position: fixed; z-index: 9999" class="mt-15" />
  <LoadProgres
    style="position: fixed; z-index: 9999; align-self: center; justify-self: center"
    class="mt-15"
  />
  <v-app id="inspire" :class="mode">
    <NavBar :nav="drawer" v-if="router.currentRoute.value.name !== 'Login'" />
    <AppBar :drawer="drawer" @drawer="change" style="position: sticky; top: 0" />

    <v-main>
      <BtnBlobs />
      <router-view />
    </v-main>
    <footer><FooterView /></footer>
  </v-app>
</template>

<script setup>
import AlertWeb from '@/components/AlertWeb.vue';
import BtnBlobs from '@/components/BtnBlobs.vue';
import AppBar from '@/components/AppBar.vue';
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const mode = computed(() => {
  if (store.state.mode) {
    return 'bg-light ';
  } else {
    return 'bg';
  }
});
const drawer = ref(null);

const change = (value) => {
  drawer.value = value;
};
</script>

<style>
@import url('./assets/scss/style.scss');
</style>
