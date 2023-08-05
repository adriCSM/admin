<script setup>
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import { computed, onMounted, defineEmits, defineProps } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  drawer: {
    default: null,
  },
});
const emit = defineEmits(['drawer']);
const drawer = computed(() => props.drawer);
const store = useStore();
const error = computed(() => store.state.error);
const mdUp = computed(() => vuetify.display.mdAndDown.value);
const smDown = computed(() => vuetify.display.smAndDown.value);

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
const pic = computed(() =>
  store.state.profile.myProfile ? store.state.profile.myProfile.pic : null,
);

const logout = async () => {
  await store.dispatch('auth/logout');
  if (!error.value) {
    router.push({ name: 'Login' });
  }
};
</script>

<template>
  <v-app-bar
    flat
    color="light"
    height="auto"
    style="position: sticky; z-index: 99; top: 0"
    v-if="isLogin"
    scroll-behavior="hide"
    scroll-threshold="60"
  >
    <v-container fluid>
      <v-card class="bg-white rounded-lg pa-2 d-flex align-center" elevation="2" width="100%">
        <v-app-bar-nav-icon @click="emit('drawer', !drawer)" v-if="mdUp"></v-app-bar-nav-icon>
        <v-spacer v-if="mdUp"></v-spacer>
        <v-text-field
          v-if="!mdUp"
          variant="underlined"
          hide-details
          base-color="blue"
          placeholder="Search"
          color="blue"
          style="max-width: 100px"
        >
        </v-text-field>
        <v-text-field
          v-if="mdUp"
          variant="underlined"
          hide-details
          base-color="blue"
          placeholder="Search"
          color="blue"
          :style="smDown ? { maxWidth: '100%' } : { maxWidth: '200px' }"
        >
        </v-text-field>
        <v-btn icon color="blue">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-spacer v-if="!mdUp"></v-spacer>
        <v-btn icon color="blue">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-avatar size="40px" class="mx-3" v-bind="props">
              <v-img alt="Avatar" :src="pic"> </v-img>
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
      </v-card>
    </v-container>
  </v-app-bar>
</template>
