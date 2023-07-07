import projectService from '@/services/portofolio/project.service';
import handler from '../services/error-handler';

const initialState = { data: null };
export const projects = {
  namespaced: true,
  state: initialState,
  actions: {
    async getMetadataImageProject({ commit }, id) {
      try {
        const response = await projectService.getMetadataImageProject(id);
        console.log(response);
        commit('metadata', response.data);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async postProject({ commit }, project) {
      try {
        await projectService.postProject(project);
        const response = await projectService.getProjects();
        commit('projects', response.projects);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async getProjects({ commit }) {
      try {
        const response = await projectService.getProjects();
        commit('projects', response.projects);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async getProject({ commit }, id) {
      try {
        const response = await projectService.getProject(id);
        commit('project', response);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async editProject({ commit }, id) {
      try {
        const response = await projectService.editProject(id);
        commit('success', response);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async deleteProject({ commit }, id) {
      try {
        await projectService.deleteProject(id);
        const response = await projectService.getProjects();
        commit('projects', response.projects);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
  },
  mutations: {
    projects(state, projects) {
      state.data = projects;
    },
    project(state, project) {
      state.project = project;
    },
    success(state, success) {
      state.message = success;
    },
    metadata(state, metadata) {
      state.image_metadata = metadata;
    },
  },
};
