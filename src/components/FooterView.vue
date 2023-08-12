<template>
  <div>
    <v-row v-if="!isLogin">
      <v-col> <h1>adri</h1> </v-col>
    </v-row>
    <div class="text-end px-7 py-3" :class="mode == 'bg' ? 'text-white' : 'text-black'">
      Copyright &copy; by Adri Mangidi
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isLogin = computed(() => store.state.auth.loggedIn);
</script>
