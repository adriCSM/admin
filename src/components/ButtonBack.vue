<script setup>
import router from '@/router';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isLogin = computed(() => store.state.auth.loggedIn);

const back = () => {
  router.go(-1);
};
</script>

<template>
  <v-row class="ps-md-5 pt-md-5" v-if="isLogin">
    <v-col>
      <v-btn
        icon="mdi-arrow-left"
        color="#0fe"
        @click="back"
        style="box-shadow: 0 0 1rem #0fe"
      ></v-btn>
    </v-col>
  </v-row>
</template>
