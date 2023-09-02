import axios from 'axios';

const API_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async donation(payload) {
    console.log('test');
    const response = await axios.post(
      API_URL + '/donation',
      { ...payload },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
    console.log(response.data);

    return response.data;
  },
};
