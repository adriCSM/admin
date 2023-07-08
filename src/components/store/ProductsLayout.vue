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
    <v-table class="pa-5">
      <thead>
        <tr>
          <th class="text-center">Image</th>
          <th class="text-center">Name</th>
          <th class="text-center">Email</th>
          <th class="text-center">Role</th>
          <th class="text-center">Status</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in 10" :key="item.name" class="text-center">
          <td>
            <v-avatar size="40px">
              <v-img alt="Avatar" src="../../assets/109715820.jpg"></v-img>
            </v-avatar>
          </td>
          <td>{{ n }}</td>
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
