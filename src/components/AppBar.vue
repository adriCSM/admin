<script setup>
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

onMounted(async () => {
  if (!store.state.profile.myProfile && store.state.auth.loggedIn) {
    await store.dispatch('profile/myProfile');
  }
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
  <v-container fluid>
    <v-card class="bg-white rounded-lg pa-2 d-flex align-center" elevation="2" width="100%">
      <v-app-bar-nav-icon @click="emit('drawer', !drawer)"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-avatar size="40px" class="bg-grey mx-3" v-bind="props">
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
</template>
