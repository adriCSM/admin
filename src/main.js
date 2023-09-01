import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import axios from 'axios';
import store from './store';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import javascript from 'highlight.js/lib/languages/javascript';
import './registerServiceWorker.js';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.withCredentials = true;

loadFonts();

createApp(App).use(router).use(store).use(hljs).use(vuetify).mount('#app');
