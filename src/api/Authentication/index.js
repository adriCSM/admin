import AuthenticationHandler from './handler.js';
import routes from './routes.js';

export default {
  name: 'authnetication',
  version: '1.0.0',
  register: async (server, { authenticationsService, usersService, TokenManager, validator }) => {
    const authenticationHandler = new AuthenticationHandler(
      authenticationsService,
      usersService,
      TokenManager,
      validator,
    );
    await server.route(routes(authenticationHandler));
  },
};
