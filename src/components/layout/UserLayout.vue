<script setup>
import router from '@/router';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import AddUser from './AddUser.vue';

const store = useStore();
const dataUsers = computed(() => {
  if (!store.state.profile.users) {
    store.dispatch('profile/getUsers');
  }
  return store.state.profile.users;
});

const actions = ref([
  {
    text: 'Delete',
    icon: 'mdi-delete-outline',
    color: 'error',
    method: (id) => {
      store.dispatch('profile/deleteUser', id);
    },
  },
]);
const mode = computed(() => {
  if (store.state.mode) {
    return 'bg-white';
  } else {
    return 'bg-grey-darken-3';
  }
});

const profile = (id) => {
  router.push({ name: 'User Profile', params: { id } });
  store.dispatch('profile/getProfile', id);
};
</script>

<template>
  <v-container fluid class="overflow-x-auto px-7">
    <v-card class="py-5 rounded-lg" :class="mode" elevation="3">
      <v-row>
        <v-col class="text-center">
          <AddUser />
        </v-col>
      </v-row>
      <v-table class="bg-transparent" hover>
        <thead>
          <tr>
            <th class="text-center bg-transparent">Image</th>
            <th class="text-center bg-transparent">Name</th>
            <th class="text-center bg-transparent">Email</th>
            <th class="text-center bg-transparent">Role</th>
            <th class="text-center bg-transparent">Status</th>
            <th class="text-center bg-transparent">Action</th>
          </tr>
        </thead>
        <tbody style="cursor: pointer">
          <tr v-for="item in dataUsers" :key="item" class="text-center" @click="profile(item._id)">
            <td>
              <v-avatar size="40px" class="bg-white">
                <v-img alt="Avatar" :src="item.pic"></v-img>
              </v-avatar>
            </td>

            <td class="text-start">{{ item.username }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.role }}</td>
            <td v-if="item.isOnline">
              <v-badge dot color="success" inline> </v-badge>
              online
            </td>
            <td v-else>
              <v-badge dot color="error" inline> </v-badge>
              offline
            </td>
            <td>
              <v-tooltip :text="action.text" v-for="action in actions" :key="action">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    size="small"
                    class="ma-2"
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
