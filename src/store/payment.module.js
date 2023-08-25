import paymentService from '@/services/payment.service';

const initialState = { redirect_url: '' };

export const payment = {
  namespaced: true,
  state: initialState,
  actions: {
    async donation({ commit }, payload) {
      const response = await paymentService.donation(payload);
      commit('url', response.redirect_url);
      return response.transaction.token;
    },
  },
  mutations: {
    url(state, redirect_url) {
      state.redirect_url = redirect_url;
    },
  },
};
