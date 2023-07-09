import ProfileService from '@/services/profile.service';
import jwtDecode from 'jwt-decode';
import handler from '../services/error-handler';

const initialState = { userProfile: null };

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
        commit('userProfile', userProfile);
        return userProfile;
      } catch (error) {
        handler.errorHandling(error);
      }
    },
    async getProfile({ commit }, id) {
      try {
        const userProfile = await ProfileService.getProfile(id);
        commit('userProfile', userProfile);
        return userProfile;
      } catch (error) {
        handler.errorHandling(error);
      }
    },
    async deleteUser({ commit }, userId) {
      try {
        await ProfileService.deleteUser(userId);
        const users = await ProfileService.getUsers();
        commit('users', users);
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
    users(state, users) {
      state.users = users;
    },
  },
};
