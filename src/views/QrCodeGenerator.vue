<script setup>
import { ref } from 'vue';

const qrName = ref('');

const url = ref(null);

const generator = () => {
  url.value = qrName.value;
};

const download = () => {
  console.log('download');
};
</script>

<template>
  <v-container>
    <v-card height="auto" width="600" class="mx-auto pa-5 text-center" elevation="4">
      <v-card-title>QR Code Generator</v-card-title>
      <v-text-field
        @keyup.enter="generator"
        v-model="qrName"
        variant="outlined"
        placeholder="Type here"
      ></v-text-field>
      <v-btn @click="generator" color="#6368d9" class="text-white">Generate QR Code</v-btn>
      <v-img
        v-if="url"
        :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`"
        max-width="200"
        class="mx-auto py-5 mt-5"
      ></v-img>
      <v-btn v-if="url" color="#6368d9" class="text-white" @click="download">Download</v-btn>
    </v-card>
  </v-container>
</template>
