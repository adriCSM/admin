<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const mode = computed(() => store.state.mode);
</script>

<template>
  <div class="rounded-lg h-screen" :class="mode ? 'bg-white' : 'bg-element'" elevation="7">
    <v-container class="h-100">
      <v-row class="h-100" align-content="center">
        <v-col cols="12" md="6" align-self="center">
          <h1>Selamat Datang di Portal Dokumentasi API AM</h1>
        </v-col>
        <v-col cols="12" md="6" class="h-auto bgHero rounded-lg">
          <v-img cover src="../assets/ilustrasi1.svg" width="600"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
