import certificateService from '@/services/portofolio/certificate.service';
import handler from '../services/error-handler';

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
        commit('certificates', response.certificates);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async getCertificate({ commit }, id) {
      try {
        const response = await certificateService.getCertificate(id);
        commit('certificate', response);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async editCertificate({ commit }, id) {
      try {
        const response = await certificateService.editCertificate(id);
        commit('success', response);
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
    certificates(state, certificates) {
      state.data = certificates;
    },
    certificate(state, certificate) {
      state.certificate = certificate;
    },
    success(state, success) {
      state.message = success;
    },
    metadata(state, metadata) {
      state.image_metadata = metadata;
    },
  },
};
