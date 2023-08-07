import jwtDecode from 'jwt-decode';
import AuthService from '../services/auth.service';
import ProfileService from '@/services/profile.service';
import handler from '../services/error-handler';
import store from '@/store';
import profileService from '@/services/profile.service';
import router from '@/router';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true } : { loggedIn: false };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    async login({ commit }, user) {
      try {
        const response = await AuthService.login(user);
        const { id } = jwtDecode(response.data.refreshToken);
        const userProfile = await ProfileService.getProfile(id);
        if (userProfile.role == 'user') {
          localStorage.removeItem('user_id');
          localStorage.removeItem('user');
          return store.commit(
            'error',
            `Anda tidak memiliki hak akses. Hanya Admin dan Colaborator yang dapat login. Silakan hubungi admin jika ingin berkolaborasi.`,
          );
        }
        commit('isLoggedIn', true);
        store.commit('info', `Selamat datang ${userProfile.username}`);
        router.push({ name: 'Home' });
      } catch (error) {
        commit('isLoggedIn', false);
        handler.errorHandling(error);
      }
    },
    async logout(context) {
      try {
        await AuthService.logout();
        context.commit('isLoggedIn', false);
        context.commit('username', context.state.username);
        setTimeout(() => {
          context.commit('username', null);
        }, 1000);
      } catch (error) {
        context.commit('isLoggedIn', true);
        handler.errorHandling(error);
      }
    },
    async register({ commit }, user) {
      try {
        commit;
        const message = await AuthService.register(user);
        const users = await profileService.getUsers();
        store.commit('profile/users', users);
        store.commit('success', message);
      } catch (error) {
        handler.errorHandling(error);
      }
    },
    // eslint-disable-next-line no-unused-vars
    async passwordForgot({ commit }, userEmail) {
      await AuthService.passwordForgot(userEmail);
    },
    // eslint-disable-next-line no-unused-vars
    async passwordReset({ commit }, passwordDTO) {
      await AuthService.passwordReset(passwordDTO);
    },
  },
  mutations: {
    isLoggedIn(state, loggedIn) {
      state.loggedIn = loggedIn;
    },

    username(state, username) {
      state.username = username;
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.loggedIn;
    },
  },
};
