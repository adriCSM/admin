import router from '@/router';
import store from '@/store';

export default {
  errorHandling(err) {
    console.log(err);
    store.commit('loading', false);
    if (
      err.message == 'Invalid token specified' ||
      (err.response && err.response.status == 401) ||
      (err.response && err.response.status == 403)
    ) {
      store.commit('profile/myProfile', null);
      router.push({ name: 'Login' });
    }

    if (err.response) {
      if (err.response.data.message == 'Refresh token tidak valid.') {
        return router.push({ name: 'Login' });
      }
      store.commit('error', err.response.data.message);
    }
  },
};
