<script setup>
import BtnCopy from '@/components/BtnCopy.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const mode = computed(() => {
  if (store.state.mode) {
    return 'bg-white text-black ';
  } else {
    return 'bg-element text-white';
  }
});
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
      <pre>
              <code class="deleteAuthHeaders">
      { 
        Headers: { 
          Authorization: Bearer &lt;accessToken&gt; 
        } 
      }
              </code>
            </pre>
    </v-card>
    <h6>Response</h6>
    <v-card class="my-5" :class="mode">
      <BtnCopy class-name="deleteAuthResponse" />
      <pre class="deleteAuthResponse">
              <code>
      {
        "status": "success",
        "message": "Token berhasil dihapus"
      }
              </code>
            </pre>
    </v-card>
  </section>
</template>
