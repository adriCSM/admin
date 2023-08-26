<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const mode = computed(() => store.state.mode);

const btn = ref([
  {
    file: 'ytb.png',
  },
  {
    file: 'fb.png',
  },
  {
    file: 'ig.png',
  },
  {
    file: 'wa.png',
  },
  {
    file: 'ln.png',
  },
]);
</script>

<template>
  <footer :class="mode ? 'bg-footer' : 'bg-footer-dark'">
    <div class="mx-md-15">
      <v-container class="mx-xl-15 d-flex">
        <v-row>
          <v-col md="6">
            <v-row class="h-100">
              <v-col cols="12">
                <div class="text-white text-h4 font-weight-black py-auto">AM</div>
              </v-col>

              <v-col cols="12" align-self="end">
                <div>
                  <v-btn
                    size="40"
                    rounded="lg"
                    color="#D9D9D9"
                    class="me-2 py-auto mt-2"
                    v-for="item in btn"
                    :key="item"
                  >
                    <v-icon size="40">
                      <v-img :src="require(`../assets/` + item.file)"></v-img>
                    </v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="6">
            <v-row class="text-white" justify="space-between">
              <v-col>
                <h5 class="font-weight-medium">Documentation</h5>
                <ul class="ps-0" style="list-style: none">
                  <li>Authentication</li>
                  <li>User</li>
                  <li>Store</li>
                </ul>
              </v-col>
              <v-col>
                <h5 class="font-weight-medium">Privacy & Policy</h5>
                <ul class="ps-0" style="list-style: none">
                  <li>Privacy</li>
                  <li>Policy</li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
          <v-divider thickness="3" class="my-0 mx-2 border-opacity-100"></v-divider>
          <v-col cols="12">
            <p>Copy right &copy; {{ new Date().getFullYear() }} by Adri Candra Saputra Mangidi</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </footer>
</template>
