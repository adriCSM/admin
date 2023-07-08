<script setup>
import { ref } from 'vue';
import ProductsLayout from './ProductsLayout.vue';
import CartsLayout from './CartsLayout.vue';
import OrderLayout from './OrdersLayout.vue';

const tab = ref(null);
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" color="#0fe" align-tabs="center">
      <v-tab :value="1">Products</v-tab>
      <v-tab :value="2">Carts</v-tab>
      <v-tab :value="3">Order</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 3" :key="n" :value="n">
        <ProductsLayout v-if="n == 1" />
        <CartsLayout v-if="n == 2" />
        <OrderLayout v-else />
      </v-window-item>
    </v-window>
  </v-card>
</template>
