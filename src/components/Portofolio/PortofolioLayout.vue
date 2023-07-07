<script setup>
import { computed, onMounted, ref } from 'vue';
import ProjectsLayout from './ProjectsLayout.vue';
import CertificatesLayout from './CertificatesLayout.vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(async () => {
  await store.dispatch('certificates/getCertificates');
  await store.dispatch('projects/getProjects');
});

const tab = ref(null);
const dataProjects = computed(() => {
  return store.state.projects.data;
});
const dataCertificate = computed(() => {
  return store.state.certificates.data;
});
</script>

<template>
  <v-card class="bg-dark text-white">
    <v-tabs v-model="tab" color="#0fe" align-tabs="center">
      <v-tab :value="1">Projects</v-tab>
      <v-tab :value="2">Certificates</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 3" :key="n" :value="n">
        <ProjectsLayout :data="dataProjects" v-if="n == 1" />
        <CertificatesLayout :data="dataCertificate" v-else />
      </v-window-item>
    </v-window>
  </v-card>
</template>
