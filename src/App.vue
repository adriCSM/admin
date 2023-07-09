<template>
  <v-app>
    <v-main class="bg-dark">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
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
