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
  <section id="addUsers">
    <h5 class="text-blue font-weight-bold">POST Users</h5>
    <h6>Endpoint</h6>
    <v-card width="100%" height="auto" class="my-5" :class="mode">
      <v-card-title class="text-body-1"> POST /users </v-card-title>
    </v-card>
    <h6>Payload</h6>
    <v-card class="my-5" :class="mode">
      <BtnCopy class-name="postUsersPayload" />
      <pre>
              <code class="postUsersPayload">
      {
        "username":"adri",
        "phoneNumber": "081234567890",
        "email":"adri@gmail.com",
        "password": "#Adricsm10",
        "confirmPassword":"#Adricsm10"
      }
              </code>
            </pre>
    </v-card>
    <h6>Response</h6>
    <v-card class="my-5" :class="mode">
      <BtnCopy class-name="postUsersResponse" />
      <pre class="postUsersResponse">
              <code>
      {
        "status": "success",
        "message": "Akun berhasil dibuat",
        "data": {
          "userId": "64cbce0c7a4d8fc56d322b80"
        }
      }
              </code>
            </pre>
    </v-card>
  </section>
</template>
