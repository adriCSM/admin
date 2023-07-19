<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const stateDrawer = computed(() => store.state.drawer);
const pic = ref();
onMounted(async () => {
  await store.dispatch('profile/myProfile');
  if (store.state.profile.userProfile) {
    pic.value = store.state.profile.userProfile.pic;
  }
});
const changeDrawer = () => {
  store.commit('drawer', !stateDrawer.value);
};
</script>
<template>
  <v-app-bar elevation="2" class="bg-dark">
    <div class="w-100 text-white">
      <v-row>
        <v-col cols="4" class="text-center" align-self="center">
          <v-app-bar-icon class="font-weight-bold">AM</v-app-bar-icon>
        </v-col>
        <v-col cols="4" class="text-center d-flex justify-center align-center">
          <router-link to="/home" class="px-5"> Home </router-link>
          <router-link to="/users" class="px-5"> Users </router-link>
        </v-col>
        <v-col cols="4" class="text-end pe-10">
          <v-avatar size="40px" class="bg-white">
            <v-img alt="Avatar" :src="pic">
              <v-btn variant="text" @click="changeDrawer"> </v-btn>
            </v-img>
          </v-avatar>
        </v-col>
      </v-row>
    </div>
  </v-app-bar>
</template>
