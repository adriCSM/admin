<script setup>
import { ref } from 'vue';

const items = ref([
  {
    name: 'Web Portofolio',
    path: '/portofolio',
    image: '../../assets/wlppr.jpg',
  },
  {
    name: 'Store',
    path: '/store',
    image: '../../assets/wlppr.jpg',
  },
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4 class="text-white"><strong>Projects</strong></h4>
      </v-col>
      <v-col cols="12" sm="6" md="4" v-for="item in items" :key="item">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-auto rounded-xl" color="grey-lighten-4" max-width="400" v-bind="props">
            <v-img
              :aspect-ratio="16 / 12"
              cover
              src="../../assets/wlppr.jpg"
              :style="isHovering ? { transform: 'scale(1.1)', transition: '.5s' } : null"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex flex-column transition-fast-in-fast-out v-card--reveal text-h6 text-white"
                  style="height: 100%"
                >
                  <strong class="text-black" style="text-shadow: 0 0 1rem white">
                    {{ item.name }}
                  </strong>
                  <router-link :to="item.path">
                    <v-avatar color="white" size="35">
                      <v-icon size="25" color="orange"> mdi-open-in-new </v-icon>
                    </v-avatar>
                  </router-link>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), #0fe);
}
</style>
