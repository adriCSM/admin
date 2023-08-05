<script setup>
import { computed, onMounted, ref } from 'vue';
import AddProduct from '@/components/store/AddProduct.vue';
import { useStore } from 'vuex';
import router from '@/router';

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
    method: async (id) => {
      await store.dispatch('productsStore/deleteProduct', id);
    },
  },
  {
    text: 'Edit',
    icon: 'mdi-pencil-outline',
    color: 'info',
    method: async (id) => {
      router.push({ name: 'Edit Product', params: { id } });
    },
  },
]);
</script>

<template>
  <v-container fluid>
    <v-card elevation="3" class="bg-white py-5 rounded-lg">
      <v-row>
        <v-col style="z-index: 69" class="text-center">
          <AddProduct />
        </v-col>
      </v-row>
      <v-table class="px-5 bg-white" hover>
        <thead>
          <tr class="">
            <th class="text-center">No</th>
            <th class="text-center">Name</th>
            <th class="text-center">Price</th>
            <th class="text-center">Cuantity</th>
            <th class="text-center">Image</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) in data" :key="product" class="text-center">
            <td class="text-capitalize">{{ i + 1 }}</td>
            <td class="text-capitalize text-start">{{ product.name }}</td>
            <td>Rp{{ product.price }}</td>
            <td>{{ product.quantity }} pcs</td>
            <td><v-img alt="Avatar" height="60px" :src="product.image"></v-img></td>

            <td>
              <v-tooltip :text="action.text" v-for="action in actions" :key="action">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    size="small"
                    :color="action.color"
                    :icon="action.icon"
                    class="ma-2"
                    @click="action.method(product._id)"
                  ></v-btn>
                </template>
              </v-tooltip>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>
