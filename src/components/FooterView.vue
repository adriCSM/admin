<template>
  <div
    v-if="
      router.currentRoute.value.name !== 'Donation' &&
      router.currentRoute.value.name !== 'Donation Success' &&
      router.currentRoute.value.name !== 'Notfound' &&
      router.currentRoute.value.name !== 'Home' &&
      router.currentRoute.value.name !== 'Login'
    "
    :class="mode ? 'bg-light text-black' : 'bg text-white'"
  >
    <div class="text-end px-7 py-3">Copyright &copy; by Adri Mangidi</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';
const store = useStore();
const mode = computed(() => store.state.mode);
</script>
