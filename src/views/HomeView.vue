<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const mode = computed(() => store.state.mode);
</script>

<template>
  <div class="rounded-lg py-10" :class="mode ? 'bg-white' : 'bg-element'" elevation="7">
    <v-container>
      <v-row class="h-auto" align-content="center">
        <v-col align-self="center">
          <h1>Selamat Datang di Portal Dokumentasi API AM</h1>
        </v-col>
        <v-col class="h-auto bgHero rounded-lg">
          <v-img cover src="../assets/ilustrasi1.svg" width="30vw"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
