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
        <p>
          Untuk sementara konten pada dokumnetasi API ini menampilkan semua CRUD method, headers,
          dan responsenya. Saya masih mempelajari isi kontent apa saja yang boleh dan tidaknya
          ditampilkan pada documentation API sehingga terhindar dari ancaman peretasan. untuk
          melihat source code lebih jelasnya anda dapat mengunjungi repositori github berikut
          <a href="https://github.com/adriCSM/admin" target="_blank"
            >https://github.com/adriCSM/admin</a
          >
          .
        </p>

        <section id="postAuthentication">
          <h5 class="text-blue font-weight-bold">POST Authentication</h5>
          <h6>Endpoint</h6>
          <v-card width="100%" height="auto" class="my-5" :class="mode">
            <v-card-title class="text-body-1"> POST /auth </v-card-title>
          </v-card>
          <h6>Payload</h6>
          <v-card class="my-5" :class="mode">
            <BtnCopy class-name="payloadAuthUsers" />
            <pre>
              <code class="payloadAuthUsers">
      {
        "email":"adri@gmail.com",
        "password": "#Adricsm10",
      }
              </code>
            </pre>
          </v-card>
          <h6>Response</h6>
          <v-card class="my-5" :class="mode">
            <BtnCopy class-name="authPostResponse" />
            <pre class="authPostResponse">
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

        <v-divider :color="mode" class="py-5"></v-divider>

        <section id="putAuthentication">
          <h5 class="text-blue font-weight-bold">PUT Authentication</h5>
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

        <v-divider :color="mode" class="py-5"></v-divider>

        <section id="deleteAuthentication">
          <h5 class="text-blue font-weight-bold">DELETE Authentication</h5>
          <h6>Endpoint</h6>
          <v-card width="100%" height="auto" class="my-5" :class="mode">
            <v-card-title class="text-body-1"> DELETE /auth/&lt;refreshToken&gt; </v-card-title>
          </v-card>
          <h6>Headers</h6>
          <v-card class="my-5" :class="mode">
            <BtnCopy class-name="putAuthPaylod" />
            <pre>
              <code class="putAuthPaylod">
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
            <BtnCopy class-name="putAuthResponse" />
            <pre class="putAuthResponse">
              <code>
      {
        "status": "success",
        "message": "Token berhasil dihapus"
      }
              </code>
            </pre>
          </v-card>
        </section>

        <v-divider :color="mode" class="py-5"></v-divider>

        <section id="addUsers">
          <h5 class="text-blue font-weight-bold">POST Users</h5>
          <h6>Endpoint</h6>
          <v-card width="100%" height="auto" class="my-5" :class="mode">
            <v-card-title class="text-body-1"> POST /users </v-card-title>
          </v-card>
          <h6>Payload</h6>
          <v-card class="my-5" :class="mode">
            <BtnCopy class-name="payloadUsers" />
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
            <BtnCopy class-name="usersResponse" />
            <pre class="usersResponse">
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

        <v-divider :color="mode" class="py-5"></v-divider>

        <section id="getUsers">
          <h5 class="text-blue font-weight-bold">GET Users</h5>
          <h6>Endpoint</h6>
          <v-card width="100%" height="auto" class="my-5" :class="mode">
            <v-card-title class="text-body-1"> GET /users </v-card-title>
          </v-card>
          <h6>Headers</h6>
          <v-card class="my-5" :class="mode">
            <BtnCopy class-name="headersGetUsers" />

            <pre class="headersGetUsers">
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
            <BtnCopy class-name="responseGetUsers" />
            <pre class="responseGetUsers">
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
      </v-col>
    </v-row>
  </v-container>
</template>
