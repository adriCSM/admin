import cvService from '@/services/portofolio/cv.service';
import store from '@/store';

const initialState = { data: null, cv: null, image_metadata: null };

export const cv = {
  namespaced: true,
  state: initialState,
  mutations: {
    data(state, data) {
      state.data = data;
    },
    image_metadata(state, image_metadata) {
      state.image_metadata = image_metadata;
    },
    cv(state, cv) {
      state.cv = cv;
    },
    delete(state, id) {
      state.data = state.data.filter((cv) => cv._id !== id);
    },
  },
  actions: {
    async addCv({ commit }, cv) {
      store.commit('loading', true);
      const message = await cvService.addCv(cv);
      const response = await cvService.getCvs();
      commit('data', response);
      store.commit('loading', false);
      store.commit('success', message);
      commit;
    },
    async getCvs({ commit }) {
      store.commit('loading', true);
      const response = await cvService.getCvs();
      store.commit('loading', false);
      commit('data', response);
    },
    async getCv({ commit }, query) {
      store.commit('loading', true);
      const response = await cvService.getCv(query);
      store.commit('loading', false);
      commit('cv', response);
    },
    async getImageMetadata({ commit }, id) {
      store.commit('loading', true);
      const response = await cvService.getCvImageMetadata(id);
      store.commit('loading', false);
      commit('image_metadata', response);
    },
    async editCv({ commit }, cv) {
      store.commit('loading', true);
      const message = await cvService.editCv(cv);
      const response = await cvService.getCvs();
      commit('data', response);
      store.commit('loading', false);
      store.commit('success', message);
    },
    async deleteCv({ commit }, id) {
      store.commit('loading', true);
      const message = await cvService.deleteCv(id);
      store.commit('loading', false);
      store.commit('success', message);
      commit('delete', id);
    },
  },
};
