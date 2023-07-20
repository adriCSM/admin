import certificateService from '@/services/portofolio/certificate.service';
import handler from '../services/error-handler';
import store from '@/store';
import router from '@/router';

const initialState = { data: null };
export const certificates = {
  namespaced: true,
  state: initialState,
  actions: {
    async getMetadataImageCertificate({ commit }, id) {
      try {
        const response = await certificateService.getMetadataImageCertificate(id);
        commit('metadata', response.data);
        return response.data;
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async postCertificate({ commit }, certificate) {
      try {
        store.commit('loading', true);
        const message = await certificateService.postCertificate(certificate);
        const response = await certificateService.getCertificates();
        commit('data', response.certificates);
        router.push({ name: 'Certificates' });
        store.commit('loading', false);
        store.commit('success', message);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async getCertificates({ commit }) {
      try {
        const response = await certificateService.getCertificates();
        commit('data', response.certificates);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async getCertificate({ commit }, id) {
      try {
        store.commit('loading', true);
        const response = await certificateService.getCertificate(id);
        commit('certificate', response);
        setTimeout(() => {
          store.commit('loading', false);
        }, 1000);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async editCertificate({ commit }, id) {
      try {
        store.commit('loading', true);
        const message = await certificateService.editCertificate(id);
        const response = await certificateService.getCertificates();
        commit('data', response.certificates);
        store.commit('loading', false);
        store.commit('success', message);
        router.push({ name: 'Certificates' });
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async deleteCertificates({ commit }, id) {
      try {
        const message = await certificateService.deleteCertificates(id);
        commit('delete', id);
        store.commit('success', message);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
  },
  mutations: {
    data(state, data) {
      state.data = data;
    },
    delete(state, id) {
      state.data = state.data.filter((item) => item._id !== id);
    },
    certificate(state, certificate) {
      state.certificate = certificate;
    },

    metadata(state, metadata) {
      state.image_metadata = metadata;
    },
  },
};
