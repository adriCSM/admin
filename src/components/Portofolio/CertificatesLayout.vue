<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AddCertificate from './AddCertificate.vue';
const store = useStore();
const router = useRouter();

if (!store.state.certificates.data) {
  onMounted(async () => {
    await store.dispatch('certificates/getCertificates');
  });
}
const data = computed(() => store.state.certificates.data);

const actions = ref([
  {
    text: 'Delete',
    icon: 'mdi-delete-outline',
    color: 'error',
    method: async (id) => {
      await store.dispatch('certificates/deleteCertificates', id);
    },
  },
  {
    text: 'Edit',
    icon: 'mdi-pencil-outline',
    color: 'info',
    method: async (id) => {
      router.push({ name: 'Edit Certificate', params: { id } });
    },
  },
]);
</script>

<template>
  <v-container fluid>
    <v-row justify="center ">
      <AddCertificate />
    </v-row>
    <v-table class="bg-dark py-5" style="color: #0fe">
      <thead>
        <tr>
          <th class="text-center text-white">Name</th>
          <th class="text-center text-white">Image</th>
          <th class="text-center text-white">Link Image</th>
          <th class="text-center text-white">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item" class="text-center">
          <td class="text-start">{{ item.name }}</td>
          <td>
            <v-card width="100px">
              <v-img :alt="item.name" :src="item.image"></v-img>
            </v-card>
          </td>
          <td>
            <div class="overText" style="max-width: 40vw">
              <v-tooltip text="Open Link">
                <template v-slot:activator="{ props }">
                  <a :href="item.image" target="_blank" style="color: #0fe">
                    <v-btn v-bind="props" variant="outlined" icon="mdi-open-in-new" color="info">
                    </v-btn>
                  </a>
                </template>
              </v-tooltip>
            </div>
          </td>
          <td class="w-25">
            <v-tooltip :text="action.text" v-for="action in actions" :key="action">
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
  </v-container>
</template>

<style>
.overText {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
