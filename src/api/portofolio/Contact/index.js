import ContactHandler from './handler.js';
import routes from './routes.js';

export default {
  name: 'contact',
  version: '1.0.0',
  register: async (server, { contactService, usersService, validator }) => {
    const contactHandler = new ContactHandler(contactService, usersService, validator);
    await server.route(routes(contactHandler));
  },
};
