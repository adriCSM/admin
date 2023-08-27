<script setup>
import vuetify from '@/plugins/vuetify';
import { computed } from 'vue';
import { useStore } from 'vuex';

const xs = computed(() => vuetify.display.xs.value);
const store = useStore();

const open = () => {
  store.commit('drawerHome', true);
};

const mode = computed(() => store.state.mode);
</script>

<template>
  <nav class="bg-nav">
    <div class="mx-md-15">
      <v-container class="mx-xl-15 d-flex pb-0 justify-space-between">
        <div>
          <v-list class="bg-transparent d-flex align-center">
            <router-link
              class="text-h4 text-decoration-none pe-5"
              variant="text"
              style="font-weight: 800; color: var(--text)"
              to="/"
            >
              AM
            </router-link>
            <v-list-item
              rounded="lg"
              v-if="!xs"
              to="/"
              :active-class="mode ? 'text-indigo rounded-lg py-0 ' : 'white rounded-lg py-0 '"
              class="font-weight-medium mx-2"
              :class="mode ? null : 'text-white'"
            >
              Home
            </v-list-item>
            <v-list-item
              v-if="!xs"
              rounded="lg"
              to="/documentation"
              :active-class="mode ? 'text-indigo rounded-lg py-0 ' : 'white rounded-lg py-0 '"
              class="font-weight-medium"
              :class="mode ? null : 'text-white'"
              >Documentation</v-list-item
            >
          </v-list>
        </div>
        <div class="d-flex align-center text-end">
          <v-btn
            v-if="!xs"
            color="#6368D9"
            rounded="lg"
            class="text-white font-weight-bold text-capitalize me-3"
            to="/auth/login"
          >
            Sign In
          </v-btn>

          <v-btn
            v-if="!xs"
            color="#6368D9"
            rounded="lg"
            variant="outlined"
            class="font-weight-bold text-capitalize"
          >
            <span :class="!mode ? 'text-white' : null"> Sign Up </span>
          </v-btn>

          <v-app-bar-nav-icon
            v-if="xs"
            variant="text"
            color="primary"
            @click.stop="open"
          ></v-app-bar-nav-icon>
        </div>
      </v-container>
    </div>
  </nav>
</template>
