import axios from 'axios';
import authHeader from '../auth-header';

const API_URL = process.env.VUE_APP_API_BASE_URL;

export default {
  async postProject(project) {
    const response = await axios.post(
      API_URL + '/portofolio/projects',
      {
        name: project.name,
        description: project.description,
        image: project.image,
        urlSite: project.url_site,
      },
      {
        headers: await authHeader(),
      },
    );
    return response.data;
  },
  async getProjects() {
    const response = await axios.get(API_URL + '/portofolio/projects');
    return response.data.data;
  },
  async getProject(id) {
    const response = await axios.get(API_URL + '/portofolio/projects/' + id, {
      headers: await authHeader(),
    });
    return response.data.data;
  },
  async editProject(project) {
    const response = await axios.put(
      API_URL + '/portofolio/projects/' + project.id,
      {
        name: project.name,
        description: project.description,
        image: project.image,
        urlSite: project.url_site,
      },
      {
        headers: await authHeader(),
      },
    );
    return response.data.data;
  },
  async deleteProject(id) {
    const response = await axios.delete(API_URL + '/portofolio/projects/' + id, {
      headers: await authHeader(),
    });
    return response.data.data;
  },
  async getMetadataImageProject(id) {
    const response = await axios.get(API_URL + '/portofolio/projects/metadata/' + id, {
      headers: await authHeader(),
    });
    return response.data;
  },
};
