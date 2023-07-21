<script setup>
import router from '@/router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const stateDrawer = computed(() => store.state.drawer);

onMounted(async () => {
  if (!store.state.profile.myProfile && store.state.auth.loggedIn) {
    await store.dispatch('profile/myProfile');
  }
});
const pic = computed(() =>
  store.state.profile.myProfile ? store.state.profile.myProfile.pic : null,
);
const changeDrawer = () => {
  store.commit('drawer', !stateDrawer.value);
};
const isLogin = computed(() => {
  if (store.state.auth.loggedIn) {
    store.dispatch('profile/myProfile');
  }
  return store.state.auth.loggedIn;
});
</script>
<template>
  <v-container
    style="max-width: 100vw"
    class="px-md-15 pt-md-8"
    v-if="
      isLogin &&
      router.currentRoute.value.name !== 'Login' &&
      router.currentRoute.value.name !== 'Notfound'
    "
  >
    <v-row class="text-white bg-dark rounded-xl">
      <v-col cols="4" class="text-center" align-self="center">
        <v-app-bar-icon class="font-weight-bold">AM</v-app-bar-icon>
      </v-col>
      <v-col :cols="pic ? '4' : '8'" class="text-center d-flex justify-center align-center">
        <router-link to="/home" class="px-5"> Home </router-link>
        <router-link to="/users" class="px-5"> Users </router-link>
      </v-col>
      <v-col cols="4" class="text-end pe-10" :style="pic ? true : { display: 'none' }">
        <v-avatar size="40px" class="bg-white">
          <v-img alt="Avatar" :src="pic">
            <v-btn variant="text" @click="changeDrawer"> </v-btn>
          </v-img>
        </v-avatar>
      </v-col>
    </v-row>
  </v-container>
</template>
