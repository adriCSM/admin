<script setup>
import router from '@/router';

const back = () => {
  router.go(-1);
};
</script>

<template>
  <v-row
    class="ps-md-15 pt-5 ms-md-15"
    v-if="router.currentRoute.value.name !== 'Home' && router.currentRoute.value.name !== 'Login'"
  >
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
