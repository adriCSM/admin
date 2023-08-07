<script setup>
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import { computed, onMounted, defineEmits, defineProps, ref } from 'vue';
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
const pic = computed(() =>
  store.state.profile.myProfile ? store.state.profile.myProfile.pic : null,
);

const logout = async () => {
  await store.dispatch('auth/logout');
  if (!error.value) {
    router.push({ name: 'Login' });
  }
};

const lists = ref([
  {
    title: 'Profile',
    value: 'profile',
    icon: 'mdi-account-circle-outline',
    to: { name: 'Profile' },
  },
  {
    title: 'About',
    value: 'about',
    icon: 'mdi-information-outline',
    to: { name: 'About' },
  },
  {
    title: 'Setting',
    value: 'setting',
    icon: 'mdi-cog-outline',
    to: { name: 'Setting' },
  },
]);
</script>

<template>
  <v-app-bar
    flat
    :color="mode ? 'transparent' : 'dark'"
    height="auto"
    style="position: sticky; z-index: 99; top: 0"
    v-if="isLogin"
    scroll-behavior="hide"
    scroll-threshold="60"
  >
    <v-container fluid class="mx-3">
      <v-card
        class="rounded-lg pa-2 d-flex align-center"
        :class="mode ? 'bg-white ' : 'bg-grey-darken-3 text-white'"
        elevation="3"
        width="100%"
      >
        <v-app-bar-nav-icon @click="emit('drawer', !drawer)" v-if="mdUp"></v-app-bar-nav-icon>
        <v-spacer v-if="mdUp"></v-spacer>
        <v-text-field
          v-if="!mdUp"
          variant="underlined"
          hide-details
          base-color="blue"
          placeholder="Search"
          color="blue"
          style="max-width: 200px"
          class="ms-5"
        >
        </v-text-field>
        <v-text-field
          v-if="mdUp"
          variant="underlined"
          hide-details
          base-color="blue"
          placeholder="Search"
          color="blue"
          :style="smDown ? { maxWidth: '100%', width: '100%' } : { maxWidth: '200px' }"
        >
        </v-text-field>
        <v-btn icon :size="smDown ? '30' : '50'">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-spacer v-if="!mdUp"></v-spacer>

        <v-btn :size="smDown ? '30' : '50'">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-avatar size="40px" class="mx-md-3 mx-1 avtr" color="white" v-bind="props">
              <v-img alt="Avatar" :src="pic" cover> </v-img>
            </v-avatar>
          </template>
          <v-list nav density="compact" :class="mode ? 'bg-white ' : 'bg-grey-darken-3 text-white'">
            <v-list-item
              v-for="item in lists"
              :key="item"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.value"
              :to="item.to"
              active-class="bg-blue"
              theme
            ></v-list-item>
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

<style scoped>
.avtr {
  cursor: pointer;
}
</style>
