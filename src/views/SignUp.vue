<script setup></script>

<template>
  <div class="mx-md-15 mt-md-n15 pt-5">
    <v-container class="h-auto mx-xl-15 d-flex justify-space-between" style="min-height: 100vh">
      <v-row class="h-auto" justify="center">
        <v-col cols="12" class="h-auto justify-center" md="8" sm="8" align-self="center">
          <v-img src="../assets/img/img_signup.png" width="auto" class="mx-auto" cover></v-img>
        </v-col>
        <v-col cols="12" md="4" sm="4" align-self="center">
          <h5 class="font-weight-black">Sign Up</h5>
          <p>
            <span class="text-black">Silakan isi form dibawah untuk membuat </span>
            <span class="font-weight-bold">akun baru.</span>
          </p>

          <label for="username" class="text-black">Username</label>
          <v-text-field
            id="username"
            variant="solo-filled"
            rounded
            color="#6368d9"
            density="compact"
            theme="light"
          ></v-text-field>
          <label for="email" class="text-black">Email</label>
          <v-text-field
            id="email"
            variant="solo-filled"
            rounded
            color="#6368d9"
            theme="light "
            density="compact"
          ></v-text-field>
          <label for="password" class="text-black">Password</label>
          <v-text-field
            id="password"
            variant="solo-filled"
            rounded
            color="#6368d9"
            theme="light"
            density="compact"
          ></v-text-field>
          <label for="confirmPassword" class="text-black">Confirm Password</label>
          <v-text-field
            id="confirmPassword"
            variant="solo-filled"
            rounded
            color="#6368d9"
            theme="light"
            density="compact"
          ></v-text-field>

          <v-btn color="#6368d9" class="text-white font-weight-bold" rounded="pill" width="100%"
            >Sign Up</v-btn
          >

          <p class="mt-4 text-center text-black">
            Do you have account?
            <router-link to="/auth/login" class="text-decoration-none">Sign In</router-link>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
