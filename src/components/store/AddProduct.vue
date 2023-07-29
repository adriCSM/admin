<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const dialog = ref(false);
const product = ref({
  name: '',
  price: '',
  cuantity: '',
  image: [],
  category: '',
  blob: null,
});

const add = async () => {
  await store.dispatch('productsStore/addProduct', {
    name: product.value.name,
    price: product.value.price,
    cuantity: product.value.cuantity,
    image: product.value.image[0],
    category: product.value.category,
  });
  if (store.state.error) {
    product.value = {
      ...product.value,
      name: '',
      price: '',
      cuantity: '',
      image: [],
      blob: null,
      category: '',
    };
  }
  dialog.value = false;
};

const change = () => {
  const file = product.value.image[0];
  if (file) {
    const blob = URL.createObjectURL(file);
    product.value.blob = blob;
  } else {
    product.value.blob = null;
  }
};
</script>

<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn color="success" v-bind="props" @click="show"><v-icon>mdi-plus</v-icon> Product </v-btn>
    </template>
    <v-card class="bg-dark">
      <div v-if="error">
        <h1 class="text-white">{{ error }}</h1>
      </div>
      <v-card-title style="color: #0fe">
        <span class="text-h5">Add certificate</span>
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
                label="Cuantity"
                name="url"
                variant="outlined"
                v-model="product.cuantity"
                required
                type="number"
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
              <v-card width="25%" v-if="product.blob">
                <v-img :src="product.blob"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Close </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="add"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
