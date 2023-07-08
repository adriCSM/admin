<template>
  <v-app>
    <v-main class="bg-dark">
      <router-view />
      <NavigationDrawerVue />
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawerVue from './components/NavigationDrawer.vue';

export default {
  name: 'App',
  components: {
    NavigationDrawerVue,
  },

  data() {
    return {};
  },
};
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
