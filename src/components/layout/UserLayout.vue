<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
onMounted(async () => {
  await store.dispatch('profile/getUsers');
});
const dataUsers = computed(() => {
  return store.state.profile.users;
});

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
  <v-container class="rounded-xl">
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
        <tr v-for="item in dataUsers" :key="item" class="text-center">
          <td>
            <v-avatar size="40px">
              <v-img alt="Avatar" src="../../assets/109715820.jpg"></v-img>
            </v-avatar>
          </td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.role }}</td>
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
                ></v-btn>
              </template>
            </v-tooltip>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
