<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const mode = computed(() => {
  if (store.state.mode) {
    return 'bg-white text-black ';
  } else {
    return 'bg-element text-white';
  }
});

const icon = ref('mdi-content-copy');
const copy = () => {
  const a = document.querySelector('code').innerText;
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
    <v-col md="2" class="h-screen" :class="mode">
      <v-list class="bg-transparent" nav>
        <v-list-item to="/" active-class="bg-blue">User</v-list-item>

        <v-list-item to="/">Product</v-list-item>
      </v-list>
    </v-col>
    <v-col md="10" class="px-2">
      <code class="code">
        <v-row class="me-7 ms-3" :class="mode">
          <v-col>
            <div class="bg-grey">
              <v-btn
                location="right"
                :icon="icon"
                color="black"
                @click="copy"
                variant="text"
              ></v-btn>
            </div>
            <div><span class="text-red">Get </span> <span> /users</span></div>
          </v-col>
        </v-row>
      </code>
    </v-col>
  </v-row>
</template>
