import { createStore } from 'vuex';
import { auth } from './auth.module';
import { productsStore } from './product.module';
import { profile } from './profile.module';
import { certificates } from './certificate.module';
import { projects } from './project.module';
import { cv } from './cv.module';
import { contact } from './contact.module';
import { payment } from '@/store/payment.module';

const mode = JSON.parse(localStorage.getItem('mode'));

export default createStore({
  modules: {
    auth,
    productsStore,
    profile,
    certificates,
    projects,
    cv,
    contact,
    payment,
  },
  state: {
    drawer: null,
    error: '',
    success: '',
    info: '',
    loading: false,
    mode: mode,
  },
  mutations: {
    drawer(state, drawer) {
      state.drawer = drawer;
    },
    mode(state, mode) {
      localStorage.setItem('mode', mode);
      state.mode = mode;
    },
    success(state, success) {
      state.success = success;
    },
    error(state, error) {
      state.error = error;
    },
    info(state, info) {
      state.info = info;
    },
    loading(state, loading) {
      state.loading = loading;
    },
  },
  getters: {
    mode(state) {
      console.log(state);
    },
  },
});
