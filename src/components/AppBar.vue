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
const lgUp = computed(() => vuetify.display.lgAndUp.value);
const smUp = computed(() => vuetify.display.smAndUp.value);
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
    router.push({ name: 'Home' });
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
    color="transparent"
    height="auto"
    v-if="router.currentRoute.value.name !== 'Notfound'"
  >
    <v-container fluid class="mx-3">
      <v-card
        class="rounded-lg pa-2 d-flex align-center"
        :class="mode ? 'bg-white ' : 'bg-element text-white'"
        elevation="3"
        width="100%"
      >
        <router-link to="/" class="me-5">
          <v-img v-if="!isLogin" src="../assets/logo_am.png" height="50" width="60"></v-img>
        </router-link>

        <v-app-bar-nav-icon
          @click="emit('drawer', !drawer)"
          v-if="!lgUp && isLogin"
        ></v-app-bar-nav-icon>
        <v-spacer v-if="!lgUp"></v-spacer>
        <v-text-field
          v-if="smUp && isLogin"
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
          v-if="!smUp && isLogin"
          variant="underlined"
          hide-details
          base-color="blue"
          placeholder="Search"
          color="blue"
          :style="{ maxWidth: '100%', width: '100%' }"
        >
        </v-text-field>
        <v-btn icon :size="!smUp ? '40' : '50'" v-if="isLogin">
          <v-icon size="26">mdi-magnify</v-icon>
        </v-btn>

        <router-link
          v-if="!isLogin"
          :to="{ name: 'Documentation' }"
          class="text-decoration-none"
          :class="mode ? 'text-black' : 'text-white'"
          >Docs</router-link
        >

        <v-spacer v-if="lgUp"></v-spacer>
        <v-btn
          variant="text"
          :color="mode ? 'blue' : 'white'"
          class="me-3 my-2"
          v-if="!isLogin"
          :to="{ name: 'Login' }"
          >Sign In</v-btn
        >
        <v-btn
          :color="mode ? 'blue' : 'white'"
          variant="outlined"
          v-if="!isLogin"
          @click="router.push({ name: 'Register' })"
          >Sign Up</v-btn
        >

        <v-menu transition="slide-y-transition" location="bottom" v-if="isLogin">
          <template v-slot:activator="{ props }">
            <v-btn :size="!smUp ? '40' : '50'" icon v-bind="props" class="me-4">
              <v-badge content="99+" color="blue" transition="ease" style="z-index: 9">
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge>
            </v-btn>
          </template>
          <v-list
            nav
            density="compact"
            class="hover"
            :class="mode ? 'bg-white' : 'bg-element'"
            :min-width="smUp ? '350' : '200'"
            :style="mode ? null : { backgroundColor: ' var(--bgComponent)' }"
          >
            <div class="text-title">Notifikasi</div>
            <v-divider :color="mode ? 'black' : 'white'" class="mt-2"></v-divider>
            <div v-if="adri">
              <v-list-item
                v-for="item in lists"
                :key="item"
                :title="item.title"
                :prepend-avatar="pic"
                :value="item.value"
                :to="item.to"
                active-class="bg-blue"
                theme
              ></v-list-item>
            </div>
            <div v-else class="text-subtitle text-center text-grey">Empty</div>
          </v-list>
        </v-menu>

        <v-menu transition="slide-y-transition" v-if="isLogin">
          <template v-slot:activator="{ props }">
            <v-badge
              dot
              location="right bottom"
              color="green"
              :offset-x="smUp ? '14' : '8'"
              offset-y="7"
              bordered
            >
              <v-avatar size="40px" class="mx-md-3 mx-1 avtr" color="white" v-bind="props">
                <v-img alt="Avatar" :src="pic" cover> </v-img>
              </v-avatar>
            </v-badge>
          </template>
          <v-list
            nav
            density="compact"
            :class="mode ? 'bg-white ' : 'bg-element '"
            :style="mode ? null : { backgroundColor: ' var(--bgComponent)' }"
          >
            <v-list-item
              :class="mode ? 'text-black' : 'text-white'"
              v-for="item in lists"
              :key="item"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.value"
              :to="item.to"
              active-class="bg-blue text-white"
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
