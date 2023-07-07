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
    async getProfile({ commit }) {
      try {
        const token = JSON.parse(localStorage.getItem('user_id'));
        const { id: userId } = jwtDecode(token);
        const userProfile = await ProfileService.getProfile(userId);
        commit('success', userProfile);
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
    success(state, userProfile) {
      state.users.userProfile = userProfile;
    },
    successUpload(state, picURL) {
      state.users.userProfile.profile_image = picURL;
    },
    users(state, users) {
      state.users = users;
    },
  },
};
