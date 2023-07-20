import { createStore } from 'vuex';
import { auth } from './auth.module';
import { productsStore } from './product.module';
import { profile } from './profile.module';
import { certificates } from './certificate.module';
import { projects } from './project.module';
import { cv } from './cv.module';

export default createStore({
  modules: {
    auth,
    productsStore,
    profile,
    certificates,
    projects,
    cv,
  },
  state: {
    drawer: false,
    error: '',
    success: '',
    info: '',
    loading: false,
  },
  mutations: {
    drawer(state, drawer) {
      state.drawer = drawer;
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
});
