<template>
  <v-tooltip :text="mode ? 'Light' : 'Dark'" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        position="fixed"
        elevation="10"
        style="z-index: 99; right: 30px; bottom: 50px"
        icon
        size="50"
        @click="store.commit('mode', !mode)"
        :class="mode ? 'bg-white' : 'bg-element '"
        variant="tonal"
      >
        <v-avatar size="25">
          <v-img src="../assets/sun.svg" v-if="mode"></v-img>
          <v-img src="../assets/moon.png" v-else></v-img>
        </v-avatar>
      </v-btn>
    </template>
  </v-tooltip>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const mode = computed(() => store.state.mode);
</script>
