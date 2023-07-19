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
        await certificateService.postCertificate(certificate);
        const response = await certificateService.getCertificates();
        commit('certificates', response.certificates);
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
        commit;
        store.commit('loading', true);
        const message = await certificateService.editCertificate(id);
        store.commit('loading', false);
        store.commit('success', message);
        router.push({ name: 'Certificates' });
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async deleteCertificates({ commit }, id) {
      try {
        await certificateService.deleteCertificates(id);
        const response = await certificateService.getCertificates();
        commit('certificates', response.certificates);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
  },
  mutations: {
    data(state, data) {
      state.data = data;
    },
    certificate(state, certificate) {
      state.certificate = certificate;
    },

    metadata(state, metadata) {
      state.image_metadata = metadata;
    },
  },
};
