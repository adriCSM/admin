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
        to="/auth/register"
      >
        <span :class="!mode ? 'text-indigo' : null"> Sign Up </span>
      </v-btn>
    </div>

    <v-divider></v-divider>

    <v-list density="compact" class="h-75 d-flex flex-column" nav>
      <v-list-item
        title="Home"
        to="/"
        @click="close"
        color="#6368D9"
        prepend-icon="mdi-home"
      ></v-list-item>
      <v-list-item
        title="Documentation"
        to="/documentation"
        @click="close"
        color="#6368D9"
        prepend-icon="mdi-book"
      ></v-list-item>
      <v-spacer></v-spacer>
      <v-list-item> Follow my social media: </v-list-item>
      <div>
        <v-btn
          size="40"
          variant="text"
          rounded="lg"
          color="#D9D9D9"
          class="me-2 py-auto mt-2"
          v-for="item in btn"
          :key="item"
          :href="item.href"
          target="_blank"
        >
          <v-icon size="40">
            <v-img :src="require(`../assets/img/` + item.file)"></v-img>
          </v-icon>
        </v-btn>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import vuetify from '@/plugins/vuetify';
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const drawerHome = computed(() => store.state.drawerHome);
const close = () => {
  store.commit('drawerHome', false);
};
const btn = ref([
  {
    file: 'ytb.png',
    href: 'https://www.youtube.com/@adracmangidi368',
  },
  {
    file: 'fb.png',
    href: 'https://web.facebook.com/adricandrasaputramangidi',
  },
  {
    file: 'ig.png',
    href: 'https://www.instagram.com/adri_csm',
  },
  {
    file: 'wa.png',
    href: 'https://wa.me/6282259042427',
  },
  {
    file: 'ln.png',
    href: 'https://www.linkedin.com/in/adri-candra-saputra-m-9696a3195',
  },
]);
const smUp = computed(() => vuetify.display.smAndUp.value);
watch(smUp, (value) => {
  if (value) {
    store.commit('drawerHome', false);
  }
});
</script>
