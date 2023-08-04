<script setup>
import router from '@/router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const stateDrawer = computed(() => store.state.drawer);
const error = computed(() => store.state.error);

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

const logout = async () => {
  await store.dispatch('auth/logout');
  if (!error.value) {
    router.push({ name: 'Login' });
    store.commit('drawer', false);
  }
};
</script>
<template>
  <v-container
    fluid
    v-if="
      isLogin &&
      router.currentRoute.value.name !== 'Login' &&
      router.currentRoute.value.name !== 'Notfound'
    "
    style="background: transparent"
  >
    <v-row class="text-white bg-dark rounded-xl">
      <v-col :cols="pic ? '6' : '12'" class="text-center d-flex justify-center align-center">
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" class="text-center text-end">
        <v-btn variant="text" @click="changeDrawer" icon="mdi-bell"> </v-btn>
      </v-col>
      <v-col cols="auto" class="text-end pe-md-10" :style="pic ? true : { display: 'none' }">
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-avatar size="40px" class="bg-white" v-bind="props">
              <v-img alt="Avatar" :src="pic">
                <v-btn variant="text" @click="changeDrawer"> </v-btn>
              </v-img>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item
              prepend-icon="mdi-logout"
              title="Logout"
              value="logout"
              @click="logout"
            ></v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>
