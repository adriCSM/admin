<script setup>
import { ref } from 'vue';

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
  <footer class="bg-footer">
    <div class="mx-md-15">
      <v-container class="mx-xl-15 d-flex">
        <v-row>
          <v-col md="6">
            <div class="text-white text-h4 font-weight-black py-auto">AM</div>
            <div>
              <v-btn
                size="40"
                rounded="lg"
                color="#D9D9D9"
                class="me-2 py-auto"
                v-for="item in btn"
                :key="item"
              >
                <v-icon size="40">
                  <v-img :src="require(`../assets/` + item.file)"></v-img>
                </v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col md="6">
            <v-row class="text-white">
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
        </v-row>
      </v-container>
    </div>
  </footer>
</template>
