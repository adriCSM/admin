<script setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps(['className']);

const icon = ref('mdi-content-copy');
const className = computed(() => props.className);
const copy = () => {
  const a = document.querySelector(`.${className.value}`).innerText;
  const input = document.createElement('input');
  input.setAttribute('value', a);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
  icon.value = 'mdi-check';
  setTimeout(() => {
    icon.value = 'mdi-content-copy';
  }, 2000);
};
</script>
<template>
  <v-col cols="12" class="text-end bg-copy">
    <v-btn
      :icon="icon"
      :color="mode == 'bg-white text-black ' ? 'black' : 'white'"
      @click="copy('payloadUsers')"
      variant="tonal"
    ></v-btn>
  </v-col>
</template>
