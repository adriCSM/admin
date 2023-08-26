<script setup>
import vuetify from '@/plugins/vuetify';
import { computed } from 'vue';

const xs = computed(() => vuetify.display.xs.value);
const sm = computed(() => vuetify.display.sm.value);
</script>

<template>
  <div class="mx-md-15 mt-md-n15 pt-5">
    <v-container class="h-auto mx-xl-15 d-flex justify-space-between" style="min-height: 100vh">
      <v-row class="h-auto" justify="end">
        <v-col cols="12" class="h-auto" order-sm="1" md="6" sm="6" align-self="center">
          <v-img
            src="../assets/img/img_home.png"
            max-width="709"
            max-height="627"
            height="100%"
            :width="xs ? '100%' : sm ? '100%' : '130%'"
            cover
          ></v-img>
        </v-col>
        <v-col cols="12" md="6" sm="6" align-self="center" order-sm="0">
          <div class="h3 ps-md-4 py-3 font-weight-bold">Hallo, Selamat Datang</div>
          <div
            class="h1 ps-md-4 font-weight-black text-start"
            style="font-weight: 900"
            :style="!xs ? { lineHeight: '4r3m' } : null"
          >
            Web dokumentasi "Application Programing Interface" web AM.
          </div>
          <div class="h6 ps-md-4 pt-3 pb-5 text-justify">
            API dibuat dengan menggunakan teknologi Node Js dan framework Hapi. Support saya dengan
            👇
          </div>
          <v-btn class="ms-md-4 text-white" color="#6368D9" rounded="lg" to="/donation"
            >Donasi</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
