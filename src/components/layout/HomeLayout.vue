<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import CrouselLayout from '@/components/CrouselLayout.vue';

const store = useStore();
onMounted(async () => {
  if (!store.state.profile.myProfile && store.state.auth.loggedIn) {
    await store.dispatch('profile/myProfile');
  }
});
</script>

<template>
  <v-ccontainer fluid>
    <CrouselLayout class="mx-7" />
    <v-row class="px-7">
      <v-col cols="12" md="8">
        <v-card width="100%" height="300" elevation="5" class="bg-blue mt-5 rounded-lg"> </v-card>
      </v-col>
      <v-col cols="12" md="4" class="mt-md-5">
        <v-row>
          <v-col cols="6" v-for="i in 4" :key="i">
            <v-card height="138" width="100%" elevation="5" class="bg-blue rounded-lg"></v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="px-7 py-0">
      <v-col cols="12" md="4" v-for="i in 3" :key="i">
        <v-card width="100%" height="150" class="bg-blue rounded-lg" elevation="5"></v-card>
      </v-col>
    </v-row>
  </v-ccontainer>
</template>
