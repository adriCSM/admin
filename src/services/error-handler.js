import router from '@/router';
import store from '@/store';

export default {
  errorHandling(err) {
    if (
      err.message == 'Invalid token specified' ||
      (err.response && err.response.status == 401) ||
      (err.response && err.response.status == 403)
    ) {
      router.push({ name: 'Login' });
    }

    if (err.response) {
      store.commit('error', err.response.data.message);
      setTimeout(() => {
        store.commit('error', null);
      }, 3000);
    }
  },
};
