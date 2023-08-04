<template>
  <v-app>
    <NavigationDrawerVue />
    <ButtonBackVue style="position: fixed; z-index: 999" class="mt-15" />

    <AlertWeb style="max-width: 400px; position: fixed; z-index: 9999" class="mt-15" />
    <LoadProgres
      style="position: fixed; z-index: 9999; align-self: center; justify-self: center"
      class="mt-15"
    />

    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer" :rail="rail" @click="rail = false" permanent>
          <v-list-item
            pre
            nav
            class="pt-3 text-center"
            :prepend-avatar="rail ? require('./assets/logo_am.png') : null"
          >
            <v-img src="./assets/logo_am.png" height="50"></v-img>
            <template v-slot:append>
              <v-btn
                v-if="rail == false"
                variant="text"
                icon="mdi-chevron-left "
                position="sticky"
                @click.stop="rail = !rail"
              ></v-btn>
              <v-btn
                v-else
                variant="text"
                icon="mdi-chevron-right "
                position="sticky"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav active-color="#1EBBD7">
            <v-list-item
              v-for="item in links"
              :key="item"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.value"
              @click="item.to"
            ></v-list-item>

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
                @click="item.to"
              ></v-list-item>
            </v-list-group>
            <v-list-group value="Store">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-store" title="Store"></v-list-item>
              </template>

              <v-list-item
                v-for="(item, i) in store"
                :key="i"
                :title="item.title"
                :prepend-icon="item.icon"
                :value="item.title"
                @click="item.to"
              ></v-list-item>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 100vh; overflow-y: auto">
          <HeaderView style="position: sticky; z-index: 99; top: 0" />
          <router-view />
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup>
// import AlertWeb from '@/components/AlertWeb.vue';
// import LoadProgres from '@/components/LoadProgres.vue';
// import NavigationDrawerVue from '@/components/NavigationDrawer.vue';
// import ButtonBackVue from '@/components/ButtonBack.vue';
// import vuetify from '@/plugins/vuetify';
import HeaderView from '@/components/HeaderView.vue';
import router from '@/router';

import { ref } from 'vue';

const drawer = ref(true);
const rail = ref(false);
const links = ref([
  {
    title: 'Home',
    value: 'home',
    icon: 'mdi-home-city',
    to: () => {
      router.push({ name: 'Home' });
    },
  },
  {
    title: 'Profile',
    value: 'profile',
    icon: 'mdi-account-circle',
    to: () => {
      router.push({ name: 'Home' });
    },
  },
  {
    title: 'Users',
    value: 'users',
    icon: 'mdi-account-group-outline',
    to: () => {
      router.push({ name: 'Users' });
    },
  },
]);

const portofolio = ref([
  {
    title: 'Projects',
    value: 'home',
    icon: 'mdi-book-account',

    to: () => {
      router.push({ name: 'Projects' });
    },
  },
  {
    title: 'Certificates',
    value: 'certificates',
    icon: 'mdi-certificate',
    to: () => {
      router.push({ name: 'Certificates' });
    },
  },
  {
    title: 'Curiculum Vitae',
    value: 'cv',
    icon: 'mdi-image-area',
    to: () => {
      router.push({ name: 'Curiculum Vitae' });
    },
  },
  {
    title: 'Messages',
    value: 'contact',
    icon: 'mdi-message-bookmark-outline',
    to: () => {
      router.push({ name: 'Messages' });
    },
  },
]);
const store = ref([
  {
    title: 'Products',
    value: 'products',
    icon: 'mdi-cart-variant',
    to: () => {
      router.push({ name: 'Products' });
    },
  },
  {
    title: 'Order',
    value: 'order',
    icon: 'mdi-package-variant-closed',
    to: () => {
      router.push({ name: 'Order' });
    },
  },
]);
</script>
<style>
main {
  height: auto;
  /* background-size: cover;
    background-repeat: no-repeat; */
  /* background-position-y: 100%; */
  /* background-color: #1d212b; */
  filter: brightness(90%);
}

.router-link-active {
  color: #0fe;
}
</style>
