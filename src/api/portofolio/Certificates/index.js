const routes = require('./routes');
const CertificateHandlers = require('./handler');

module.exports = {
  name: 'certificates',
  version: '1.0.0',
  register: async (server, { certificatesService, usersService, validator }) => {
    const certificateHandlers = new CertificateHandlers(
      certificatesService,
      usersService,
      validator,
    );

    await server.route(routes(certificateHandlers));
  },
};
