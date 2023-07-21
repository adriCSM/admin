import store from '@/store';
import handler from '../services/error-handler';
import contactService from '@/services/portofolio/contact.service';

const initialState = { messages: null };

export const contact = {
  namespaced: true,
  state: initialState,
  mutations: {
    messages(state, messages) {
      state.messages = messages;
    },

    delete(state, id) {
      state.messages = state.messages.filter((message) => message._id !== id);
    },
  },
  actions: {
    async getMessages({ commit }) {
      try {
        store.commit('loading', true);
        const response = await contactService.getMessages();
        commit('messages', response);
        store.commit('loading', false);
      } catch (error) {
        handler.errorHandling(error);
      }
    },

    async addMessage({ commit }, product) {
      try {
        store.commit('loading', true);
        const message = await contactService.addMessage(product);
        const response = await contactService.getMessages();
        commit('messages', response);
        store.commit('loading', false);
        store.commit('success', message);
      } catch (error) {
        handler.errorHandling(error);
      }
    },

    async deleteMessage({ commit }, id) {
      try {
        store.commit('loading', true);
        const message = await contactService.deleteMessage(id);
        store.commit('loading', false);
        store.commit('success', message);
        commit('delete', id);
      } catch (error) {
        handler.errorHandling(error);
      }
    },
  },
};
