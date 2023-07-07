<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import router from '@/router';
import HeaderView from '@/components/HeaderView.vue';

const store = useStore();
const route = useRoute();
const id = route.params.id;
const error = computed(() => store.state.error);

const name = ref('');
const image = ref([]);
const certificate = ref({ image: null });
onMounted(async () => {
  await store.dispatch('certificates/getCertificate', id);
  const metadata = await store.dispatch('certificates/getMetadataImageCertificate', id);
  certificate.value = store.state.certificates.certificate;
  name.value = certificate.value.name;
  image.value[0] = new File([certificate.value.image], metadata.name, {
    type: metadata.contentType,
  });
});

const change = (event) => {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    certificate.value.image = url;
  }
};

const update = async () => {
  await store.dispatch('certificates/editCertificate', {
    id,
    name: name.value,
    image: image.value[0],
  });
  if (!error.value) {
    router.push({ name: 'Portofolio' });
  } else {
    certificate.value.image = null;
  }
};

const back = () => {
  router.go(-1);
};
</script>

<template>
  <v-app-bar elevation="2">
    <HeaderView />
  </v-app-bar>
  <main>
    <v-card class="bg-dark ma-3 pt-5">
      <div v-if="error">
        <h1 class="text-white">{{ error }}</h1>
      </div>
      <v-card-title style="color: #0fe" class="text-center">
        <span class="text-h5">Edit certificate</span>
      </v-card-title>

      <v-card-text style="color: #0fe">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Certificate Name"
                name="certificate"
                variant="outlined"
                v-model="name"
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
              <v-card width="50%" v-if="certificate.image">
                <v-img :src="certificate.image"></v-img>
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
  </main>
</template>
