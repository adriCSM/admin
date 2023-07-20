import authHeader from '@/services/auth-header';
import axios from 'axios';

export default {
  async addCv(cv) {
    const response = await axios.post(
      '/portofolio/cv',
      {
        name: cv.name,
        image: cv.image,
      },
      {
        headers: await authHeader(),
      },
    );

    return response.data.data.message;
  },
  async getCvs() {
    const response = await axios.get('/portofolio/cvs', {
      headers: await authHeader(),
    });
    return response.data.data;
  },
  async getCv(query) {
    const response = await axios.get(`/portofolio/cv?id=${query.id}&name=${query.name}`, {
      headers: await authHeader(),
    });
    return response.data.data;
  },
  async getCvImageMetadata(id) {
    const response = await axios.get(`/portofolio/cv/metadata/${id}`, {
      headers: await authHeader(),
    });
    return response.data.data;
  },
  async editCv(cv) {
    const response = await axios.put(
      `/portofolio/cv/${cv.id}`,
      {
        name: cv.name,
        image: cv.image,
      },
      {
        headers: await authHeader(),
      },
    );
    return response.data.message;
  },
  async deleteCv(id) {
    const response = await axios.delete('/portofolio/cv/' + id, {
      headers: await authHeader(),
    });
    return response.data.message;
  },
};
