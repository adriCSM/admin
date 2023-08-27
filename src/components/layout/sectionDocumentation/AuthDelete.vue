<script setup>
import BtnCopy from '@/components/BtnCopy.vue';

import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const mode = computed(() => {
  if (store.state.mode) {
    return 'bg-white text-black ';
  } else {
    return 'bg-element text-white';
  }
});

const response = ref(
  `
  {
    "status": "success",
    "message": "Token berhasil dihapus",
  }
  `,
);
const headers = ref(
  `
  { 
    "Headers": { 
      "Authorization": "Bearer accessToken"; 
    } 
  }   
  `,
);

import funHljs from '../../../config/hljs.js';
funHljs();
</script>

<template>
  <section id="deleteAuthentication">
    <h5 class="font-weight-bold" :class="store.state.mode ? 'text-black' : 'text-white'">
      DELETE Authentication
    </h5>
    <h6>Endpoint</h6>
    <v-card width="100%" height="auto" class="my-5" :class="mode">
      <v-card-title class="text-body-1"> DELETE /auth/&lt;refreshToken&gt; </v-card-title>
    </v-card>
    <h6>Headers</h6>
    <v-card class="my-5" :class="mode">
      <BtnCopy class-name="deleteAuthHeaders" />
      <pre class="json">
              <code class="deleteAuthHeaders">
                
  {{ headers }}  
  
              </code>
            </pre>
    </v-card>
    <h6>Response</h6>
    <v-card class="my-5" :class="mode">
      <BtnCopy class-name="deleteAuthResponse" />
      <pre class="deleteAuthResponse json">
              <code  >
    {{ response }}
              </code>
            </pre>
    </v-card>
  </section>
</template>
