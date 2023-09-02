import axios from 'axios';

const API_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async donation(payload) {
    const response = await axios.post(
      API_URL + '/donation',
      { ...payload },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        },
      },
    );

    return response.data;
  },
};
