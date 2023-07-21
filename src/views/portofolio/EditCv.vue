<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import router from '@/router';

const store = useStore();
const route = useRoute();
const id = route.params.id;

const cv = ref({
  name: '',
  image: [],
  blob: null,
});

onMounted(async () => {
  await store.dispatch('cv/getCv', { id });
  await store.dispatch('cv/getImageMetadata', id);
  if (store.state.cv.cv) {
    const metadata = store.state.cv.image_metadata;
    const { name, image: url } = store.state.cv.cv;
    cv.value = {
      name,
      image: [
        new File([metadata], metadata.name, {
          type: metadata.contentType,
        }),
      ],
      blob: url,
    };
  }
});

const change = (event) => {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    cv.value.blob = url;
  }
};

const update = async () => {
  await store.dispatch('cv/editCv', {
    id,
    name: cv.value.name,
    image: cv.value.image[0],
  });
  router.push({ name: 'Curiculum Vitae' });
};

const back = () => {
  router.go(-1);
};
</script>

<template>
  <div class="rounded-xl mt-15 pa-md-10 mx-md-10">
    <v-row justify="center ">
      <v-col cols="12" md="10">
        <v-card class="bg-dark ma-3 pt-5 rounded-xl">
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
                    v-model="cv.name"
                    required
                    type="text"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-file-input
                    label="Image"
                    variant="outlined"
                    prepend-icon="mdi-image"
                    v-model="cv.image"
                    accept="image/*"
                    type="file"
                    maxFileSize="512000"
                    @change="change"
                  ></v-file-input>
                  <v-card width="50%" v-if="cv.blob">
                    <v-img :src="cv.blob"></v-img>
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
