import paymentService from '@/services/payment.service';
import store from '@/store';
import errorHandler from '@/services/error-handler';

const initialState = { redirect_url: '' };

export const payment = {
  namespaced: true,
  state: initialState,
  actions: {
    async donation({ commit }, payload) {
      try {
        store.commit('loading', true);
        const response = await paymentService.donation(payload);
        commit('url', response.redirect_url);
        if (response.transaction.token) {
          store.commit('loading', false);
        }
        return response.transaction.token;
      } catch (error) {
        errorHandler.errorHandling(error);
      }
    },
  },
  mutations: {
    url(state, redirect_url) {
      state.redirect_url = redirect_url;
    },
  },
};
