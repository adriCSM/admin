import CartHandler from './handler.js';
import routes from './routes.js';

export default {
  name: 'carts',
  version: '1.0.0',
  register: async (server, { cartsService, validator }) => {
    const cartHandler = new CartHandler(cartsService, validator);

    await server.route(routes(cartHandler));
  },
};
