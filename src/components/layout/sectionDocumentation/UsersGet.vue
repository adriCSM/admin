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
  <section id="getUsers">
    <h5 class="font-weight-bold" :class="store.state.mode ? 'text-black' : 'text-white'">
      GET Users
    </h5>
    <h6>Endpoint</h6>
    <v-card width="100%" height="auto" class="my-5" :class="mode">
      <v-card-title class="text-body-1"> GET /users </v-card-title>
    </v-card>
    <h6>Headers</h6>
    <v-card class="my-5" :class="mode">
      <BtnCopy class-name="getUsersHeaders" />

      <pre class="getUsersHeaders">
              <code >
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
      <BtnCopy class-name="getUsersResponse" />
      <pre class="getUsersResponse">
              <code>
      {
        "status":"success",
        "data": [
          {
            "_id": "64a80dd2082ef6f61e879677",
            "username": "adri",
            "phone_number": "081234567890",
            "email": "adri@gmail.com",
            "role": "adri",
            "pic": "https://img.icons8.com/ios-filled/50/000000/user-male-circle.png",
            "createdAt": "2023-07-07T13:06:26.860Z",
            "updatedAt": "2023-08-03T15:40:00.052Z",
            "__v": 0,
            "isOnline": true
          },
          ...
        ]
      }
              </code>
            </pre>
    </v-card>
  </section>
</template>
