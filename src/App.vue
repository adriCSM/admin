<template>
  <v-app>
    <AlertWeb style="max-width: 400px; position: fixed; z-index: 1" />

    <LoadProgres style="position: fixed; z-index: 5; align-self: center; justify-self: center" />
    <v-main class="bg-light">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AlertWeb from '@/components/AlertWeb.vue';
import LoadProgres from '@/components/LoadProgres.vue';

export default {
  name: 'App',
  components: { AlertWeb, LoadProgres },
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
