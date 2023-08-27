<script setup>
import vuetify from '@/plugins/vuetify';

import { ref } from 'vue';

import { computed } from 'vue';
const xs = computed(() => vuetify.display.xs.value);

const auth = ref([
  {
    title: 'POST Authentication',
    to: { name: 'AuthPost' },
  },
  {
    title: 'PUT Authentication',
    to: { name: 'AuthPut' },
  },
  {
    title: 'DELETE Authentication',
    to: { name: 'AuthDelete' },
  },
]);
const users = ref([
  {
    title: 'POST User',
    to: { name: 'UserPost' },
  },
  {
    title: "GET User's",
    to: { name: 'UsersGet' },
  },
  {
    title: 'PUT User',
    to: { name: 'UserPut' },
  },
  {
    title: 'DELETE User',
    to: { name: 'UserDelete' },
  },
]);
</script>

<template>
  <div class="mx-md-15 mt-md-n15 pt-5">
    <v-container class="h-auto mx-xl-15" style="min-height: 100vh">
      <v-row class="h-100 pt-md-15">
        <v-col
          v-if="!xs"
          class="bg-transparent"
          md="3"
          sm="3"
          style="border: solid 2px var(--text); min-height: 85vh"
          align-self="start"
        >
          <v-list class="bg-transparent" density="compact" nav>
            <v-list-group value="Authentication">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  prepend-icon="mdi-account-key"
                  title="Authentication"
                ></v-list-item>
              </template>
              <v-list-item
                v-for="item in auth"
                :key="item"
                :title="item.title"
                :to="item.to"
              ></v-list-item>
            </v-list-group>
            <v-list-group value="Users">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  prepend-icon="mdi-account-group"
                  title="Users"
                ></v-list-item>
              </template>
              <v-list-item
                v-for="item in users"
                :key="item"
                :title="item.title"
                :to="item.to"
              ></v-list-item>
            </v-list-group>
          </v-list>
        </v-col>
        <v-col
          cols="auto"
          md="9"
          sm="9"
          :class="xs ? 'content' : 'overflow-auto content'"
          align-self="center"
          :style="xs ? { maxHeight: 'auto' } : { maxHeight: '85vh' }"
        >
          <p>
            Untuk sementara konten pada dokumnetasi API ini menampilkan semua CRUD method, headers,
            dan responsenya. Saya masih mempelajari isi kontent apa saja yang boleh dan tidaknya
            ditampilkan pada documentation API sehingga terhindar dari ancaman peretasan. untuk
            melihat source code lebih jelasnya anda dapat mengunjungi repositori github berikut
            <a href="https://github.com/adriCSM/admin" target="_blank"
              >https://github.com/adriCSM/admin</a
            >
          </p>

          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
