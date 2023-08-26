<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const show = computed(() => store.state.loading);
</script>
<template>
  <v-container v-show="show" fluid>
    <v-row>
      <v-col class="text-subtitle-1 text-info text-center font-weight-bold" cols="12">
        Loading...
      </v-col>
      <v-col cols="12" class="text-center">
        <v-progress-circular
          color="info"
          width="15"
          indeterminate
          rounded
          size="150"
        ></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>
