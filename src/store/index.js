import { createStore } from 'vuex';
import { auth } from './auth.module';
import { productsStore } from './product.module';
import { profile } from './profile.module';
import { certificates } from './certificate.module';
import { projects } from './project.module';

export default createStore({
  modules: {
    auth,
    productsStore,
    profile,
    certificates,
    projects,
  },
  state: {
    drawer: false,
  },
  mutations: {
    drawer(state, drawer) {
      state.drawer = drawer;
    },
    error(state, error) {
      state.error = error;
    },
  },
});
