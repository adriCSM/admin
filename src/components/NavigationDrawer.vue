<script setup>
import router from '@/router';
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const error = computed(() => store.state.error);

const user = computed(() =>
  store.state.profile.userProfile ? store.state.profile.userProfile : false,
);
const newDrawer = computed(() => {
  return store.state.drawer;
});

const logout = async () => {
  await store.dispatch('auth/logout');
  if (!error.value) {
    router.push({ name: 'Login' });
    store.commit('drawer', false);
  }
};

const changeDrawer = () => {
  store.commit('drawer', !newDrawer.value);
};
</script>

<template>
  <v-navigation-drawer
    theme="light"
    v-model="newDrawer"
    :hidden="newDrawer ? false : true"
    temporary
    style="height: 100vh"
    location="right"
  >
    <div class="text-right">
      <v-btn variant="text" position="end" @click="changeDrawer">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-list-item :prepend-avatar="user.pic" :title="user.username"> </v-list-item>

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
