<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const newDrawer = computed(() => {
  const drawer = store.state.drawer;
  return drawer;
});
</script>

<template>
  <v-navigation-drawer
    v-model="newDrawer"
    :hidden="newDrawer ? false : true"
    temporary
    location="right"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="John Leider"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
