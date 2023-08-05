<template>
  <div>
    <v-list-item
      pre
      nav
      class="pt-3 text-center"
      :prepend-avatar="rail ? require('../assets/logo_am.png') : null"
    >
      <v-img src="../assets/logo_am.png" height="50"></v-img>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav active-class="bg-blue">
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
          v-for="(item, i) in stores"
          :key="i"
          :title="item.title"
          :prepend-icon="item.icon"
          :value="item.title"
          @click="item.to"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue';

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
const stores = ref([
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
