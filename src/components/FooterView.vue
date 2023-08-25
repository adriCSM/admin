<template>
  <div
    v-if="
      router.currentRoute.value.name !== 'Donation' &&
      router.currentRoute.value.name !== 'Donation Success' &&
      router.currentRoute.value.name !== 'Notfound' &&
      router.currentRoute.value.name !== 'Login'
    "
    :class="mode ? 'bg-light text-black' : 'bg text-white'"
  >
    <v-row
      v-if="!isLogin && router.currentRoute.value.name == 'Home'"
      class="text-center"
      justify="center"
    >
      <v-col cols="8" class="my-4">
        <h3 class="text-center">
          Klik donasi jika anda ingin mensupport saya dalam pengembangan website ini?
        </h3>
      </v-col>
      <v-col cols="2" class="my-4" align-self="center">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-btn
              v-bind="props"
              :elevation="isHovering ? '6' : '2'"
              rounded="pill"
              :variant="isHovering ? 'flat' : 'outlined'"
              color="blue"
              to="/donation"
              >Donasi</v-btn
            >
          </template>
        </v-hover>
      </v-col>
      <v-col class="d-flex flex-column w-auto" md="6">
        <v-img src="../assets/logo_am.png" width="80"></v-img>
        <v-spacer></v-spacer>
        <div>
          <v-btn icon="mdi-facebook" color="blue" variant="tonal" class="text-h6 w-auto"></v-btn>
          <v-btn icon="mdi-instagram" color="pink-darken-1" variant="tonal" class="text-h6"></v-btn>
          <v-btn icon="mdi-twitter" color="blue" variant="tonal" class="text-h6"></v-btn>
          <v-btn icon="mdi-github" color="black" variant="tonal" class="text-h6"></v-btn>
        </div>
      </v-col>
      <v-col md="auto">
        <div class="text-h5">Documentations</div>
        <div class="d-flex flex-column justify-center" hover>
          <router-link to="/documentation" class="text-decoration-none text-black"
            >Users</router-link
          >
          <router-link to="/documentation" class="text-decoration-none text-black">
            Products
          </router-link>
        </div>
      </v-col>
    </v-row>
    <div class="text-end px-7 py-3">Copyright &copy; by Adri Mangidi</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';
const store = useStore();
const mode = computed(() => store.state.mode);
const isLogin = computed(() => store.state.auth.loggedIn);
</script>
