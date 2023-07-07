const routes = require('./routes');
const ProjectHandlers = require('./handler');

module.exports = {
  name: 'projects',
  version: '1.0.0',
  register: async (server, { projectsService, usersService, validator }) => {
    const productsHandler = new ProjectHandlers(projectsService, usersService, validator);
    await server.route(routes(productsHandler));
  },
};
