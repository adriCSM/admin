<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import router from '@/router';
import HeaderView from '@/components/HeaderView.vue';
import NavigationDrawerVue from '../components/NavigationDrawer.vue';

const store = useStore();
const route = useRoute();
const id = route.params.id;

const project = ref({
  name: '',
  description: '',
  image: [],
  url_site: '',
  blob: null,
});

onMounted(async () => {
  await store.dispatch('projects/getProject', id);
  await store.dispatch('projects/getMetadataImageProject', id);
  if (store.state.projects.project) {
    const metadata = store.state.projects.image_metadata;
    const { name, description, url_site, image: blob } = store.state.projects.project;
    project.value = {
      name,
      description,
      image: [
        new File([metadata], metadata.name, {
          type: metadata.contentType,
        }),
      ],
      url_site,
      blob,
    };
  }
});

const change = (event) => {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    project.value.blob = url;
  }
};

const update = async () => {
  await store.dispatch('projects/editProject', {
    id,
    name: project.value.name,
    description: project.value.description,
    image: project.value.image[0],
    url_site: project.value.url_site,
  });
};

const back = () => {
  router.go(-1);
};
</script>

<template>
  <div>
    <NavigationDrawerVue />
    <HeaderView />
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="bg-dark ma-3 pt-5">
          <v-card-title style="color: #0fe" class="text-center">
            <span class="text-h5">Edit Project</span>
          </v-card-title>

          <v-card-text style="color: #0fe">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Project Name"
                    name="project"
                    variant="outlined"
                    v-model="project.name"
                    required
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    label="Description"
                    name="description"
                    variant="outlined"
                    v-model="project.description"
                    required
                    type="text"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Url Web Site"
                    name="url"
                    variant="outlined"
                    v-model="project.url_site"
                    required
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    label="Image"
                    variant="outlined"
                    prepend-icon="mdi-image"
                    v-model="project.image"
                    accept="image/*"
                    type="file"
                    maxFileSize="512000"
                    @change="change"
                  ></v-file-input>
                  <v-card width="50%" v-if="project.blob">
                    <v-img :src="project.blob"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" variant="text" @click="back()"> Back </v-btn>
            <v-btn color="#0fe" variant="text" @click="update()"> Update </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
