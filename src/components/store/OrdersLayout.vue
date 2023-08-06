<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

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
const store = useStore();
const mode = computed(() => {
  if (store.state.mode) {
    return 'bg-white';
  } else {
    return 'bg-grey-darken-3';
  }
});
</script>

<template>
  <v-container fluid class="px-7">
    <v-card class="py-5 rounded-lg" :class="mode" elevation="3">
      <v-table class="px-5bg-transparent overflow-y-auto" style="max-height: 90vh" hover>
        <thead>
          <tr>
            <th class="text-center bg-transparent">Consumer</th>
            <th class="text-center bg-transparent">Products</th>
            <th class="text-center bg-transparent">Cuantity</th>
            <th class="text-center bg-transparent">Address</th>
            <th class="text-center bg-transparent">Total Price</th>
            <th class="text-center bg-transparent">Action</th>
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
    </v-card>
  </v-container>
</template>
