<template>
  <v-navigation-drawer v-model="drawer" elevation="3" v-if="isLogin">
    <v-list-item
      pre
      nav
      class="pt-3 text-center"
      :prepend-avatar="rail ? require('../assets/logo_am.png') : null"
    >
      <v-img src="../assets/logo_am.png" height="50"></v-img>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav class="mx-3">
      <v-list-item
        v-for="item in links"
        :key="item"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.to"
        active-class="bg-blue"
      >
      </v-list-item>

      <v-list-group value="Protofolio">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-card-account-details"
            title="Protofolio"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="(item, i) in portofolio"
          :key="i"
          :title="item.title"
          :prepend-icon="item.icon"
          :value="item.title"
          :to="item.to"
          active-class="bg-blue"
        ></v-list-item>
      </v-list-group>
      <v-list-group value="Store">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-store" title="Store"></v-list-item>
        </template>

        <v-list-item
          v-for="(item, i) in stores"
          :key="i"
          :title="item.title"
          :prepend-icon="item.icon"
          :value="item.title"
          :to="item.to"
          active-class="bg-blue"
          exact
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, defineProps, computed, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps(['nav']);
const isLogin = computed(() => {
  if (store.state.auth.loggedIn) {
    store.dispatch('profile/myProfile');
  }
  return store.state.auth.loggedIn;
});

const drawer = ref(null);
watch(props, (value) => {
  drawer.value = value;
});

const links = ref([
  {
    title: 'Home',
    value: 'home',
    icon: 'mdi-home-city',
    to: { name: 'Home' },
  },
  {
    title: 'Profile',
    value: 'profile',
    icon: 'mdi-account-circle',
    to: { name: 'Profile' },
  },
  {
    title: 'Users',
    value: 'users',
    icon: 'mdi-account-group-outline',
    to: { name: 'Users' },
  },
]);

const portofolio = ref([
  {
    title: 'Projects',
    value: 'home',
    icon: 'mdi-book-account',

    to: { name: 'Projects' },
  },
  {
    title: 'Certificates',
    value: 'certificates',
    icon: 'mdi-certificate',
    to: { name: 'Certificates' },
  },
  {
    title: 'Curiculum Vitae',
    value: 'cv',
    icon: 'mdi-image-area',
    to: { name: 'Curiculum Vitae' },
  },
  {
    title: 'Messages',
    value: 'contact',
    icon: 'mdi-message-bookmark-outline',
    to: { name: 'Messages' },
  },
]);
const stores = ref([
  {
    title: 'Products',
    value: 'products',
    icon: 'mdi-cart-variant',
    to: { name: 'Products' },
  },
  {
    title: 'Order',
    value: 'order',
    icon: 'mdi-package-variant-closed',
    to: { name: 'Order' },
  },
]);
</script>

<style scoped>
.router-link-exact-active {
  background-color: red;
}
</style>
