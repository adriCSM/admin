<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import router from '@/router';

const store = useStore();
const route = useRoute();
const id = route.params.id;

const product = ref({
  name: '',
  price: '',
  quantity: '',
  image: [],
  blob: null,
  category: '',
});

onMounted(async () => {
  await store.dispatch('productsStore/getProduct', id);
  await store.dispatch('productsStore/getMetadataImageProduct', id);
  if (store.state.productsStore.product) {
    const metadata = store.state.productsStore.metadata;
    const { name, price, quantity, image: blob, category } = store.state.productsStore.product;
    product.value = {
      name,
      price,
      quantity,
      image: [
        new File([metadata], metadata.name, {
          type: metadata.contentType,
        }),
      ],
      blob,
      category,
    };
  }
});

const change = (event) => {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    product.value.blob = url;
  }
};

const update = async () => {
  await store.dispatch('productsStore/editProduct', {
    id,
    name: product.value.name,
    price: product.value.price,
    image: product.value.image[0],
    quantity: product.value.quantity,
    category: product.value.category,
  });
};

const back = () => {
  router.go(-1);
};
</script>

<template>
  <div class="rounded-xl px-md-10 mx-md-10" @keyup.enter="update">
    <v-row justify="center ">
      <v-col cols="12" md="10">
        <v-card class="bg-dark ma-3 pt-5 rounded-xl">
          <v-card-title style="color: #0fe" class="text-center">
            <span class="text-h5">Edit Project</span>
          </v-card-title>

          <v-card-text style="color: #0fe">
            <v-container>
              <v-row>
                <v-col cols="12" md="6" sm="6">
                  <v-text-field
                    label="Product Name"
                    name="product"
                    variant="outlined"
                    v-model="product.name"
                    required
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="2">
                  <v-text-field
                    label="Price"
                    name="price"
                    variant="outlined"
                    v-model="product.price"
                    required
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="2">
                  <v-text-field
                    label="Quantity"
                    name="quantity"
                    variant="outlined"
                    v-model="product.quantity"
                    required
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2" sm="2">
                  <v-autocomplete
                    label="Category"
                    :items="['Makanan', 'Pakaian', 'Skincare']"
                    variant="outlined"
                    v-model="product.category"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    label="Image"
                    variant="outlined"
                    prepend-icon="mdi-image"
                    v-model="product.image"
                    accept="image/*"
                    type="file"
                    maxFileSize="512000"
                    @change="change"
                  ></v-file-input>
                  <v-card width="50%" v-if="product.blob">
                    <v-img :src="product.blob"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" variant="text" @click="back()"> Back </v-btn>
            <v-btn color="#0fe" variant="text" @click="update()"> Update </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
