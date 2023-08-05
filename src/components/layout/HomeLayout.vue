<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import CrouselLayout from '@/components/CrouselLayout.vue';

const store = useStore();
onMounted(async () => {
  if (!store.state.profile.myProfile && store.state.auth.loggedIn) {
    await store.dispatch('profile/myProfile');
  }
});
</script>

<template>
  <CrouselLayout class="mx-7" />
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
