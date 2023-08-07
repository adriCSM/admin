<script setup>
import router from '@/router';
import { useStore } from 'vuex';
import AddCv from '@/components/Portofolio/AddCv.vue';
import { computed, onMounted, ref } from 'vue';
const store = useStore();

onMounted(async () => {
  if (!store.state.cv.data) {
    await store.dispatch('cv/getCvs');
  }
});

const data = computed(() => store.state.cv.data);
const actions = ref([
  {
    text: 'Delete',
    icon: 'mdi-delete-outline',
    color: 'error',
    method: async (id) => {
      await store.dispatch('cv/deleteCv', id);
    },
  },
  {
    text: 'Edit',
    icon: 'mdi-pencil-outline',
    color: 'info',
    method: async (id) => {
      router.push({ name: 'Edit CV', params: { id } });
    },
  },
]);
</script>
<template>
  <v-container>
    <v-row justify="center ">
      <AddCv />
    </v-row>
    <v-row class="pt-10">
      <v-col cols="12" md="6" v-for="item in data" :key="item">
        <v-card height="auto" class="bg-dark rounded">
          <div class="d-flex flex-row">
            <v-card-title class="text-white" style="max-width: 60%">
              {{ item.name }}
            </v-card-title>
            <v-spacer></v-spacer>
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
          </div>
          <v-img :src="item.image" height="100%" cover />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
