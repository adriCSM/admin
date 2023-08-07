<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const dialog = ref(false);
const error = computed(() => store.state.error);
const name = ref();
const description = ref();
const image = ref([]);
const url_site = ref();
const blobImage = ref();

const add = async () => {
  await store.dispatch('projects/postProject', {
    name: name.value,
    description: description.value,
    image: image.value[0],
    url_site: url_site.value,
  });
  if (!error.value) {
    image.value = '';
    description.value = '';
    name.value = '';
    url_site.value = '';
    dialog.value = false;
  }
  if (!image.value[0]) {
    blobImage.value = null;
  }
};

const change = () => {
  const file = image.value[0];
  if (file) {
    const blob = URL.createObjectURL(file);
    blobImage.value = blob;
  } else {
    blobImage.value = null;
  }
};
</script>

<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn color="success" v-bind="props" @click="show"><v-icon>mdi-plus</v-icon> Project </v-btn>
    </template>
    <v-card class="bg-dark">
      <div v-if="error">
        <h1 class="text-white">{{ error }}</h1>
      </div>
      <v-card-title style="color: #0fe" class="text-center"> Add Project </v-card-title>

      <v-card-text style="color: #0fe">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Project Name"
                variant="outlined"
                v-model="name"
                required
                type="text"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Description"
                variant="outlined"
                v-model="description"
                required
                type="text"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Url Web Site"
                name="url"
                variant="outlined"
                v-model="url_site"
                required
                type="text"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-file-input
                label="Image"
                variant="outlined"
                prepend-icon="mdi-image"
                v-model="image"
                accept="image/*"
                type="file"
                maxFileSize="512000"
                @change="change"
              ></v-file-input>
              <v-card width="25%" v-if="blobImage">
                <v-img :src="blobImage"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Close </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="add"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
