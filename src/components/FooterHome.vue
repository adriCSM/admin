<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const mode = computed(() => store.state.mode);

const btn = ref([
  {
    file: 'ytb.png',
    href: 'https://www.youtube.com/@adracmangidi368',
  },
  {
    file: 'fb.png',
    href: 'https://web.facebook.com/adricandrasaputramangidi',
  },
  {
    file: 'ig.png',
    href: 'https://www.instagram.com/adri_csm/',
  },
  {
    file: 'wa.png',
    href: 'https://wa.me/6282259042427',
  },
  {
    file: 'ln.png',
    href: 'https://www.linkedin.com/in/adri-candra-saputra-m-9696a3195',
  },
]);
</script>

<template>
  <footer :class="mode ? 'bg-footer' : 'bg-footer-dark'">
    <div class="mx-md-15 mt-5">
      <v-container class="mx-xl-15 d-flex">
        <v-row>
          <v-col md="6">
            <v-row class="h-100">
              <v-col cols="12">
                <router-link
                  class="text-h4 text-decoration-none pe-5 text-white"
                  variant="text"
                  style="font-weight: 900"
                  to="/"
                >
                  <v-img src="../assets/img/logo_am_white.png" width="80" />
                </router-link>
              </v-col>

              <v-col cols="12" align-self="end">
                <div>
                  <v-btn
                    size="40"
                    variant="text"
                    rounded="lg"
                    color="#D9D9D9"
                    class="me-2 py-auto mt-2"
                    v-for="item in btn"
                    :key="item"
                    :href="item.href"
                    target="_blank"
                  >
                    <v-icon size="40">
                      <v-img :src="require(`../assets/img/` + item.file)"></v-img>
                    </v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="6">
            <v-row class="text-white" justify="space-between">
              <v-col>
                <h5 class="font-weight-bold text-h6">Documentation</h5>
                <div class="d-flex flex-column">
                  <router-link :to="{ name: 'AuthPost' }" class="text-white text-decoration-none">
                    Authentication
                  </router-link>
                  <router-link :to="{ name: 'UserPost' }" class="text-white text-decoration-none"
                    >User</router-link
                  >
                </div>
              </v-col>
              <v-col>
                <h5 class="font-weight-bold text-h6">Privacy & Policy</h5>
                <ul class="ps-0" style="list-style: none">
                  <li>Privacy</li>
                  <li>Policy</li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
          <v-divider thickness="3" class="my-0 mx-2 border-opacity-50"></v-divider>
          <v-col cols="12">
            <p>Copy right &copy; {{ new Date().getFullYear() }} by Adri Candra Saputra Mangidi</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </footer>
</template>
