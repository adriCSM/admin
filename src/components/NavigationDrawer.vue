<script setup>
import router from '@/router';
import jwtDecode from 'jwt-decode';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const error = computed(() => store.state.error);
const { id } = jwtDecode(localStorage.getItem('user_id'));
const user = ref({
  username: '',
  pic: '',
});

onMounted(async () => {
  await store.dispatch('profile/getProfile', id);
  const { username, pic } = store.state.profile.userProfile;
  user.value = {
    username,
    pic,
  };
});

const newDrawer = computed(() => {
  const drawer = store.state.drawer;
  return drawer;
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
  <v-navigation-drawer
    v-model="newDrawer"
    :hidden="newDrawer ? false : true"
    temporary
    location="right"
  >
    <v-list-item :prepend-avatar="user.pic" :title="user.username"></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-logout"
        title="Logout"
        value="logout"
        @click="logout"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
