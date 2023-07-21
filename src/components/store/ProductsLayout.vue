<script setup>
import { computed, onMounted, ref } from 'vue';
import AddProduct from '@/components/store/AddProduct.vue';
import { useStore } from 'vuex';

const store = useStore();
onMounted(async () => {
  if (!store.state.productsStore.products) {
    await store.dispatch('productsStore/getProducts');
  }
});
const data = computed(() => store.state.productsStore.products);

const actions = ref([
  {
    text: 'Delete',
    icon: 'mdi-delete-outline',
    color: 'error',
  },
  {
    text: 'Edit',
    icon: 'mdi-pencil-outline',
    color: 'info',
  },
]);
</script>

<template>
  <v-container fluid class="overflow-y-auto" style="max-height: 100vh">
    <v-row justify="center pt-5">
      <AddProduct />
    </v-row>
    <v-table class="pa-5 bg-dark" style="color: #0fe">
      <thead>
        <tr class="">
          <th class="text-center text-white">Name</th>
          <th class="text-center text-white">Price</th>
          <th class="text-center text-white">Cuantity</th>
          <th class="text-center text-white">Image</th>
          <th class="text-center text-white">Url</th>
          <th class="text-center text-white">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in data" :key="product" class="text-center">
          <td class="text-capitalize">{{ product.name }}</td>
          <td>Rp{{ product.price }}</td>
          <td>{{ product.cuantity }} pcs</td>
          <td><v-img alt="Avatar" height="60px" :src="product.image"></v-img></td>
          <td>
            <v-badge dot color="success" inline> </v-badge>
            active
          </td>
          <td>
            <v-tooltip :text="action.text" v-for="action in actions" :key="action">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  size="small"
                  :color="action.color"
                  :icon="action.icon"
                  class="mx-2"
                ></v-btn>
              </template>
            </v-tooltip>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
