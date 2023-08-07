<template>
  <v-tooltip :text="mode ? 'Light' : 'Dark'" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        position="fixed"
        elevation="6"
        style="z-index: 99; right: 30px; bottom: 50px"
        v-if="isLogin"
        icon
        size="50"
        @click="store.commit('mode', !mode)"
        :color="mode ? 'light' : 'grey-darken-3'"
      >
        <v-avatar size="23">
          <v-img src="../assets/sun.svg" v-if="mode"></v-img>
          <v-img src="../assets/moon.png" v-else></v-img>
        </v-avatar>
      </v-btn>
    </template>
  </v-tooltip>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const mode = computed(() => store.state.mode);

onMounted(async () => {
  if (!store.state.profile.myProfile && store.state.auth.loggedIn) {
    await store.dispatch('profile/myProfile');
  }
});
const isLogin = computed(() => {
  if (store.state.auth.loggedIn) {
    store.dispatch('profile/myProfile');
  }
  return store.state.auth.loggedIn;
});
</script>
