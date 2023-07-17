import routes from './routes.js';
import ProjectHandlers from './handler.js';

export default {
  name: 'projects',
  version: '1.0.0',
  register: async (server, { projectsService, usersService, validator }) => {
    const productsHandler = new ProjectHandlers(projectsService, usersService, validator);
    await server.route(routes(productsHandler));
  },
};
