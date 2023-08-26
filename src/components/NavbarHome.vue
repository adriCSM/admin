<template>
  <v-navigation-drawer v-model="drawerHome" class="w-100" temporary style="z-index: 9999">
    <div class="text-end">
      <v-btn icon="mdi-close" variant="text" @click="close"> </v-btn>
    </div>
    <div class="d-flex align-center justify-center">
      <v-btn
        elevation="6"
        color="#6368D9"
        rounded="lg"
        class="text-white font-weight-bold text-capitalize me-3"
        to="/auth/login"
        @click="close"
      >
        Sign In
      </v-btn>

      <v-btn
        elevation="6"
        color="#6368D9"
        rounded="lg"
        variant="outlined"
        class="font-weight-bold text-capitalize"
      >
        <span :class="!mode ? 'text-indigo' : null"> Sign Up </span>
      </v-btn>
    </div>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item title="Home" to="/" @click="close"></v-list-item>
      <v-list-item title="Documentation" to="/documentation" @click="close"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import vuetify from '@/plugins/vuetify';
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const drawerHome = computed(() => store.state.drawerHome);
const close = () => {
  store.commit('drawerHome', false);
};

const smUp = computed(() => vuetify.display.smAndUp.value);
watch(smUp, (value) => {
  if (value) {
    store.commit('drawerHome', false);
  }
});
</script>
