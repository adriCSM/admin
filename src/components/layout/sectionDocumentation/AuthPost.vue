<script setup>
import { useStore } from 'vuex';
import BtnCopy from '@/components/BtnCopy.vue';

const store = useStore();
</script>

<template>
  <section id="postAuthentication">
    <h5 class="font-weight-bold" :class="store.state.mode ? 'text-black' : 'text-white'">
      POST Authentication
    </h5>
    <h6>Endpoint</h6>
    <v-card width="100%" height="auto" class="my-5">
      <v-card-title class="text-body-1"> POST /auth </v-card-title>
    </v-card>
    <h6>Payload</h6>
    <v-card class="my-5">
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
    <v-card class="my-5">
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
