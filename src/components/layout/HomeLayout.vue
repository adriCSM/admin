<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
onMounted(async () => {
  if (!store.state.profile.myProfile && store.state.auth.loggedIn) {
    await store.dispatch('profile/myProfile');
  }
});
const items = ref([
  {
    name: 'Web Portofolio',
    path: [
      { url: '/portofolio/projects', name: 'Projects' },
      { url: '/portofolio/certificates', name: 'Certificates' },
      { url: '/portofolio/cvs', name: 'Curiculum Vitae' },
    ],
    image: require('../../assets/S1.png'),
  },
  {
    name: 'Store',
    path: [
      { url: '/store/products', name: 'Product' },
      { url: '/store/carts', name: 'Cart' },
      { url: '/store/Orders', name: 'Order' },
    ],
    image: require('../../assets/wlppr.jpg'),
  },
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4 class="text-dark"><strong>Projects</strong></h4>
      </v-col>
      <v-col cols="12" sm="6" md="4" v-for="item in items" :key="item">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-auto rounded-xl" color="grey-lighten-4" max-width="400" v-bind="props">
            <v-img
              :aspect-ratio="16 / 12"
              cover
              :src="item.image"
              :style="isHovering ? { transform: 'scale(1.1)', transition: '.5s' } : null"
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex flex-column transition-fast-in-fast-out v-card--reveal text-h6 text-white"
                  style="height: 100%"
                >
                  <div class="flex-row text-center">
                    <router-link
                      v-for="path in item.path"
                      :key="path"
                      :to="path.url"
                      class="mx-3 text-dark"
                    >
                      <v-btn
                        class="my-1 rounded-xl text-capitalize"
                        style="box-shadow: 0 0 1rem white"
                      >
                        {{ path.name }}
                      </v-btn>
                    </router-link>
                  </div>
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
