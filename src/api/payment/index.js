import PaymentHandler from './handler.js';
import routes from './routes.js';

export default {
  name: 'payment',
  version: '1.0.0',
  register: async (server, { midtransService, validator }) => {
    const paymentHandler = new PaymentHandler(midtransService, validator);
    await server.route(routes(paymentHandler));
  },
};
