<script setup>
import router from '@/router';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import AddProject from './AddProject.vue';
const store = useStore();

onMounted(async () => {
  if (!store.state.projects.data) {
    await store.dispatch('projects/getProjects');
  }
});

const data = computed(() => store.state.projects.data);

const actions = ref([
  {
    text: 'Delete',
    icon: 'mdi-delete-outline',
    color: 'error',
    method: async (id) => {
      await store.dispatch('projects/deleteProject', id);
    },
  },
  {
    text: 'Edit',
    icon: 'mdi-pencil-outline',
    color: 'info',
    method: async (id) => {
      router.push({ name: 'Edit Project', params: { id } });
    },
  },
]);

const mode = computed(() => {
  if (store.state.mode) {
    return 'bg-white';
  } else {
    return 'bg-element';
  }
});
</script>

<template>
  <v-container fluid v-if="data" class="px-7">
    <v-card class="py-5 rounded-lg" :class="mode" elevation="3">
      <v-row>
        <v-col class="text-center">
          <AddProject />
        </v-col>
      </v-row>
      <v-table class="px-5 bg-transparent" hover>
        <thead>
          <tr>
            <th class="text-center bg-transparent">Name</th>
            <th class="text-center bg-transparent">Image</th>
            <th class="text-center bg-transparent">Link Web</th>
            <th class="text-center bg-transparent">Description</th>
            <th class="text-center bg-transparent">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item" class="text-center">
            <td class="text-start" lang="id-ID">
              {{ item.name }}
            </td>
            <td>
              <v-img :src="item.image" width="70px" class="ma-2 rounded"></v-img>
            </td>
            <td>
              <div class="overText" style="max-width: 40vw">
                <v-tooltip text="Open Website">
                  <template v-slot:activator="{ props }">
                    <a :href="item.url_site" target="_blank" style="color: #0fe">
                      <v-btn v-bind="props" variant="outlined" icon="mdi-open-in-new" color="info">
                      </v-btn>
                    </a>
                  </template>
                </v-tooltip>
              </div>
            </td>
            <td class="text-justify">{{ item.description }}</td>
            <td class="d-flex flex-row">
              <v-tooltip :text="action.text" v-for="action in actions" :key="action" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    size="small"
                    :color="action.color"
                    :icon="action.icon"
                    class="ma-2"
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
