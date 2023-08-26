<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const visible = ref(false);
const emailRules = ref([
  (value) => {
    if (value) return true;
    return 'Email is required.';
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'Email must be valid.';
  },
]);

const user = ref({ email: '', password: '' });
// const user = ref({ email: 'admin@gmail.com', password: 'admin' });

const show = ref(false);
const store = useStore();
const username = ref(null);
onMounted(() => {
  username.value = store.state.auth.username;
  localStorage.removeItem('user_id');
  localStorage.removeItem('user');
  localStorage.removeItem('activeTabStore');
});

const login = async () => {
  show.value = true;
  await store.dispatch('auth/login', user.value);
  show.value = false;
};
</script>

<template>
  <v-row style="min-height: 80vh">
    <v-col align-self="center" cols="12 " class="d-flex justify-center">
      <v-card class="pa-3 overflow-visible" elevation="20" min-width="300" rounded="lg">
        <v-card class="mt-0 rounded-lg align-end" color="#6368D9" style="top: -40px" elevation="5">
          <router-link to="/">
            <v-img
              class="mx-auto my-8"
              max-width="120"
              height="70"
              src="../../assets/img/logo_am_white.png"
            >
            </v-img>
          </router-link>
        </v-card>

        <label for="email" class="text-subtitle-2 text-medium-emphasis">Email</label>
        <v-text-field
          name="email"
          color="#6368D9"
          v-model="user.email"
          :rules="emailRules"
          density="compact"
          type="email"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          @keyup.enter="login()"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          <label for="password"> Password </label>
          <router-link
            class="text-caption font-weight-light text-teal"
            to="password"
            rel="noopener noreferrer"
            target="_self"
          >
            Forgot password?</router-link
          >
        </div>

        <v-text-field
          required
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          prepend-inner-icon="mdi-lock-outline"
          color-icon="red"
          variant="outlined"
          color="teal"
          @click:append-inner="visible = !visible"
          v-model="user.password"
          @keyup.enter="login()"
        ></v-text-field>

        <v-btn block class="mb-8" color="#6368D9" @click="login">
          <span class="pe-3 text-white text-capitalize"> Sign In </span>
          <v-progress-circular :width="6" :size="30" color="white" indeterminate v-show="show">
          </v-progress-circular>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<style></style>
