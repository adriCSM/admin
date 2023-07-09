import axios from 'axios';
import authHeader from '../auth-header';

const API_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async postCertificate(certificate) {
    const response = await axios.post(
      API_URL + '/portofolio/certificates',
      {
        name: certificate.name,
        image: certificate.image,
      },
      {
        headers: await authHeader(),
      },
    );
    return response.data;
  },
  async getCertificates() {
    const response = await axios.get(API_URL + '/portofolio/certificates');
    return response.data.data;
  },
  async getCertificate(id) {
    const response = await axios.get(API_URL + '/portofolio/certificates/' + id, {
      headers: await authHeader(),
    });
    return response.data.data;
  },
  async editCertificate(certificate) {
    const response = await axios.put(
      API_URL + '/portofolio/certificates/' + certificate.id,
      {
        name: certificate.name,
        image: certificate.image,
      },
      {
        headers: await authHeader(),
      },
    );
    return response.data.data;
  },
  async deleteCertificates(id) {
    const response = await axios.delete(API_URL + '/portofolio/certificates/' + id, {
      headers: await authHeader(),
    });
    return response.data.data;
  },
  async getMetadataImageCertificate(id) {
    const response = await axios.get(API_URL + '/portofolio/certificates/metadata/' + id, {
      headers: await authHeader(),
    });
    return response.data;
  },
};
