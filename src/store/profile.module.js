import ProfileService from '@/services/profile.service';
import store from '@/store';
import jwtDecode from 'jwt-decode';
import handler from '../services/error-handler';

const initialState = { userProfile: null, myProfile: null };

export const profile = {
  namespaced: true,
  state: initialState,
  actions: {
    async getUsers({ commit }) {
      try {
        const users = await ProfileService.getUsers();
        commit('users', users);
      } catch (error) {
        handler.errorHandling(error);
      }
    },
    async myProfile({ commit }) {
      try {
        const { id } = jwtDecode(JSON.parse(localStorage.getItem('user_id')));
        const userProfile = await ProfileService.getProfile(id);
        commit('myProfile', userProfile);
      } catch (error) {
        handler.errorHandling(error);
      }
    },
    async getProfile({ commit }, id) {
      try {
        const userProfile = await ProfileService.getProfile(id);
        console.log(userProfile);
        commit('userProfile', userProfile);
      } catch (error) {
        handler.errorHandling(error);
      }
    },
    async deleteUser({ commit }, userId) {
      try {
        const message = await ProfileService.deleteUser(userId);
        commit('delete', userId);
        store.commit('success', message);
      } catch (error) {
        handler.errorHandling(error);
      }
    },

    // async editProfile({ commit }, modifiedProfile) {
    //   const userProfile = await ProfileService.editProfile(modifiedProfile);
    //   commit('success', userProfile);
    // },

    // async uploadPic({ commit }, file) {
    //   const picURL = (await ProfileService.uploadPic(file, this.state.profile.userProfile.id)).url;
    //   commit('successUpload', picURL);
    // },
  },
  mutations: {
    userProfile(state, userProfile) {
      state.userProfile = userProfile;
    },
    myProfile(state, userProfile) {
      state.myProfile = userProfile;
    },
    users(state, users) {
      const { id } = jwtDecode(JSON.parse(localStorage.getItem('user_id')));
      state.users = users.filter((user) => user._id !== id);
    },
    delete(state, id) {
      state.users = state.users.filter((user) => user._id !== id);
    },
  },
};
