import router from '@/router';
import store from '@/store';

export default {
  errorHandling(err) {
    console.log(err.message);
    if (
      err.message == 'Invalid token specified' ||
      (err.response && err.response.status == 401) ||
      (err.response && err.response.status == 403)
    ) {
      router.push({ name: 'Login' });
    }

    if (err.response) {
      console.log(err.response.data.message);
      store.commit('error', err.response.data.message);
      setTimeout(() => {
        store.commit('error', null);
      }, 3000);
    }
  },
};
