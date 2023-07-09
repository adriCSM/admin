<script setup>
import router from '@/router';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const error = computed(() => store.state.error);
const user = ref({
  username: '',
  pic: '',
});

onMounted(async () => {
  await store.dispatch('profile/myProfile');
  if (store.state.profile.userProfile) {
    const { username, pic } = store.state.profile.userProfile;
    user.value = {
      username,
      pic,
    };
  }
});

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
    v-model="newDrawer"
    :hidden="newDrawer ? false : true"
    temporary
    location="right"
    style="height: auto"
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
