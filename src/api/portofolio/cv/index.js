import routes from './routes.js';
import CvHandlers from './handler.js';

export default {
  name: 'cv',
  version: '1.0.0',
  register: async (server, { usersService, cvService, validator, imageValidator }) => {
    const certificateHandlers = new CvHandlers(usersService, cvService, validator, imageValidator);

    await server.route(routes(certificateHandlers));
  },
};
