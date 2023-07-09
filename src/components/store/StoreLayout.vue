<script setup>
import { onMounted, ref, watch } from 'vue';
import ProductsLayout from './ProductsLayout.vue';
import CartsLayout from './CartsLayout.vue';
import OrderLayout from './OrdersLayout.vue';

const tab = ref(null);
onMounted(() => {
  const savedTab = localStorage.getItem('activeTabStore');
  if (savedTab) {
    tab.value = parseInt(savedTab);
  }
});

watch(tab, (newValue) => {
  localStorage.setItem('activeTabStore', newValue.toString());
});
</script>

<template>
  <v-card class="bg-dark text-white">
    <v-tabs v-model="tab" color="#0fe" align-tabs="center">
      <v-tab :value="1">Products</v-tab>
      <v-tab :value="2">Carts</v-tab>
      <v-tab :value="3">Order</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 3" :key="n" :value="n">
        <ProductsLayout v-if="n == 1" />
        <CartsLayout v-if="n == 2" />
        <OrderLayout v-if="n == 3" />
      </v-window-item>
    </v-window>
  </v-card>
</template>
