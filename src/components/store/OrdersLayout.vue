<script setup>
import { ref } from 'vue';

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
      <AddProject />
    </v-row>
    <v-table class="pa-5 bg-dark" style="color: #0fe">
      <thead>
        <tr>
          <th class="text-center text-white">Consumer</th>
          <th class="text-center text-white">Products</th>
          <th class="text-center text-white">Cuantity</th>
          <th class="text-center text-white">Address</th>
          <th class="text-center text-white">Total Price</th>
          <th class="text-center text-white">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in 10" :key="item.name" class="text-center">
          <td>
            <v-avatar size="40px">
              <v-img alt="Avatar" src="../../assets/109715820.jpg"></v-img>
            </v-avatar>
          </td>
          <td>ale-ale</td>
          <td>a@gmail.com</td>
          <td>user</td>
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
