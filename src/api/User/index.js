import UserHandler from './handler.js';
import routes from './routes.js';

export default {
  name: 'users',
  version: '1.0.0',
  register: async (server, { usersService, validator, imageValidator }) => {
    const userHandler = new UserHandler(usersService, validator, imageValidator);
    await server.route(routes(userHandler));
  },
};
