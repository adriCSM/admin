<script setup>
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

const icon = ref('mdi-content-copy');
const copy = () => {
  const a = document.querySelector('.payloadUsers').innerText;
  const input = document.createElement('input');
  input.setAttribute('value', a);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
  icon.value = 'mdi-check';
  setTimeout(() => {
    icon.value = 'mdi-content-copy';
  }, 2000);
};
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col md="2" class="h-screen" :class="mode">
        <v-list class="bg-transparent" nav>
          <v-list-item to="/">Authentication</v-list-item>
          <v-list-item to="/" active-class="bg-blue">User</v-list-item>
          <v-list-item to="/">Product</v-list-item>
        </v-list>
      </v-col>
      <v-col md="10" class="px-10 overflow-y-auto" style="max-height: 100vh">
        <section id="addUsers">
          <h5 class="text-blue font-weight-bold">POST Users</h5>
          <h6>Endpoint</h6>
          <v-card width="100%" height="auto" class="my-5" :class="mode">
            <v-card-title class="text-body-1"> POST /users </v-card-title>
          </v-card>
          <h6>Payload</h6>
          <v-card class="my-5" :class="mode">
            <v-col cols="12" class="text-end bg-grey-darken-2">
              <v-btn
                :icon="icon"
                :color="mode == 'bg-white text-black ' ? 'black' : 'white'"
                @click="copy"
                variant="tonal"
              ></v-btn>
            </v-col>
            <pre>
              <code class="payloadUsers">
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
            <pre>
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
        <section id="getUsers">
          <h5 class="text-blue font-weight-bold">GET Users</h5>
          <h6>Endpoint</h6>
          <v-card width="100%" height="auto" class="my-5" :class="mode">
            <v-card-title class="text-body-1"> GET /users </v-card-title>
          </v-card>
          <h6>Headers</h6>
          <v-card class="my-5" :class="mode">
            <pre>
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
            <pre>
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
      }
              </code>
            </pre>
          </v-card>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>
