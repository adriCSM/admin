import routes from './routes.js';
import CertificateHandlers from './handler.js';

export default {
  name: 'certificates',
  version: '1.0.0',
  register: async (server, { certificatesService, usersService, validator, imageValidator }) => {
    const certificateHandlers = new CertificateHandlers(
      certificatesService,
      usersService,
      validator,
      imageValidator,
    );

    await server.route(routes(certificateHandlers));
  },
};
