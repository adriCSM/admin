<script setup>
import router from '@/router';

const back = () => {
  router.go(-1);
};
</script>

<template>
  <v-row>
    <v-col>
      <v-btn icon="mdi-arrow-left" @click="back" variant="text"></v-btn>
    </v-col>
  </v-row>
</template>
