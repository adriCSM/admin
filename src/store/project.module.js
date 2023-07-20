import router from '@/router';
import projectService from '@/services/portofolio/project.service';
import store from '@/store';
import handler from '../services/error-handler';

const initialState = { data: null };
export const projects = {
  namespaced: true,
  state: initialState,
  actions: {
    async getMetadataImageProject({ commit }, id) {
      try {
        const response = await projectService.getMetadataImageProject(id);
        commit('metadata', response.data);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async postProject({ commit }, project) {
      try {
        store.commit('loading', true);

        await projectService.postProject(project);
        const response = await projectService.getProjects();
        store.commit('loading', false);
        commit('data', response.projects);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async getProjects({ commit }) {
      try {
        const response = await projectService.getProjects();
        commit('data', response.projects);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async getProject({ commit }, id) {
      try {
        store.commit('loading', true);
        const response = await projectService.getProject(id);
        commit('project', response);
        setTimeout(() => {
          store.commit('loading', false);
        }, 1000);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async editProject({ commit }, project) {
      try {
        commit;
        store.commit('loading', true);
        const message = await projectService.editProject(project);
        const response = await projectService.getProjects();
        commit('data', response.projects);
        store.commit('loading', false);
        store.commit('success', message);
        router.push({ name: 'Projects' });
      } catch (err) {
        handler.errorHandling(err);
      }
    },
    async deleteProject({ commit }, id) {
      try {
        store.commit('loading', true);

        const message = await projectService.deleteProject(id);
        store.commit('success', message);

        store.commit('loading', false);
        commit('delete', id);
      } catch (err) {
        handler.errorHandling(err);
      }
    },
  },
  mutations: {
    data(state, data) {
      state.data = data;
    },

    delete(state, id) {
      state.data = state.data.filter((project) => project._id !== id);
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
