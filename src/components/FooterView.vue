<template>
  <div
    v-if="
      router.currentRoute.value.name !== 'Notfound' && router.currentRoute.value.name !== 'Login'
    "
    :class="mode ? 'bg-light text-black' : 'bg text-white'"
  >
    <v-row v-if="!isLogin && router.currentRoute.value.name == 'Home'">
      <v-col></v-col>
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
