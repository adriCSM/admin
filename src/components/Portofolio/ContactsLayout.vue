<script setup>
import store from '@/store';
import { computed, onMounted, ref } from 'vue';

if (!store.state.contact.messages) {
  onMounted(async () => {
    await store.dispatch('contact/getMessages');
  });
}
const data = computed(() => store.state.contact.messages);

const actions = ref([
  {
    text: 'Delete',
    icon: 'mdi-delete-outline',
    color: 'error',
    method: async (id) => {
      await store.dispatch('contact/deleteMessage', id);
    },
  },
]);
</script>

<template>
  <v-container fluid class="overflow-y-auto" style="max-height: 100vh">
    <v-card class="bg-white">
      <v-table class="pa-5 bg-white" hover>
        <thead>
          <tr>
            <th class="text-center">Name</th>
            <th class="text-center">Email</th>
            <th class="text-center">No.Hp</th>
            <th class="text-center">Message</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item" class="text-center">
            <td>{{ item.name }}</td>
            <td style="max-width: 25vh">
              <span v-for="n in 1" :key="n" class="text-start"> {{ item.email }}</span>
            </td>
            <td style="max-width: 25vh">
              <span v-for="n in 1" :key="n" class="text-start"> {{ item.mobile_number }}</span>
            </td>
            <td style="max-width: 25vh">
              <span v-for="n in 1" :key="n" class="text-start">{{ item.message }}</span>
            </td>
            <td class="w-auto">
              <v-tooltip :text="action.text" v-for="action in actions" :key="action">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    size="small"
                    :color="action.color"
                    :icon="action.icon"
                    @click="action.method(item._id)"
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
