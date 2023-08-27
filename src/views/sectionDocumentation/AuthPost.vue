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
  <section id="postAuthentication">
    <h5 class="text-blue font-weight-bold">POST Authentication</h5>
    <h6>Endpoint</h6>
    <v-card width="100%" height="auto" class="my-5" :class="mode">
      <v-card-title class="text-body-1"> POST /auth </v-card-title>
    </v-card>
    <h6>Payload</h6>
    <v-card class="my-5" :class="mode">
      <BtnCopy class-name="postAuthPayload" />
      <pre>
              <code class="postAuthPayload">
      {
        "email":"adri@gmail.com",
        "password": "#Adricsm10",
      }
              </code>
            </pre>
    </v-card>
    <h6>Response</h6>
    <v-card class="my-5" :class="mode">
      <BtnCopy class-name="postAuthResponse" />
      <pre class="postAuthResponse">
              <code>
      {
        "status": "success",
        "data": {
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWE5NmUxMGQ5NjkxYjE4NTBkYzQwOCIsImlhdCI6MTY5MjE1NTc2Mn0.3BmcgWcpDNJhoOOlqjRkt91wZ_hATBjlwty6GmuMx24",
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWE5NmUxMGQ5NjkxYjE4NTBkYzQwOCIsImlhdCI6MTY5MjE1NTc2Mn0.fd7L2W4M4RVp4KfPU9gdewCWWXAWgorzghjWYu2wKDA"
        }
      }
              </code>
            </pre>
    </v-card>
  </section>
</template>
