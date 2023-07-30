import ProductHandler from './handler.js';
import routes from './routes.js';

export default {
  name: 'products',
  version: '1.0.0',
  register: async (server, { productsService, usersService, validator, imageValidator }) => {
    const productHandler = new ProductHandler(
      productsService,
      usersService,
      validator,
      imageValidator,
    );
    await server.route(routes(productHandler));
  },
};
