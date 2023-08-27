<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import BtnCopy from '@/components/BtnCopy.vue';

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
  <section id="putAuthentication">
    <h5 class="font-weight-bold" :class="store.state.mode ? 'text-black' : 'text-white'">
      PUT Authentication
    </h5>
    <h6>Endpoint</h6>
    <v-card width="100%" height="auto" class="my-5" :class="mode">
      <v-card-title class="text-body-1"> PUT /auth </v-card-title>
    </v-card>
    <h6>Payload</h6>
    <v-card class="my-5" :class="mode">
      <BtnCopy class-name="putAuthPaylod" />
      <pre>
              <code class="putAuthPaylod">
      {
        "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWE5NmUxMGQ5NjkxYjE4NTBkYzQwOCIsImlhdCI6MTY5MjE1NTc2Mn0.3BmcgWcpDNJhoOOlqjRkt91wZ_hATBjlwty6GmuMx24"
      }
              </code>
            </pre>
    </v-card>
    <h6>Response</h6>
    <v-card class="my-5" :class="mode">
      <BtnCopy class-name="putAuthResponse" />
      <pre class="putAuthResponse">
              <code>
      {
        "status": "success",
        "data": {
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWE5NmUxMGQ5NjkxYjE4NTBkYzQwOCIsImlhdCI6MTY5MjE1NzAxMX0.Hqlzc3B_se2VBh5F7uQXHxP3pizx4ql6Uiv2kxRdY20"
        }
      }
              </code>
            </pre>
    </v-card>
  </section>
</template>
