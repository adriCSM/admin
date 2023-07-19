import routes from './routes.js';
import CvHandlers from './handler.js';

export default {
  name: 'cv',
  version: '1.0.0',
  register: async (server, { usersService, cvService, validator }) => {
    const certificateHandlers = new CvHandlers(usersService, cvService, validator);

    await server.route(routes(certificateHandlers));
  },
};
