<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const mode = computed(() => store.state.mode);

const icon = ref('mdi-content-copy');
const copy = () => {
  const a = document.querySelector('code').innerHTML;
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
  <v-row>
    <v-col md="2" class="h-screen" :class="mode ? 'bg-white text-black ' : 'bg-element text-white'">
      <v-list class="bg-transparent" nav>
        <v-list-item to="/" active-class="bg-blue">User</v-list-item>

        <v-list-item to="/">Product</v-list-item>
      </v-list>
    </v-col>
    <v-col md="10" class="px-2">
      <code class="code">
        <div>
          <span class="text-red">Get </span> <span class="text-white"> /users</span>
          <v-spacer></v-spacer
          ><v-btn :icon="icon" color="black" @click="copy" variant="text"></v-btn>
        </div>
      </code>
    </v-col>
  </v-row>
</template>
