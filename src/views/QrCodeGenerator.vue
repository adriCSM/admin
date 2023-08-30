<script setup>
import { ref } from 'vue';

const qrName = ref('');

const url = ref(null);

const generator = () => {
  if (qrName.value) {
    url.value = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrName.value}`;
  } else {
    url.value = null;
  }
};

const download = async () => {
  await fetch(url.value)
    .then((response) => response.blob())
    .then((file) => {
      const urlDownload = URL.createObjectURL(file);

      const link = document.createElement('a');
      link.href = urlDownload;
      link.download = 'QrCode-' + Date.now();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
};
</script>

<template>
  <v-container>
    <v-card height="auto" width="600" class="mx-auto pa-5 text-center" elevation="4">
      <v-card-title>QR Code Generator</v-card-title>
      <v-text-field
        @keyup.enter="generator"
        @keyup="isEmpty"
        v-model="qrName"
        variant="outlined"
        placeholder="Type here"
      ></v-text-field>
      <v-btn @click="generator" color="#6368d9" class="text-white">Generate QR Code</v-btn>
      <v-img v-if="url" :src="url" max-width="200" class="mx-auto py-5 mt-5"></v-img>
      <v-btn
        v-if="url"
        prepend-icon="mdi-download"
        color="#6368d9"
        class="text-white"
        @click="download"
        >Download</v-btn
      >
    </v-card>
  </v-container>
</template>
