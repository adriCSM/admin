<template>
  <div
    v-if="
      router.currentRoute.value.name !== 'Notfound' && router.currentRoute.value.name !== 'Login'
    "
    :class="mode ? 'bg-light text-black' : 'bg text-white'"
  >
    <v-row v-if="!isLogin && router.currentRoute.value.name == 'Home'">
      <v-col class="d-flex flex-column">
        <v-img src="../assets/logo_am.png" width="80"></v-img>
        <v-spacer></v-spacer>
        <div>
          <v-btn icon="mdi-facebook" color="blue" variant="tonal" class="text-h6"></v-btn>
          <v-btn icon="mdi-instagram" color="pink-darken-1" variant="tonal" class="text-h6"></v-btn>
          <v-btn icon="mdi-twitter" color="blue" variant="tonal" class="text-h6"></v-btn>
          <v-btn icon="mdi-github" color="black" variant="tonal" class="text-h6"></v-btn>
        </div>
      </v-col>
      <v-col>
        <div class="text-h5">Documentations</div>
        <v-list class="bg-transparent w-auto">
          <v-list-item to="/documentation"> Users </v-list-item>
          <v-list-item to="/documentation"> Products </v-list-item>
        </v-list>
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
