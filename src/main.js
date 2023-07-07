import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import axios from 'axios';
import store from './store';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

loadFonts();

createApp(App).use(router).use(store).use(vuetify).mount('#app');
